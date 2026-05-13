import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';
import { useAppContext } from '../context/AppContext';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useAppContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wishlist-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="wishlist-page-content">
        {/* Breadcrumbs */}
        <div className="breadcrumbs-wrapper" style={{ padding: '20px 0', borderBottom: '1px solid #f5f5f5' }}>
          <div className="container">
            <nav className="breadcrumbs" style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>
              <Link to="/" className="breadcrumb-item" style={{ color: '#e7a33e', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <span className="breadcrumb-separator" style={{ margin: '0 10px', color: '#ccc' }}>/</span>
              <span className="breadcrumb-item breadcrumb-current" style={{ color: '#333' }}>Wishlist</span>
            </nav>
          </div>
        </div>

        <div className="container" style={{ padding: '60px 0', minHeight: '450px' }}>
          <h1 className="wishlist-title text-center" style={{ fontSize: '36px', fontWeight: '700', marginBottom: '40px', letterSpacing: '1px' }}>
            Wishlist
          </h1>

          {wishlist.length === 0 ? (
            <div className="wishlist-empty-state text-center" style={{ padding: '40px 0' }}>
              <Heart size={64} strokeWidth={1} style={{ color: '#ccc', marginBottom: '20px' }} />
              <p style={{ color: '#666', fontSize: '16px', marginBottom: '25px' }}>
                Your wishlist is currently empty.
              </p>
              <Link 
                to="/shop" 
                className="btn-primary" 
                style={{ 
                  display: 'inline-block',
                  padding: '12px 35px', 
                  backgroundColor: '#ae3f4f', 
                  color: '#fff', 
                  textDecoration: 'none', 
                  fontWeight: '600', 
                  borderRadius: '3px',
                  fontSize: '14px',
                  transition: 'background-color 0.2s ease'
                }}
              >
                GO TO SHOP
              </Link>
            </div>
          ) : (
            <div className="wishlist-grid" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
              gap: '30px',
              marginTop: '20px'
            }}>
              {wishlist.map((item) => (
                <div 
                  className="product-card-shop" 
                  key={item.id}
                  style={{
                    border: '1px solid #f0f0f0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.02)'
                  }}
                >
                  <div className="product-image-wrapper" style={{ position: 'relative' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: 'auto', display: 'block' }} 
                    />
                    <div className="product-actions-overlay">
                      <button 
                        className="action-btn active" 
                        title="Remove from Wishlist"
                        onClick={() => toggleWishlist(item)}
                        style={{ backgroundColor: '#ae3f4f', color: '#fff' }}
                      >
                        <Heart size={18} fill="#fff" />
                      </button>
                      <button 
                        className="action-btn" 
                        title="Add to Cart"
                        onClick={() => addToCart(item, 'S')}
                      >
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>

                  <div className="product-info-shop text-center" style={{ padding: '20px' }}>
                    <h3 className="product-name-shop" style={{ fontSize: '15px', fontWeight: '600', color: '#333', marginBottom: '8px', height: '40px', overflow: 'hidden' }}>
                      {item.name}
                    </h3>
                    
                    <div className="product-price-row justify-center" style={{ marginBottom: '15px' }}>
                      <span className="current-price" style={{ color: '#ae3f4f', fontWeight: '700', fontSize: '16px' }}>
                        {item.price}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <button 
                        onClick={() => addToCart(item, 'S')}
                        className="add-to-cart-btn-shop"
                        style={{
                          width: '100%',
                          padding: '10px',
                          backgroundColor: '#333',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '13px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'background-color 0.2s'
                        }}
                      >
                        <ShoppingBag size={14} /> ADD TO CART
                      </button>

                      <button 
                        onClick={() => toggleWishlist(item)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#888',
                          fontSize: '13px',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          marginTop: '5px',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#ae3f4f'}
                        onMouseLeave={(e) => e.target.style.color = '#888'}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer showNewsletter={false} />
    </div>
  );
};

export default Wishlist;
