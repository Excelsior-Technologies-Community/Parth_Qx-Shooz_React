import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import tennisSneakers from '../assets/images/tennis-sneakers.jpg';
import hikingBoots from '../assets/images/hiking-boots.jpg';
import leatherSneakers from '../assets/images/leather-sneakers.jpg';
import videoPic from '../assets/images/video-pic.png';
import logo1 from '../assets/images/text-logo-1.png';
import logo2 from '../assets/images/text-logo-2.png';
import logo3 from '../assets/images/text-logo-3.png';
import logo11 from '../assets/images/text-logo-11.png';
import logo5 from '../assets/images/text-logo-5.png';
import logo6 from '../assets/images/text-logo-6.png';
import logo7 from '../assets/images/text-logo-7.png';
import logo8 from '../assets/images/text-logo-8.png';
import logo9 from '../assets/images/text-logo-9.png';
import logo10 from '../assets/images/text-logo-10.png';
import logo13 from '../assets/images/text-logo-13.png';
import logo12 from '../assets/images/text-logo-12.png';
import blog1 from '../assets/images/blog-1.png';
import blog2 from '../assets/images/blog-2.png';
import blog3 from '../assets/images/blog-3.png';
import blog4 from '../assets/images/blog-4.png';
import newsletterImage from '../assets/images/newslatter-image.jpg';
import { Search, User, Heart, ShoppingBag, ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

/* --- AnnouncementBar --- */
export const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement-scroller">
        <ul className="announcement-list">
          {/* Repeating for seamless scrolling effect as shown in original html */}
          <li className="announcement-item">
            <span className="announcement-text">Enjoy 20% off your entire order with the code SHOEFRESH20.</span>
            <a href="#dismiss" className="announcement-dismiss">Dismiss</a>
          </li>
          <li className="announcement-item">
            <span className="announcement-text">Get 15% off your first purchase when you sign up for our newsletter.</span>
            <a href="#dismiss" className="announcement-dismiss">Dismiss</a>
          </li>
          <li className="announcement-item">
            <span className="announcement-text">Enjoy 20% off your entire order with the code SHOEFRESH20.</span>
            <a href="#dismiss" className="announcement-dismiss">Dismiss</a>
          </li>
          <li className="announcement-item">
            <span className="announcement-text">Get 15% off your first purchase when you sign up for our newsletter.</span>
            <a href="#dismiss" className="announcement-dismiss">Dismiss</a>
          </li>
        </ul>
      </div>
    </div>
  );
};


/* --- TopBar --- */
const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

export const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container flex-between topbar-content">
        <div className="topbar-left">
          One Day Delivery Available
        </div>
        <div className="topbar-right flex-center">
          <div className="topbar-account">
            <a href="#login" className="hover-link">Login</a> <span className="separator">/</span> <a href="#register" className="hover-link">Register</a>
          </div>
          <div className="topbar-socials flex-center">
            <a href="https://facebook.com/shopify" target="_blank" rel="noreferrer" className="social-link hover-link">
              <FacebookIcon />
            </a>
            <a href="https://twitter.com/shopify" target="_blank" rel="noreferrer" className="social-link hover-link">
              <TwitterIcon />
            </a>
            <a href="https://instagram.com/shopify" target="_blank" rel="noreferrer" className="social-link hover-link">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


/* --- Header --- */
export const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, wishlist, setIsCartOpen } = useAppContext();

  const totalCartQty = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalWishlistCount = wishlist.length;

  return (
    <header className="site-header">
      <div className="container flex-between header-content">
        {/* MOBILE LEFT ICONS */}
        <div className="mobile-menu-toggle-wrapper">
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button className="icon-btn search-btn mobile-search">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>
        
        {/* LOGO */}
        <div className="header-logo">
          <Link to="/">
            <img 
              src="//qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=280" 
              alt="SHO<shoe>Z" 
              width="149" 
              height="25" 
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className={`header-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-list flex-center">
            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item has-dropdown ${pathname === '/shop' ? 'active' : ''}`}>
              <Link to="/shop" className="nav-link flex-center">Shop <ChevronDown size={12} className="dropdown-icon" /></Link>
            </li>
            <li 
              className={`nav-item has-megamenu ${isProductDropdownOpen ? 'dropdown-active' : ''}`}
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <Link 
                to="/shop" 
                className="nav-link flex-center"
                onClick={(e) => {
                  // Allow navigation if clicking already open menu, or toggle state
                  if (!isProductDropdownOpen) {
                    e.preventDefault();
                    setIsProductDropdownOpen(true);
                  }
                }}
              >
                Product <ChevronDown size={12} className="dropdown-icon" />
              </Link>
              
              <div className={`mega-menu ${isProductDropdownOpen ? 'is-open' : ''}`}>
                <div className="container mega-menu-container">
                  {/* Column 1 */}
                  <div className="mega-column">
                    <h4 className="mega-heading">Product Layouts</h4>
                    <ul className="mega-links">
                      <li><Link to="/shop">1. Thumbnails - bottom</Link></li>
                      <li><Link to="/shop">2. Thumbnails - left</Link></li>
                      <li><Link to="/shop">3. Thumbnails - right</Link></li>
                      <li><Link to="/shop">4. Without Thumbnails</Link></li>
                      <li><Link to="/shop">5. List - stacked</Link></li>
                      <li><Link to="/shop">6. List - grid</Link></li>
                      <li><Link to="/shop">7. Collage - style 1</Link></li>
                      <li><Link to="/shop">8. Collage - style 2</Link></li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div className="mega-column">
                    <h4 className="mega-heading">Product Type</h4>
                    <ul className="mega-links">
                      <li><Link to="/shop">Simple Product</Link></li>
                      <li><Link to="/shop">Variable Product</Link></li>
                      <li><Link to="/shop">With Video</Link></li>
                      <li><Link to="/shop">Sold Out - Coming</Link></li>
                    </ul>
                  </div>

                  {/* Column 3 */}
                  <div className="mega-column">
                    <h4 className="mega-heading">List Featured 1</h4>
                    <ul className="mega-links">
                      <li><Link to="/shop">Sticky ATC</Link></li>
                      <li><Link to="/shop">Frequently Bought Together</Link></li>
                      <li><Link to="/shop">Count Down</Link></li>
                      <li><Link to="/shop">Cross Selling</Link></li>
                      <li><Link to="/shop">Upsell Popup</Link></li>
                      <li><Link to="/shop">Low Stock Alert</Link></li>
                      <li><Link to="/shop">Pickup Store</Link></li>
                    </ul>
                  </div>

                  {/* Column 4 */}
                  <div className="mega-column">
                    <h4 className="mega-heading">List Featured 2</h4>
                    <ul className="mega-links">
                      <li><Link to="/shop">Dropdown Variant</Link></li>
                      <li><Link to="/shop">Swatch Variant Color</Link></li>
                      <li><Link to="/shop">Swatch Variant Image</Link></li>
                      <li><Link to="/shop">Variant Image Square</Link></li>
                      <li><Link to="/shop">Size Guide</Link></li>
                      <li><Link to="/shop">Description Accordion</Link></li>
                      <li><Link to="/shop">Description Tab Center</Link></li>
                    </ul>
                  </div>

                  {/* Column 5: Showcase */}
                  <div className="mega-column mega-showcase">
                    <div className="showcase-image-box">
                      <img src={hikingBoots} alt="Waterproof Hiking Boots" />
                    </div>
                    <div className="showcase-info">
                      <span className="showcase-price">$25.00</span>
                      <h4 className="showcase-title">Waterproof Hiking Boots</h4>
                      <span className="showcase-vendor">TrailGear</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className={`nav-item has-dropdown ${(pathname === '/blogs' || pathname === '/blogs/news') ? 'active' : ''}`}>
              <Link to="/blogs" className="nav-link flex-center">Blog <ChevronDown size={12} className="dropdown-icon" /></Link>
            </li>
            <li 
              className={`nav-item has-dropdown ${isPagesDropdownOpen ? 'dropdown-active' : ''}`}
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
              onMouseLeave={() => setIsPagesDropdownOpen(false)}
            >
              <Link 
                to="#" 
                className="nav-link flex-center"
                onClick={(e) => {
                  e.preventDefault();
                  setIsPagesDropdownOpen(!isPagesDropdownOpen);
                }}
              >
                Pages <ChevronDown size={12} className="dropdown-icon" />
              </Link>
              <ul className={`dropdown-menu ${isPagesDropdownOpen ? 'is-open' : ''}`}>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/faqs">Faqs</Link></li>
                <li><Link to="/lookbook">Lookbook</Link></li>
                <li><Link to="/sizeguide">Size Guide</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#buy" className="nav-link relative">
                Buy Now
                <span className="badge-sale">Sale</span>
              </a>
            </li>
          </ul>
        </nav>

        {/* ICONS */}
        <div className="header-icons flex-center">
          <button className="icon-btn search-btn desktop-search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="icon-btn user-btn">
            <User size={20} strokeWidth={1.5} />
          </button>
          <Link to="/wishlist" className="icon-btn wishlist-btn position-relative flex-center">
            <Heart size={20} strokeWidth={1.5} />
            <span className="indicator flex-center">{totalWishlistCount}</span>
          </Link>
          <button className="icon-btn cart-btn flex-center" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="cart-text">({totalCartQty})</span>
          </button>
        </div>

      </div>
    </header>
  );
};


/* --- Hero --- */
const slides = [
  {
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553',
    subtitle: 'STEP INTO STYLE',
    title: 'Discover The Latest Trends In Footwear',
    description: 'From classic sneakers to trendy boots, our collection has something for everyone.',
    btnText: 'SHOP NOW'
  },
  {
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552',
    subtitle: 'ELEVATE YOUR LOOK',
    title: 'Find The Perfect Pair Of Shoes To Complete.',
    description: 'Explore our wide range of styles, colors, and materials to find the perfect shoes for any occasion.',
    btnText: 'SHOP NOW'
  },
  {
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045552',
    subtitle: 'COMFORT MEETS FASHION',
    title: 'Discover Shoes That Look Great And Feel Even Better.',
    description: 'Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.',
    btnText: 'SHOP NOW'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <div 
            className="hero-bg" 
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
          <div className="hero-overlay"></div>
          
          <div className="container hero-content-wrapper">
             {/* Render text only for active slide to reset animations */}
            {index === currentSlide && (
              <div className="hero-text-content animate-fade-in">
                <p className="hero-subtitle delay-100">{slide.subtitle}</p>
                <h1 className="hero-title delay-200">
                  {slide.title}
                </h1>
                <p className="hero-description delay-300">
                  {slide.description}
                </p>
                <div className="hero-action delay-300">
                  <button className="btn-primary">
                    {slide.btnText} <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Slider Indicators */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


/* --- PromoGrid --- */
const promos = [
  {
    subtitle: 'TRENDING',
    type: 'Men',
    title: 'Collections',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920',
    link: '#men'
  },
  {
    subtitle: 'LATEST',
    type: 'Women',
    title: 'Collections',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920',
    link: '#women'
  },
  {
    subtitle: 'COMFORT',
    type: 'Kid',
    title: 'Collections',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920',
    link: '#kids'
  }
];

const PromoGrid = () => {
  return (
    <section className="promo-grid-section">
      <div className="container promo-grid">
        {promos.map((promo, index) => (
          <div key={index} className="promo-item">
            <div className="promo-image-wrapper">
              <img src={promo.image} alt={`${promo.type} ${promo.title}`} loading="lazy" />
            </div>
            <div className="promo-content">
              <div className="promo-text-group">
                <p className="promo-subtitle">{promo.subtitle}</p>
                <h3 className="promo-title">{promo.type}<br/>{promo.title}</h3>
              </div>hey 
              <a href={promo.link} className="btn-promo-link">
                SHOP NOW
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


/* --- ProductGrid --- */
const productGridProducts = [
  {
    id: 1,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg',
    price: '$25.00',
    title: 'Classic White Tennis Sneakers',
    vendor: 'SportyFeet',
    hasSwatches: false,
    hasCountdown: false
  },
  {
    id: 2,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg',
    price: '$25.00',
    title: 'Waterproof Hiking Boots',
    vendor: 'TrailGear',
    hasSwatches: true,
    hasCountdown: true
  },
  {
    id: 3,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg',
    price: '$21.00',
    title: 'Classic Leather Sneakers',
    vendor: 'UrbanStep',
    hasSwatches: false,
    hasCountdown: false
  },
  {
    id: 4,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg',
    price: '$25.00',
    title: 'High-Top Canvas Sneakers',
    vendor: 'TrendyFeet',
    hasSwatches: false,
    hasCountdown: false
  }
];

const ProductGrid = () => {
  const { addToCart, toggleWishlist, isWishlisted } = useAppContext();

  return (
    <section className="product-grid-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center">
          <p className="pre-heading">THE LATEST TRENDS IN ATHLETIC FOOTWEAR</p>
          <h2 className="main-heading">Sneakers & Kicks</h2>
          
          <div className="nav-tabs">
            <button className="tab-btn active">FEATURED</button>
            <button className="tab-btn">NEW ARRIVALS</button>
            <button className="tab-btn">BEST SELLER</button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {productGridProducts.map((product) => {
            const wishlisted = isWishlisted(product.id);
            return (
              <div key={product.id} className="product-card product-card-shop">
                
                <div className="product-image-container product-image-wrapper">
                  <img src={product.image} alt={product.title} loading="lazy" />
                  
                  <div className="product-actions-overlay">
                    <button 
                      className={`action-btn ${wishlisted ? 'active' : ''}`}
                      onClick={() => toggleWishlist(product)}
                      style={{ color: wishlisted ? '#ae3f4f' : 'inherit' }}
                      title={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
                    >
                      <Heart size={18} fill={wishlisted ? '#ae3f4f' : 'none'} />
                    </button>
                    <button className="action-btn" title="Quick View"><Search size={18} /></button>
                    <button 
                      className="action-btn" 
                      title="Add to Cart"
                      onClick={() => addToCart(product, 'S')}
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                  
                  {product.hasCountdown && (
                    <div className="countdown-timer">
                      <div className="time-block">
                        <span className="time-val">1630</span>
                        <span className="time-label">Days</span>
                      </div>
                      <div className="time-block">
                        <span className="time-val">18</span>
                        <span className="time-label">Hours</span>
                      </div>
                      <div className="time-block">
                        <span className="time-val">37</span>
                        <span className="time-label">Mins</span>
                      </div>
                      <div className="time-block">
                        <span className="time-val">38</span>
                        <span className="time-label">Secs</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="product-info">
                  {product.hasSwatches && (
                    <div className="product-swatches">
                      <span className="swatch black"></span>
                      <span className="swatch grey"></span>
                      <span className="swatch dark-grey"></span>
                    </div>
                  )}
                  <div className="product-price">{product.price}</div>
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-vendor">{product.vendor}</p>
                  
                  <button 
                    className="add-to-cart-btn-shop" 
                    onClick={() => addToCart(product, 'S')}
                    style={{
                      width: '100%',
                      marginTop: '12px',
                      padding: '10px',
                      backgroundColor: '#333',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontWeight: '600',
                      fontSize: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#ae3f4f'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
                  >
                    <ShoppingBag size={14} /> ADD TO CART
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


/* --- FeaturedBanner --- */
const FeaturedBanner = () => {
  return (
    <section className="featured-banner-section">
      {/* Banner Area */}
      <div className="banner-full-width">
        <div 
          className="banner-bg" 
          style={{ backgroundImage: `url('https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552')` }}
        ></div>
        <div className="banner-content-container container">
          <div className="banner-text-box">
            <p className="banner-subtitle">COMFORT MEETS FASHION</p>
            <h2 className="banner-title">
              Discover shoes that look great<br />and feel even better
            </h2>
            <p className="banner-description">
              Our collection features comfortable and stylish footwear designed to keep your feet happy all day long.
            </p>
            <button className="btn-primary banner-btn">
              SHOP NOW <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Colorful Marquee Strip */}
      <div className="multi-marquee">
        <div className="marquee-scroller">
          <ul className="marquee-list">
            <li className="marquee-item">
              <span className="dot"></span>
              Buy one pair of shoes, get the second pair 50% off. Use code BOGO50
            </li>
            <li className="marquee-item">
              <span className="dot"></span>
              Enjoy 20% off your entire order with the code SHOEFRESH20
            </li>
            <li className="marquee-item">
              <span className="dot"></span>
              Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15
            </li>
            {/* Duplicate for seamless scrolling */}
            <li className="marquee-item">
              <span className="dot"></span>
              Buy one pair of shoes, get the second pair 50% off. Use code BOGO50
            </li>
            <li className="marquee-item">
              <span className="dot"></span>
              Enjoy 20% off your entire order with the code SHOEFRESH20
            </li>
            <li className="marquee-item">
              <span className="dot"></span>
              Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};


/* --- BootsAndBooties --- */
const categories = [
  {
    title: 'Athletic Footwear',
    count: 8,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=800',
    link: '#athletic-footwear'
  },
  {
    title: 'Luxury Leather Shoes',
    count: 8,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=800',
    link: '#luxury-leather-shoes'
  },
  {
    title: 'Sustainable Footwear',
    count: 8,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=800',
    link: '#sustainable-footwear'
  },
  {
    title: 'Sandals & Slides',
    count: 8,
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=800',
    link: '#sandals-slides'
  }
];

const BootsAndBooties = () => {
  return (
    <section className="boots-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <p className="pre-heading">STYLISH AND COMFORTABLE FOR EVERY SEASON</p>
          <h2 className="main-heading">Boots & Booties</h2>
          <p className="section-description">
            Check out our collection of the top New Products<br />that encourage conversion.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="boots-grid">
          {categories.map((cat, index) => (
            <a href={cat.link} key={index} className="boots-item">
              <div className="boots-image-wrapper">
                <img src={cat.image} alt={cat.title} loading="lazy" />
              </div>
              <div className="boots-overlay">
                <div className="boots-label">
                  {cat.title} <span className="boots-count">{cat.count}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


/* --- TimelessStyles --- */
const banners = [
  {
    subtitle: 'COMFORT MEETS FASHION',
    title: 'Discover shoes\nthat look great',
    buttonText: 'SHOP NOW',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-1.png?v=1731045537&width=1920'
  },
  {
    subtitle: 'ELEVATE YOUR LOOK',
    title: 'Find the perfect pair of\nshoes',
    buttonText: 'SHOP NOW',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-2.png?v=1731045532&width=1920'
  },
  {
    subtitle: 'STEP INTO STYLE',
    title: 'The latest trends in\nfootwear',
    buttonText: 'SHOP NOW',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-3.png?v=1731045526&width=1920'
  },
  {
    subtitle: 'SHOP BY BRAND',
    title: 'Find your favorite\nbrands and styles',
    buttonText: 'SHOP NOW',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-4.png?v=1731045521&width=1920'
  },
  {
    subtitle: 'SALE AND CLEARANCE',
    title: 'Shop our latest deals\nand discounts',
    buttonText: 'SHOP NOW',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/files/five-col-banner-5.png?v=1731045516&width=1920'
  }
];

const TimelessStyles = () => {
  return (
    <section className="timeless-section">
      <div className="container">
        {/* Header Content */}
        <div className="section-header text-center dark-theme-header">
          <p className="pre-heading">FASHION SNEAKERS</p>
          <h2 className="main-heading text-white">Timeless styles for everyday wear</h2>
          <p className="section-description text-white-muted">
            High-performance footwear for sports and<br />workouts
          </p>
        </div>

        {/* 5-Column Grid Layout */}
        <div className="timeless-grid">
          {banners.map((item, index) => (
            <a href="#shop" key={index} className="timeless-item">
              <div className="timeless-image">
                <img src={item.image} alt={item.subtitle} loading="lazy" />
              </div>
              <div className="timeless-content">
                <p className="timeless-subtitle">{item.subtitle}</p>
                <h3 className="timeless-title">
                  {item.title.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                </h3>
                <span className="timeless-btn">{item.buttonText}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};


/* --- SeasonsEndSale --- */
const seasonsProducts = [
  {
    id: 1,
    name: 'Classic White Tennis Sneakers',
    price: '$25.00',
    image: tennisSneakers,
    link: '#'
  },
  {
    id: 2,
    name: 'Waterproof Hiking Boots',
    price: '$25.00',
    image: hikingBoots,
    link: '#'
  },
  {
    id: 3,
    name: 'Classic Leather Sneakers',
    price: '$21.00',
    image: leatherSneakers,
    link: '#'
  }
];

const SeasonsEndSale = () => {
  return (
    <section className="seasons-end-sale">
      <div className="container">
        <div className="section-header text-center">
          <div className="subtop">Season's End Sale</div>
          <h3 className="section-title">
            <span>Huge discounts on last season's styles</span>
          </h3>
          <div className="des-header">
            Himenaeos nascetur tristique consequat mus ad. Accumsan fringilla in laoreet id bibendum et.
          </div>
        </div>

        <div className="products-grid-row">
          {[1, 2, 3].map((colIndex) => (
            <div key={colIndex} className="products-column">
              <div className="product-list-inner">
                {seasonsProducts.map((product, idx) => (
                  <div key={product.id} className={`product-list-item ${idx !== seasonsProducts.length - 1 ? 'border-bottom' : ''}`}>
                    <a href={product.link} className="product-image-link">
                      <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                    </a>
                    <div className="product-info">
                      <a href={product.link} className="product-name">
                        {product.name}
                      </a>
                      <div className="product-price">
                        {product.price}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* --- SaveBigOnShoes --- */
const SaveBigOnShoes = () => {
  return (
    <section className="save-big-section">
      <div className="save-big-container">
        <div className="save-big-row">
          <div className="save-big-content">
            <div className="subtop">Our most popular styles</div>
            <h3 className="section-title">
              Save big on shoes<br /> from last season
            </h3>
            <div className="section-desc">
              Morbi natoque id finibus natoque sapien turpis elementum maximus. Sociosqu auctor a urna consequat laoreet nisi accumsan magna. Adipiscing vulputate nec euismod, a aliquam enim. Mi facilisi ex est habitant lacus sagittis vitae.
              <br /><br />
              Molestie dolor mus vitae penatibus sed lectus convallis ut neque. Leo elementum euismod penatibus cras sociosqu aliquet tellus.
            </div>
            <div className="button-wrapper">
              <a href="#" className="shop-now-btn">
                Shop Now
                <svg className="icon-arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 4.50012H0V3.50012H9V4.50012Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 4.50012L5.99999 1.50008L6.70709 0.792969L9.70709 3.79297L9 4.50012Z" fill="currentColor"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M9 3.50012L5.99999 6.50017L6.70709 7.20728L9.70709 4.20728L9 3.50012Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="save-big-video">
            <div className="video-wrapper">
              <img src={videoPic} alt="Fashion Style Store" className="video-image" />
              <button className="play-btn">
                <span className="visually-hidden">Play video</span>
                <div className="play-icon">
                  <div className="play-mark"></div>
                  <div className="play-circle"></div>
                  <div className="play-triangle"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-stores-banner">
        <div className="banner-content">
          <h3 className="banner-title">Discover Our Stores: Your Local Shoe Haven</h3>
          <div className="banner-actions">
            <div className="countdown-placeholder"></div>
            <a href="#" className="find-store-btn">Find Store</a>
          </div>
        </div>
      </div>
    </section>
  );
};


/* --- CustomerFeedback --- */
const CustomerFeedback = () => {
  const logos = [
    logo1, logo2, logo3, logo11, logo5, logo6, 
    logo7, logo8, logo9, logo10, logo13, logo12
  ];

  return (
    <section className="customer-feedback-section">
      <div className="feedback-container">
        <div className="feedback-header">
          <h3 className="feedback-title">Customer Feedback Highlights</h3>
          <p className="feedback-desc">
            Laoreet ridiculus congue magna malesuada phasellus condimentum taciti mus primis.
          </p>
        </div>
        
        <div className="brand-carousel">
          <div className="brand-grid">
            {logos.map((logo, index) => (
              <div key={index} className="brand-item">
                <a href="#" className="brand-image-link">
                  <img src={logo} alt={`Brand logo ${index + 1}`} className="brand-img" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* --- RecentPosts --- */
const RecentPosts = () => {
  const mainPost = {
    image: blog1,
    title: "The Future Of Footwear: A Look Ahead",
    date: "Oct 28 2024",
    comments: "0 comments",
    description: "In an era where technology touches every aspect of our lives, the footwear industry is no exception. At Qx Shooz..."
  };

  const sidePosts = [
    {
      image: blog2,
      title: "Eco-Friendly Footwear: Sustainable Style",
      date: "Oct 28 2024",
      comments: "0 comments"
    },
    {
      image: blog3,
      title: "The Ultimate Guide to Sneaker Care",
      date: "Oct 28 2024",
      comments: "0 comments"
    },
    {
      image: blog4,
      title: "How to Style Your Favorite Sneakers",
      date: "Oct 28 2024",
      comments: "0 comments"
    }
  ];

  return (
    <section className="recent-posts-section">
      <div className="recent-posts-container">
        <div className="recent-posts-header">
          <div className="subtop">FROM THE BLOG</div>
          <h3 className="section-title">Recently Our Posts</h3>
          <p className="section-desc">
            Sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
        </div>

        <div className="posts-grid">
          <div className="main-post">
            <div className="post-image-wrapper">
              <img src={mainPost.image} alt={mainPost.title} className="post-img" />
              <div className="post-content-overlay">
                <div className="post-meta">
                  <span>{mainPost.date}</span>
                  <span className="meta-divider"> </span>
                  <svg className="comment-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                  <span>{mainPost.comments}</span>
                </div>
                <h4 className="post-title"><a href="#">{mainPost.title}</a></h4>
              </div>
            </div>
          </div>

          <div className="side-posts">
            {sidePosts.map((post, index) => (
              <div key={index} className="side-post-item">
                <div className="side-post-image">
                  <img src={post.image} alt={post.title} className="post-img" />
                </div>
                <div className="side-post-content">
                  <div className="post-meta">
                    <span>{post.date}</span>
                    <span className="meta-divider"> </span>
                    <svg className="comment-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <span>{post.comments}</span>
                  </div>
                  <h4 className="post-title"><a href="#">{post.title}</a></h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* --- Footer --- */
export const Footer = ({ showNewsletter = true }) => {
  return (
    <footer className="site-footer">
      {/* Newsletter Banner */}
      {showNewsletter && (
        <div className="newsletter-section">
          <div className="newsletter-container">
            <div className="newsletter-wrapper">
              <div className="newsletter-left">
                <div className="newsletter-content">
                  <h3 className="newsletter-title">Subscribe to our news <br/>articals</h3>
                  <form className="newsletter-form">
                    <input type="email" placeholder="Your email" className="newsletter-input" />
                    <button type="submit" className="newsletter-btn">SUBSCRIBE</button>
                  </form>
                </div>
              </div>
              <div className="newsletter-right" style={{ backgroundImage: `url(${newsletterImage})` }}>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Links */}
      <div className="footer-links-section">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Information */}
            <div className="footer-column">
              <h4 className="footer-heading">INFOMATION</h4>
              <ul className="footer-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Returns Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">QUICK LINKS</h4>
              <ul className="footer-list">
                <li><a href="#">My Account</a></li>
                <li><a href="#">My Cart</a></li>
                <li><a href="#">Size Chart</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Gift Card</a></li>
              </ul>
            </div>

            {/* Logo and Contact */}
            <div className="footer-column center-column">
              <div className="footer-logo text-center flex-center" style={{marginBottom: "20px"}}>
                <img 
                  src="//qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=280" 
                  alt="SHOOZ" 
                  width="149" 
                  height="25" 
                />
              </div>
              <ul className="footer-contact-list text-center">
                <li>T: + (08) 9055 0269</li>
                <li>E: example@example.com</li>
                <li>50 Porana Place, West Casuarinas,<br/>Western Australia, Australia.</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-column">
              <h4 className="footer-heading">CATEGORIES</h4>
              <ul className="footer-list">
                <li><a href="#">Athletic Footwear</a></li>
                <li><a href="#">Boots for Every Occasion</a></li>
                <li><a href="#">Luxury Leather Shoes</a></li>
                <li><a href="#">Sandals & Slides</a></li>
                <li><a href="#">Sneakerhead's Haven</a></li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer-column">
              <h4 className="footer-heading">SUPPORT</h4>
              <ul className="footer-list">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Sign In</a></li>
                <li><a href="#">My Account</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    <div className="footer-bottom">
      <div className="footer-container">
        <div className="bottom-content flex-between">
          <div className="copyright">Copyright © 2024 <span style={{color: "#ae3f4f"}}>Shooz.</span> All rights reserved</div>
          <div className="flex-center" style={{gap: '15px'}}>
            <div className="footer-brands flex-center" style={{gap: '6px'}}>
              <span className="pay-badge amex">AMEX</span>
              <span className="pay-badge apple">Pay</span>
              <span className="pay-badge diners">Diners</span>
              <span className="pay-badge discover">DISCOVER</span>
              <span className="pay-badge jcb">JCB</span>
              <span className="pay-badge mastercard">mastercard</span>
              <span className="pay-badge visa">VISA</span>
            </div>
            <button className="back-to-top" onClick={() => window.scrollTo(0,0)} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #ddd', background: '#fff', cursor: 'pointer', color: '#000'}}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    </footer>
  );
};



/* --- Home Page --- */
function Home() {
  return (
    <>
      <AnnouncementBar />
      <TopBar />
      <Header />
      <main>
        <Hero />
        <PromoGrid />
        <ProductGrid />
        <FeaturedBanner />
        <BootsAndBooties />
        <TimelessStyles />
        <SeasonsEndSale />
        <SaveBigOnShoes />
        <CustomerFeedback />
        <RecentPosts />
      </main>
      <Footer />
    </>
  )
}

export default Home;
