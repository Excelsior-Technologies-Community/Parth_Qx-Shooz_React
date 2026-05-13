import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';
import { Search, Heart, ShoppingBag } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const LookbookHero = () => (
    <section className="lookbook-hero" style={{ 
        backgroundImage: `url('https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695')`, 
        backgroundColor: '#333', 
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '160px 0',
        textAlign: 'center',
        color: '#fff',
        position: 'relative'
    }}>
      <div className="lookbook-hero-overlay" style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)'
      }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <h6 style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '2px', marginBottom: '20px', textTransform: 'uppercase', color: '#fff' }}>
          STEP ONTO THE RUNWAY OF LIFE
        </h6>
        <h1 style={{ fontSize: '42px', fontWeight: '700', marginBottom: '20px', color: '#fff' }}>
          Your Everyday Fashion, Runway Ready
        </h1>
        <p style={{ fontSize: '15px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', color: '#eaeaea' }}>
          Transform your daily look into a runway-worthy ensemble.<br/>
          Our curated collection brings the glamour of the catwalk to your everyday life.
        </p>
      </div>
    </section>
);

const ChaseSeasons = () => (
    <section className="chase-seasons" style={{ padding: '80px 0' }}>
        <div className="container">
            <div className="text-center" style={{ marginBottom: '40px' }}>
                <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto' }}>Update your wardrobe with the latest seasonal trends. From cozy knits to stylish layers.</p>
            </div>
            <div className="lookbook-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                
                <div className="lookbook-block" style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=1920" alt="Authenticity" style={{ width: '100%', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: '#fff' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Express Your Authenticity</h2>
                        <p style={{ marginBottom: '20px' }}>Fashion that Speaks Your Unique Style</p>
                        <Link to="/shop" className="btn-primary" style={{ padding: '10px 25px', backgroundColor: '#fff', color: '#000', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>SHOP NOW</Link>
                    </div>
                </div>

                <div className="lookbook-block" style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/col-6.png?v=1731657936&width=1920" alt="Chic" style={{ width: '100%', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: '#fff' }}>
                        <h2 style={{ fontSize: '32px', marginBottom: '10px' }}>Seasonal Chic Arrivals</h2>
                        <p style={{ marginBottom: '20px' }}>Step into the Latest Fashion Trends</p>
                        <Link to="/shop" className="btn-primary" style={{ padding: '10px 25px', backgroundColor: '#fff', color: '#000', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>SHOP NOW</Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
);

const ChicComfortable = () => (
    <section className="chic-comfortable" style={{ padding: '60px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '15px' }}>CHIC AND COMFORTABLE</h2>
            <h4 style={{ fontSize: '18px', color: '#666', marginBottom: '20px', fontWeight: '400' }}>Style Meets Comfort In Every Outfit</h4>
            <p style={{ color: '#888', lineHeight: '1.6' }}>Chic doesn’t have to compromise comfort. Embrace style that feels as good as it looks. Our collection prioritizes breathable fabrics and ergonomic designs.</p>
        </div>
    </section>
);

const TimelessElegance = () => {
    const { addToCart, toggleWishlist, isWishlisted } = useAppContext();
    const products = [
        { id: 1, name: 'Classic Leather Sneakers', price: '$21.00', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=533' },
        { id: 2, name: 'Cushioned Trail Running Shoes', price: '$15.00', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.jpg?v=1731311341&width=533' },
        { id: 3, name: 'High-Top Canvas Sneakers', price: '$25.00', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=533' },
        { id: 4, name: 'Lightweight Running Shoes', price: '$0.00', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-8_c70f2fa3-a720-4f73-a20b-0e0e01967d19.jpg?v=1731311653&width=533', badge: 'Sold out' }
    ];

    return (
        <section className="timeless-elegance" style={{ padding: '60px 0', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '40px' }}>
                    <p style={{ color: '#666' }}>Experience the perfect blend of timeless elegance and modern flair.</p>
                    <div className="tabs" style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                        <button style={{ border: 'none', background: 'transparent', fontWeight: 'bold', borderBottom: '2px solid #ae3f4f', paddingBottom: '5px', cursor: 'pointer' }}>BAG</button>
                        <button style={{ border: 'none', background: 'transparent', color: '#666', paddingBottom: '5px', cursor: 'pointer' }}>GLASSES</button>
                        <button style={{ border: 'none', background: 'transparent', color: '#666', paddingBottom: '5px', cursor: 'pointer' }}>TRENDING</button>
                    </div>
                </div>
                <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {products.map(p => {
                        const wishlisted = isWishlisted(p.id);
                        return (
                            <div className="product-card-shop" key={p.id}>
                                <div className="product-image-wrapper">
                                    {p.badge && <span className="product-badge" style={{background: '#333'}}>{p.badge}</span>}
                                    <img src={p.image} alt={p.name} />
                                    <div className="product-actions-overlay">
                                        <button 
                                            className={`action-btn ${wishlisted ? 'active' : ''}`}
                                            onClick={() => toggleWishlist(p)}
                                            style={{ color: wishlisted ? '#ae3f4f' : 'inherit' }}
                                        >
                                            <Heart size={18} fill={wishlisted ? '#ae3f4f' : 'none'} />
                                        </button>
                                        <button className="action-btn"><Search size={18} /></button>
                                        <button 
                                            className="action-btn"
                                            onClick={() => addToCart(p, 'S')}
                                        >
                                            <ShoppingBag size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="product-info-shop text-center" style={{ padding: '15px 0' }}>
                                    <div className="product-price-row justify-center"><span className="current-price" style={{ color: '#ae3f4f', fontWeight: 'bold' }}>{p.price}</span></div>
                                    <h3 className="product-name-shop" style={{ fontSize: '14px', marginTop: '5px' }}>{p.name}</h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const FashionFitness = () => (
    <section className="fashion-fitness" style={{ padding: '80px 0' }}>
        <div className="container">
            <div className="row align-items-center" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                <div className="col-image" style={{ flex: '1', minWidth: '300px' }}>
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=1920" alt="Fitness" style={{ width: '100%', borderRadius: '5px' }} />
                </div>
                <div className="col-text" style={{ flex: '1', minWidth: '300px', padding: '0 20px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '15px' }}>FASHION FORWARD FITNESS</h2>
                    <h4 style={{ fontSize: '18px', color: '#666', marginBottom: '20px', fontWeight: '400' }}>Timeless Pieces For Every Occasion</h4>
                    <p style={{ color: '#888', lineHeight: '1.6', marginBottom: '30px' }}>
                        Build a wardrobe that speaks volumes. Explore our collection of timeless essentials, perfect for every occasion. From casual chic to formal elegance.
                    </p>
                    <Link to="/shop" className="btn-primary" style={{ padding: '12px 30px', backgroundColor: '#ae3f4f', color: '#fff', textDecoration: 'none', fontWeight: '600', borderRadius: '3px' }}>DISCOVER NOW</Link>
                </div>
            </div>
        </div>
    </section>
);

const FeaturedPicks = () => {
    const blocks = [
        { title: 'Wardrobe Essentials', subtitle: 'Timeless Pieces for Every Occasion', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/col-3.png?v=1731657979&width=1920' },
        { title: 'Fashion Forward Fitness', subtitle: 'Activewear that Moves with You', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657969&width=1920' },
        { title: 'Seasonal Splendor', subtitle: 'Fall in Love with Autumn Fashion', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/blog-2.png?v=1731657940&width=1920' } 
    ];

    return (
        <section className="featured-picks" style={{ padding: '80px 0', backgroundColor: '#f5f5f5' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '600', marginBottom: '10px' }}>Featured Picks of the Week</h2>
                </div>
                <div className="lookbook-grid-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {blocks.map((b, i) => (
                        <div key={i} className="lookbook-block" style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px' }}>
                            <img src={b.image} alt={b.title} style={{ width: '100%', display: 'block', height: '100%', objectFit: 'cover', minHeight: '350px' }} />
                            <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '30px 20px', color: '#fff', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                                <h3 style={{ fontSize: '24px', marginBottom: '5px' }}>{b.title}</h3>
                                <p style={{ fontSize: '14px', opacity: '0.9' }}>{b.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

function Lookbook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lookbook-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="lookbook-page-content">
        <div className="breadcrumbs-wrapper" style={{ padding: '20px 0', borderBottom: '1px solid #f5f5f5' }}>
          <div className="container">
            <nav className="breadcrumbs" style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>
              <Link to="/" className="breadcrumb-item" style={{ color: '#e7a33e', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <span className="breadcrumb-separator" style={{ margin: '0 10px', color: '#ccc' }}>/</span>
              <span className="breadcrumb-item breadcrumb-current" style={{ color: '#333' }}>Lookbook</span>
            </nav>
          </div>
        </div>

        <LookbookHero />
        <ChaseSeasons />
        <ChicComfortable />
        <TimelessElegance />
        <FashionFitness />
        <FeaturedPicks />

      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}

export default Lookbook;
