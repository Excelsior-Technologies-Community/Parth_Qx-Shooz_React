import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';

/* --- Breadcrumbs --- */
const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs-wrapper">
      <div className="container">
        <nav className="breadcrumbs">
          <Link to="/" className="breadcrumb-item breadcrumb-home">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item breadcrumb-current">Products</span>
        </nav>
      </div>
    </div>
  );
};

/* --- ShopHero --- */
const ShopHero = () => {
  // Using col-2.png as requested for the hero background
  const heroImage = "https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=1920";
  return (
    <section className="shop-hero">
      <div className="shop-hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="shop-hero-overlay"></div>
      <div className="container shop-hero-content">
        <h1 className="shop-hero-title">Products</h1>
      </div>
    </section>
  );
};

/* --- CollectionNav (Text List) --- */
const collectionNavItems = [
  { name: 'Athletic Footwear', count: 8, link: '/collections/athletic-footwear' },
  { name: 'Boots for Every Occasion', count: 8, link: '/collections/boots-for-every-occasion' },
  { name: 'Luxury Leather Shoes', count: 8, link: '/collections/luxury-leather-shoes' },
  { name: 'Sandals & Slides', count: 8, link: '/collections/summer-sandals-slides' },
  { name: "Sneakerhead's Haven", count: 10, link: '/collections/frontpage' }
];

const CollectionNav = () => (
  <section className="collection-nav-section">
    <div className="container">
      <div className="collection-nav-wrapper">
        {collectionNavItems.map((col, index) => (
          <Link to={col.link} key={index} className="collection-nav-item">
            <span className="collection-name">{col.name}</span>
            <span className="collection-count">({col.count})</span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* --- CollectionGrid (Image Cards) --- */
const collectionCards = [
  {
    title: 'Athletic Footwear',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=533',
    link: '/collections/athletic-footwear'
  },
  {
    title: 'Boots for Every Occasion',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=533',
    link: '/collections/boots-for-every-occasion'
  },
  {
    title: 'Luxury Leather Shoes',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=533',
    link: '/collections/luxury-leather-shoes'
  },
  {
    title: 'Sandals & Slides',
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=533',
    link: '/collections/summer-sandals-slides'
  },
  {
    title: "Sneakerhead's Haven",
    image: 'https://qx-shooz.myshopify.com/cdn/shop/collections/col-3.png?v=1731657979&width=533',
    link: '/collections/frontpage'
  }
];

const CollectionGrid = () => (
  <section className="collection-grid-section">
    <div className="container">
      <div className="collection-grid">
        {collectionCards.map((card, index) => (
          <Link to={card.link} key={index} className="collection-card">
            <div className="collection-card-image">
              <img src={card.image} alt={card.title} />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">{card.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

/* --- Sidebar Components --- */
const FilterGroup = ({ title, children, isOpenDefault = true }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  return (
    <div className={`filter-group ${isOpen ? 'is-open' : ''}`}>
      <div className="filter-group-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <ChevronDown size={16} className={`icon-caret ${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && <div className="filter-group-content">{children}</div>}
    </div>
  );
};

const FilterSidebar = () => {
  const brands = [
    { name: 'AirWalk', count: 1 }, { name: 'BoldWalks', count: 1 }, { name: 'ComfortCreek', count: 1 },
    { name: 'CozySteps', count: 1 }, { name: 'EcoStride', count: 1 }, { name: 'GlamStep', count: 1 },
    { name: 'LuxeFeet', count: 2 }, { name: 'ProSteps', count: 1 }, { name: 'RetroSole', count: 1 }
  ];

  return (
    <aside className="shop-sidebar">
      <div className="sidebar-top">
        <h2 className="sidebar-title">Filter:</h2>
        <a href="#" className="clear-all">Clear all</a>
      </div>

      <FilterGroup title="Collection">
        <ul className="sidebar-list">
          {collectionNavItems.map((col, index) => (
            <li key={index}>
              <a href={col.link}>{col.name} <span className="item-count">({col.count})</span></a>
            </li>
          ))}
        </ul>
      </FilterGroup>

      <FilterGroup title="Availability">
        <div className="checkbox-group">
          <label className="checkbox-item"><input type="checkbox" /><span className="checkbox-box"></span> In stock (15)</label>
          <label className="checkbox-item"><input type="checkbox" /><span className="checkbox-box"></span> Out of stock (10)</label>
        </div>
      </FilterGroup>

      <FilterGroup title="Price">
        <div className="price-filter-wrapper">
          <div className="price-range-slider">
            <div className="slider-track" style={{ left: '0%', width: '100%' }}></div>
            <div className="slider-handle left" style={{ left: '0%' }}></div>
            <div className="slider-handle right" style={{ left: '100%' }}></div>
          </div>
          <div className="price-inputs">
            <div className="price-input-field"><span>$</span><input type="number" placeholder="0" /></div>
            <div className="price-input-field"><span>$</span><input type="number" placeholder="25.00" /></div>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Brand">
        <div className="checkbox-group">
          {brands.map((b, i) => (
            <label className="checkbox-item" key={i}><input type="checkbox" /><span className="checkbox-box"></span> {b.name} ({b.count})</label>
          ))}
          <button className="show-more-btn">+ Show more</button>
        </div>
      </FilterGroup>

      <FilterGroup title="Category">
        <div className="checkbox-group">
          {['Boots (2)', 'Heels (1)', 'Hiking Boots (1)', 'Loafers (1)', 'Moccasins (1)'].map((cat, i) => (
            <label className="checkbox-item" key={i}><input type="checkbox" /><span className="checkbox-box"></span> {cat}</label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Color">
        <div className="color-swatches-grid">
          {[
            { name: 'Black', color: '#000000' }, { name: 'Blue', color: '#0000FF' }, { name: 'Burgundy', color: '#800020' },
            { name: 'Camel', color: '#C19A6B' }, { name: 'Chili', color: '#E32636' }, { name: 'Forest', color: '#228B22' },
            { name: 'Fuchsia', color: '#FF00FF' }, { name: 'Grey', color: '#808080' }, { name: 'Hibiscus', color: '#E53E31' },
            { name: 'Ivory', color: '#FFFFF0' }, { name: 'Mango', color: '#FF8243' }, { name: 'Mulberry', color: '#C54B8C' }
          ].map((c, i) => (
            <div className="color-swatch-item" key={i} title={c.name}><span className="swatch" style={{ backgroundColor: c.color }}></span></div>
          ))}
          <button className="show-more-btn">+ Show more</button>
        </div>
      </FilterGroup>

      <FilterGroup title="Size">
        <div className="size-boxes">
          {['S', 'M', 'L'].map((size, i) => (
            <div className="size-box" key={i}>{size}</div>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Product type">
        <div className="checkbox-group">
          {['Sneakers (3)', 'Sandals (2)', 'Running Shoes (2)', 'Work Shoes (1)', 'Pumps (1)'].map((type, i) => (
            <label className="checkbox-item" key={i}><input type="checkbox" /><span className="checkbox-box"></span> {type}</label>
          ))}
        </div>
      </FilterGroup>
    </aside>
  );
};

/* --- Product Grid --- */
const productsData = [
  { id: 1, name: 'Breathable Mesh Slip-Ons', price: '$25.00', brand: 'AirWalk', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932&width=533' },
  { id: 2, name: 'Chunky Platform Sandals', price: '$25.00', oldPrice: '$32.00', brand: 'BoldWalks', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979&width=533', badge: '-21%' },
  { id: 3, name: 'Classic Leather Sneakers', price: '$21.00', oldPrice: '$32.00', brand: 'UrbanStep', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=533' },
  { id: 4, name: 'Classic White Tennis Sneakers', price: '$25.00', brand: 'SportyFeet', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=533' },
  { id: 5, name: 'Cushioned Trail Running Shoes', price: '$15.00', brand: 'TrailGear', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.jpg?v=1731311341&width=533' },
  { id: 6, name: 'Elegant Block Heel Pumps', price: '$15.00', brand: 'LuxeFeet', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-6_dea7fe47-b8a8-460f-9795-9490b1d9144e.jpg?v=1731311466&width=533' },
  { id: 7, name: 'High-Top Canvas Sneakers', price: '$25.00', brand: 'TrendyFeet', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538&width=533' },
  { id: 8, name: 'Lightweight Running Shoes', price: '$0.00', brand: 'SprintMax', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-8_c70f2fa3-a720-4f73-a20b-0e0e01967d19.jpg?v=1731311653&width=533' },
  { id: 9, name: 'Minimalist Sandals with Ankle Strap', price: '$25.00', brand: 'SimplyShoes', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-9_c7525ff3-7b3d-4320-8026-3f91a1fbe0d7.jpg?v=1731313680&width=533' },
  { id: 10, name: 'Premium Leather Chelsea Boots', price: '$25.00', brand: 'LuxeFeet', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-11_a12147c9-4d7c-49e7-976a-690fea2264cd.jpg?v=1731314667&width=533' },
  { id: 11, name: 'Slip-Resistant Work Shoes', price: '$20.00', brand: 'ProSteps', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-10_aa707d79-f5b1-4b80-8308-7849352cb1d6.jpg?v=1731314834&width=533' },
  { id: 12, name: 'Soft Leather Moccasins', price: '$25.00', brand: 'ComfortCreek', image: 'https://qx-shooz.myshopify.com/cdn/shop/files/product-12_560514e6-9f15-4d62-aa87-e2863080cc21.jpg?v=1731314902&width=533' }
];

const ProductCard = ({ product }) => (
  <div className="product-card-shop">
    <div className="product-image-wrapper">
      {product.badge && <span className="product-badge">{product.badge}</span>}
      <img src={product.image} alt={product.name} />
      <div className="product-actions-overlay">
        <button className="action-btn"><Heart size={18} /></button>
        <button className="action-btn"><Search size={18} /></button>
        <button className="action-btn"><ShoppingBag size={18} /></button>
      </div>
    </div>
    <div className="product-info-shop">
      <div className="product-price-row">
        <span className="current-price">{product.price}</span>
        {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
      </div>
      <h3 className="product-name-shop">{product.name}</h3>
      <p className="product-brand-shop">{product.brand}</p>
      <button className="add-to-cart-btn-shop">
        <ShoppingBag size={16} /> ADD TO CART
      </button>
    </div>
  </div>
);

const ProductGridMain = () => {
  return (
    <div className="product-grid-main">
      <div className="grid-toolbar">
        <div className="view-modes">
          <button className="view-btn active">||</button>
          <button className="view-btn">|||</button>
          <button className="view-btn">||||</button>
        </div>
        <div className="toolbar-right">
          <div className="sort-by"><span>Sort By:</span><select><option>Alphabetically, A-Z</option></select></div>
          <span className="product-count">17 Products</span>
        </div>
      </div>
      <div className="products-grid-container">
        {productsData.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">{'>'}</button>
      </div>
    </div>
  );
};

const Shop = () => {
  return (
    <div className="shop-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />
      <main className="shop-page-content">
        <Breadcrumbs />
        <ShopHero />
        <CollectionNav />
        <CollectionGrid />
        <div className="shop-main-container container">
          <div className="shop-layout">
            <FilterSidebar />
            <ProductGridMain />
          </div>
        </div>
      </main>
      <Footer showNewsletter={false} />
    </div>
  );
};

export default Shop;
