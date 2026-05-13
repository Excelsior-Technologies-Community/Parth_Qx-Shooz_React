import React from 'react';
import { useAppContext } from '../context/AppContext';
import { X, Plus, Minus, ShoppingBag, CreditCard, Tag, Truck, FileText } from 'lucide-react';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, addToCart } = useAppContext();

  // Calculate total quantities and sum
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + (priceNum * item.quantity);
  }, 0);

  // Free shipping goal ($1000 as seen in the mockup)
  const freeShippingThreshold = 1000;
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(freeShippingThreshold - subtotal, 0);

  // Recommend cross-sell products ("You may also like")
  const crossSellProducts = [
    {
      id: 10,
      name: 'Premium Leather Chelsea Boots',
      price: '$25.00',
      image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-11_a12147c9-4d7c-49e7-976a-690fea2264cd.jpg?v=1731314667&width=533'
    },
    {
      id: 5,
      name: 'Cushioned Trail Running Shoes',
      price: '$15.00',
      image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.jpg?v=1731313341&width=533'
    }
  ];

  if (!isCartOpen) return null;

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        
        {/* Header */}
        <div className="cart-drawer-header">
          <h2 className="cart-drawer-title">Cart ({totalQty})</h2>
          <button className="cart-drawer-close" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Shipping Goal */}
        <div className="cart-drawer-shipping-alert">
          <div className="shipping-icon-text">
            <Truck size={16} className="shipping-truck-icon" />
            <span>
              {remainingForFreeShipping > 0 ? (
                <>Spend <strong>${remainingForFreeShipping.toFixed(2)}</strong> for Free Shipping</>
              ) : (
                <strong>Congratulations! You have unlocked Free Shipping!</strong>
              )}
            </span>
          </div>
          <div className="shipping-progress-bg">
            <div 
              className="shipping-progress-bar" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="cart-drawer-content">
          {cart.length === 0 ? (
            <div className="cart-empty-message">
              <ShoppingBag size={48} strokeWidth={1} />
              <p>Your cart is currently empty.</p>
              <button 
                className="cart-shop-now" 
                onClick={() => {
                  setIsCartOpen(false);
                  window.location.href = '/shop';
                }}
              >
                RETURN TO SHOP
              </button>
            </div>
          ) : (
            <>
              {/* Product List */}
              <div className="cart-items-list">
                {cart.map((item) => {
                  const itemPrice = parseFloat(item.price.replace(/[^0-9.]/g, '')) || 0;
                  return (
                    <div className="cart-item" key={`${item.id}-${item.size}`}>
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-details">
                        <h4 className="cart-item-name">{item.name} - {item.size}</h4>
                        <p className="cart-item-price-qty">
                          {item.price} x {item.quantity}
                        </p>
                        
                        <div className="cart-qty-controls">
                          <button 
                            className="qty-btn" 
                            onClick={() => updateQuantity(item.id, item.size, -1)}
                          >
                            <Minus size={12} />
                          </button>
                          <span className="qty-val">{item.quantity}</span>
                          <button 
                            className="qty-btn" 
                            onClick={() => updateQuantity(item.id, item.size, 1)}
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-remove-wrapper">
                        <button 
                          className="cart-item-remove" 
                          onClick={() => removeFromCart(item.id, item.size)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cross-sell "You may also like" */}
              <div className="cart-cross-sell">
                <h3 className="cross-sell-heading">You may also like</h3>
                <div className="cross-sell-list">
                  {crossSellProducts.map((p) => {
                    const isAdded = cart.some(item => item.id === p.id);
                    return (
                      <div className="cross-sell-item" key={p.id}>
                        <div className="cross-sell-img">
                          <img src={p.image} alt={p.name} />
                        </div>
                        <div className="cross-sell-info">
                          <h4 className="cross-sell-title">{p.name}</h4>
                          <span className="cross-sell-price">{p.price}</span>
                        </div>
                        <button 
                          className="cross-sell-add-btn"
                          disabled={isAdded}
                          onClick={() => addToCart(p, 'S')}
                        >
                          {isAdded ? 'Added' : 'Add'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer actions & subtotal */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            {/* Quick Actions Tabs */}
            <div className="cart-quick-actions">
              <button className="quick-action-tab flex-center">
                <FileText size={14} /> <span>Order Note</span>
              </button>
              <button className="quick-action-tab flex-center">
                <Tag size={14} /> <span>Coupon</span>
              </button>
              <button className="quick-action-tab flex-center">
                <Truck size={14} /> <span>Shipping</span>
              </button>
            </div>

            {/* Total and Checkout */}
            <div className="cart-total-row flex-between">
              <span className="total-label">Total:</span>
              <span className="total-value">${subtotal.toFixed(2)}</span>
            </div>
            <p className="cart-taxes-disclaimer">
              Taxes and shipping calculated at checkout
            </p>
            <button className="cart-checkout-btn flex-center">
              <CreditCard size={16} /> CHECK OUT
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartDrawer;
