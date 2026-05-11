import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Headphones, RotateCcw, Gift } from 'lucide-react';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';

function AboutUs() {
  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Use high-quality CDN assets extracted directly from the Shopify store
  const heroImage = "https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900";
  const luxeMainImage = "https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694";
  const luxeOverlayImage = "https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693";
  const elegantImage = "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/filler6.png?v=1731662117";

  return (
    <div className="about-us-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="about-us-main">
        
        {/* SECTION 1: BREADCRUMBS */}
        <div className="breadcrumbs-wrapper">
          <div className="container">
            <nav className="breadcrumbs">
              <Link to="/" className="breadcrumb-item breadcrumb-home">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-item breadcrumb-current">About Us</span>
            </nav>
          </div>
        </div>

        {/* SECTION 2: HERO BANNER SECTION */}
        <section className="about-us-hero-section">
          <div className="container">
            <div className="about-us-hero-grid">
              
              {/* Left Column: Text & CTA */}
              <div className="about-us-hero-content">
                <span className="about-us-hero-subtitle">Fall Into Fashion</span>
                <h1 className="about-us-hero-title">
                  Upgrade Your Wardrobe for the Season
                </h1>
                <Link to="/shop" className="about-us-hero-btn">
                  SHOP NOW <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right Column: High Quality Image */}
              <div className="about-us-hero-image-box">
                <img 
                  src={heroImage} 
                  alt="Upgrade Your Wardrobe for the Season" 
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: LUXE COMFORT SECTION */}
        <section className="about-us-luxe-section">
          <div className="container">
            <div className="about-us-luxe-grid">
              
              {/* Left Column: Overlapping Images & Video Trigger */}
              <div className="about-us-luxe-images">
                <div className="luxe-img-large">
                  <img src={luxeMainImage} alt="Luxe style and comfort" loading="lazy" />
                </div>
                <div className="luxe-img-small">
                  <img src={luxeOverlayImage} alt="Overlapping details" loading="lazy" />
                  <button className="video-play-trigger-btn" aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right Column: Text content */}
              <div className="about-us-luxe-content">
                <span className="about-us-hero-subtitle">LUXE COMFORT, EVERYDAY GLAM</span>
                <h2 className="about-us-section-title">Style that Speaks Comfort and Glamour</h2>
                <p className="about-us-section-description">
                  Experience the luxury of comfort without compromising on glamour. Our fashion pieces seamlessly blend style and ease, ensuring you feel confident every day.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: FEATURES & BENEFITS SECTION */}
        <section className="about-us-benefits-section">
          <div className="container">
            <div className="benefits-row">
              
              {/* Benefit 1 */}
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <Truck size={32} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Free Shipping</h4>
                  <p className="benefit-desc">From all orders over $100</p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <Headphones size={32} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Quality Support</h4>
                  <p className="benefit-desc">24/7 online feedback</p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <RotateCcw size={32} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Return & Refund</h4>
                  <p className="benefit-desc">Return money within 30 days</p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="benefit-item">
                <div className="benefit-icon-wrapper">
                  <Gift size={32} strokeWidth={1.5} />
                </div>
                <div className="benefit-text">
                  <h4 className="benefit-title">Gift Voucher</h4>
                  <p className="benefit-desc">20% off when you shop online</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: TIMELESS ELEGANCE STYLE SECTION */}
        <section className="about-us-style-section">
          <div className="container">
            <div className="about-us-style-grid">
              
              {/* Left Column: Text */}
              <div className="about-us-style-content">
                <span className="about-us-hero-subtitle">UNLEASH YOUR UNIQUE STYLE</span>
                <h2 className="about-us-section-title">Timeless Elegance, Modern Flair</h2>
                <p className="about-us-section-description">
                  Indulge in the fusion of timeless classics and modern flair. Our curated selection brings you sophistication with a contemporary twist.
                </p>
              </div>

              {/* Right Column: Image */}
              <div className="about-us-style-image">
                <img src={elegantImage} alt="Timeless Elegance" loading="lazy" />
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: TESTIMONIALS SECTION */}
        <section className="about-us-testimonials-section">
          <div className="container">
            <div className="testimonials-header text-center">
              <span className="about-us-hero-subtitle">WHAT PEOPLE SAY</span>
              <h2 className="about-us-section-title">Customer Feedback</h2>
            </div>
            
            <div className="testimonials-grid">
              
              {/* Testimonial 1 */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"I've shopped at many online fashion stores, but Gluck is truly exceptional. Their curated items always fit perfectly and make me feel elegant."</div>
                <div className="testimonial-author-row">
                  <div className="author-avatar">
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi1.jpg?v=1731662817" alt="Emily Johnson" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Emily Johnson</h4>
                    <span className="author-role">Fashion Enthusiast</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"Gluck is my go-to for the latest fashion trends. Their collection is always up-to-date, shipping is incredibly fast, and customer service is outstanding."</div>
                <div className="testimonial-author-row">
                  <div className="author-avatar">
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi2.jpg?v=1731662817" alt="David Smith" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">David Smith</h4>
                    <span className="author-role">Trendsetter</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="testimonial-card">
                <div className="testimonial-quote">"I've had the pleasure of collaborating with Gluck multiple times. Their dedication to premium quality and contemporary fashion styles is unmatched."</div>
                <div className="testimonial-author-row">
                  <div className="author-avatar">
                    <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi3.jpg?v=1731662817" alt="Sarah Anderson" />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">Sarah Anderson</h4>
                    <span className="author-role">Fashion Blogger</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: STORE LOCATION MAP */}
        <section className="about-us-map-section">
          {/* Google Maps Embed Frame */}
          <div className="map-iframe-container">
            <iframe 
              title="Shooz Store Location Copley South Australia"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111425.437941328!2d138.3540608!3d-30.5519827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6abb2c8849b29cb7%3A0x400eef17f0cd690!2sCopley%20SA%205732%2C%20Australia!5e0!3m2!1sen!2sus!4v1715012345678!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Floating Card Content */}
          <div className="container relative-map-container">
            <div className="store-info-card">
              <span className="store-card-subtitle">VISIT US</span>
              <h3 className="store-card-title">Our store</h3>
              <p className="store-card-address">
                Copley, South Australia 5732
              </p>
              <div className="store-card-hours">
                <div className="hours-row">
                  <span className="days">Mon - Fri:</span>
                  <span className="time">10:00am - 9:00pm</span>
                </div>
                <div className="hours-row">
                  <span className="days">Sat:</span>
                  <span className="time">11:00am - 9:00pm</span>
                </div>
                <div className="hours-row">
                  <span className="days">Sun:</span>
                  <span className="time">11:00am - 5:00pm</span>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=Copley+South+Australia+5732" 
                target="_blank" 
                rel="noreferrer" 
                className="store-card-btn"
              >
                GET DIRECTIONS
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 8: CONTACT SEND US AN EMAIL FORM */}
        <section className="about-us-contact-section">
          <div className="container contact-container-box">
            <div className="contact-header text-center">
              <span className="about-us-hero-subtitle">QUESTIONS?</span>
              <h2 className="about-us-section-title">Send us an email</h2>
            </div>
            
            <form className="about-us-contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input type="text" id="contact-name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input type="email" id="contact-email" placeholder="Your Email" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input type="tel" id="contact-phone" placeholder="Your Phone Number" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows="6" placeholder="Your Message" required></textarea>
              </div>

              <div className="form-action text-center">
                <button type="submit" className="about-us-hero-btn">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>

      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}

export default AboutUs;
