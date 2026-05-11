import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';
import { MapPin, Phone, CheckCircle, Mail, Plus, Minus } from 'lucide-react';
import contactHeroImage from '../assets/images/col-5.png';

function Contact() {
  const [openFaq, setOpenFaq] = useState(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="contact-main">
        {/* SECTION 1: BREADCRUMBS */}
        <div className="breadcrumbs-wrapper">
          <div className="container">
            <nav className="breadcrumbs">
              <Link to="/" className="breadcrumb-item breadcrumb-home">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-item breadcrumb-current">Contact</span>
            </nav>
          </div>
        </div>

        {/* SECTION 2: HERO BANNER SECTION */}
        <section className="contact-hero-section">
          <div className="contact-hero-grid">
            <div className="contact-hero-image-box">
              <img 
                src={contactHeroImage} 
                alt="Timeless Elegance, Modern Charm" 
                loading="lazy"
              />
            </div>
            <div className="contact-hero-content">
              <div className="contact-hero-text-wrapper">
                <span className="contact-hero-subtitle">Timeless Elegance, Modern Charm</span>
                <h1 className="contact-hero-title">
                  Indulge in Timeless Classics with a Modern Twist
                </h1>
                <p className="contact-hero-description">
                  Embrace the allure of timeless fashion with our collection of modern classics. From essential basics to statement pieces, redefine elegance with a contemporary touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2.5: CONTACT INFO BOXES */}
        <section className="contact-info-section">
          <div className="container">
            <div className="contact-info-grid">
              {/* Adress */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={24} strokeWidth={1} />
                </div>
                <div className="contact-info-text">
                  <h4 className="info-title">Adress</h4>
                  <p>Copley, South Australia 5732,<br />Australia.</p>
                </div>
              </div>
              
              {/* Call Us */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={24} strokeWidth={1} />
                </div>
                <div className="contact-info-text">
                  <h4 className="info-title">Call Us</h4>
                  <p>+ (02) 6171 3859<br />+ (07) 4088 1324</p>
                </div>
              </div>

              {/* Open */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <CheckCircle size={24} strokeWidth={1} />
                </div>
                <div className="contact-info-text">
                  <h4 className="info-title">Open</h4>
                  <p>Monday - Friday: 8am - 4pm<br />Saturday - Sunday: 9am - 5pm</p>
                </div>
              </div>

              {/* Emails */}
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={24} strokeWidth={1} />
                </div>
                <div className="contact-info-text">
                  <h4 className="info-title">Emails</h4>
                  <p>example@example.com<br />example@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CONTACT FORM */}
        <section className="contact-form-section">
          <div className="container contact-container-box">
            <div className="contact-header text-center">
              <h2 className="contact-section-title">Got Any Questions?</h2>
              <p className="contact-section-subtitle">Use the form below to get in touch with the sales team</p>
            </div>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row-2col">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input type="text" id="contact-name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email <span className="required">*</span></label>
                  <input type="email" id="contact-email" placeholder="Email" required />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input type="tel" id="contact-phone" placeholder="Phone Number" />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" rows="6" placeholder="Message"></textarea>
              </div>

              <div className="form-action text-center">
                <button type="submit" className="contact-submit-btn">
                  SEND
                </button>
              </div>
            </form>
            
            <div className="contact-recaptcha text-center">
               This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
            </div>
          </div>
        </section>

        {/* SECTION 4: STORE LOCATION MAP */}
        <section className="about-us-map-section contact-map-wrapper">
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
          
          <div className="container relative-map-container">
            <div className="store-info-card">
              <h3 className="store-card-title text-center" style={{textAlign: "center"}}>Our store</h3>
              <p className="store-card-address text-center" style={{textAlign: "center", marginBottom: "20px"}}>
                Copley,<br />South Australia 5732
              </p>
              <div className="store-card-hours text-center">
                <div className="hours-row" style={{justifyContent: "center"}}>
                  <span className="days">Mon - Fri,</span>
                  <span className="time" style={{marginLeft: "5px"}}>10am - 9pm</span>
                </div>
                <div className="hours-row" style={{justifyContent: "center"}}>
                  <span className="days">Saturday,</span>
                  <span className="time" style={{marginLeft: "5px"}}>11am - 9pm</span>
                </div>
                <div className="hours-row" style={{justifyContent: "center"}}>
                  <span className="days">Sunday,</span>
                  <span className="time" style={{marginLeft: "5px"}}>11am - 5pm</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

        {/* SECTION 5: FAQS */}
        <section className="contact-faqs-section">
          <div className="container contact-container-box">
            <div className="contact-header text-center" style={{marginBottom: "20px"}}>
              <h2 className="contact-section-title">FAQs</h2>
              <p className="contact-section-subtitle">Below are some of are common questions</p>
            </div>
            
            <div className="faq-accordion">
              {/* FAQ 1 */}
              <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                  <h4>How long will shipping take?</h4>
                  {openFaq === 1 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openFaq === 1 ? 'block' : 'none' }}>
                  <p>Shipping typically takes between 3 to 7 business days, depending on your location and the shipping method chosen at checkout.</p>
                </div>
              </div>

              {/* FAQ 2 */}
              <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                  <h4>How do I know if my order is confirmed?</h4>
                  {openFaq === 2 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openFaq === 2 ? 'block' : 'none' }}>
                  <p>Once your order is placed, you will receive an order confirmation email with your order details and a tracking number.</p>
                </div>
              </div>

              {/* FAQ 3 */}
              <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                  <h4>Can I change my shipping address after my order is placed?</h4>
                  {openFaq === 3 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openFaq === 3 ? 'block' : 'none' }}>
                  <p>If you need to change your shipping address, please contact us immediately. We can only change addresses before the order is shipped.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      <Footer showNewsletter={false} />
    </div>
  );
}

export default Contact;
