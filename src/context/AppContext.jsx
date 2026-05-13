import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Initialize state from local storage or default values
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('shooz_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('shooz_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('shooz_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shooz_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Helper to normalize product objects from different pages
  const normalizeProduct = (product) => {
    return {
      id: product.id,
      name: product.name || product.title || 'Product',
      price: product.price || '$0.00',
      brand: product.brand || product.vendor || 'Shooz',
      image: product.image || '',
    };
  };

  // Add to Cart
  const addToCart = (product, size = 'S') => {
    const normalized = normalizeProduct(product);
    setCart((prevCart) => {
      // Check if item with same ID and size already exists
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === normalized.id && item.size === size
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      } else {
        return [...prevCart, { ...normalized, size, quantity: 1 }];
      }
    });
    // Open cart drawer automatically when item is added
    setIsCartOpen(true);
  };

  // Remove from Cart
  const removeFromCart = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  };

  // Update Quantity
  const updateQuantity = (id, size, delta) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id && item.size === size) {
            const newQty = item.quantity + delta;
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  // Toggle Wishlist (add or remove)
  const toggleWishlist = (product) => {
    const normalized = normalizeProduct(product);
    setWishlist((prevWishlist) => {
      const isExist = prevWishlist.some((item) => item.id === normalized.id);
      if (isExist) {
        return prevWishlist.filter((item) => item.id !== normalized.id);
      } else {
        return [...prevWishlist, normalized];
      }
    });
  };

  // Check if item is wishlisted
  const isWishlisted = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isWishlisted,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
