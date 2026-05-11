import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';
import { Plus, Minus } from 'lucide-react';

function Faqs() {
  const [openOrderFaq, setOpenOrderFaq] = useState(null);
  const [openShippingFaq, setOpenShippingFaq] = useState(null);

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faqs-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="faqs-page-content" style={{ paddingBottom: '80px' }}>
        
        {/* ORDERS SECTION */}
        <section className="faq-category-section" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          <div className="container contact-container-box">
            <div className="contact-header text-center" style={{marginBottom: "40px"}}>
              <h2 className="contact-section-title" style={{fontSize: '32px', marginBottom: '10px'}}>Orders</h2>
              <p className="contact-section-subtitle" style={{color: '#888', fontSize: '14px', maxWidth: '400px', margin: '0 auto'}}>Below are some of are common questions about orders</p>
            </div>
            
            <div className="faq-accordion">
              <div className={`faq-item ${openOrderFaq === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenOrderFaq(openOrderFaq === 1 ? null : 1)}>
                  <h4>How do I make a purchase?</h4>
                  {openOrderFaq === 1 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openOrderFaq === 1 ? 'block' : 'none' }}>
                  <p>To make a purchase, simply browse our catalog, select the items you want, and proceed to checkout.</p>
                </div>
              </div>

              <div className={`faq-item ${openOrderFaq === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenOrderFaq(openOrderFaq === 2 ? null : 2)}>
                  <h4>How do I know if my order is confirmed?</h4>
                  {openOrderFaq === 2 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openOrderFaq === 2 ? 'block' : 'none' }}>
                  <p>Once your order is placed, you will receive an order confirmation email with your order details and a tracking number.</p>
                </div>
              </div>

              <div className={`faq-item ${openOrderFaq === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenOrderFaq(openOrderFaq === 3 ? null : 3)}>
                  <h4>Can I change my shipping address after my order is placed?</h4>
                  {openOrderFaq === 3 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openOrderFaq === 3 ? 'block' : 'none' }}>
                  <p>If you need to change your shipping address, please contact us immediately. We can only change addresses before the order is shipped.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SHIPPING & RETURNS SECTION */}
        <section className="faq-category-section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <div className="container contact-container-box">
            <div className="contact-header text-center" style={{marginBottom: "40px"}}>
              <h2 className="contact-section-title" style={{fontSize: '32px', marginBottom: '10px'}}>Shipping & Returns</h2>
              <p className="contact-section-subtitle" style={{color: '#888', fontSize: '14px', maxWidth: '400px', margin: '0 auto'}}>Below are some common questions about shipping, returns, and exchanges</p>
            </div>
            
            <div className="faq-accordion">
              <div className={`faq-item ${openShippingFaq === 1 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenShippingFaq(openShippingFaq === 1 ? null : 1)}>
                  <h4>Do you ship internationally?</h4>
                  {openShippingFaq === 1 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openShippingFaq === 1 ? 'block' : 'none' }}>
                  <p>Yes, we ship to most countries worldwide. Shipping costs will apply, and will be added at checkout.</p>
                </div>
              </div>

              <div className={`faq-item ${openShippingFaq === 2 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenShippingFaq(openShippingFaq === 2 ? null : 2)}>
                  <h4>When will my order be shipped?</h4>
                  {openShippingFaq === 2 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openShippingFaq === 2 ? 'block' : 'none' }}>
                  <p>Orders are typically processed and shipped within 1-2 business days after they are placed.</p>
                </div>
              </div>

              <div className={`faq-item ${openShippingFaq === 3 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenShippingFaq(openShippingFaq === 3 ? null : 3)}>
                  <h4>What is your return policy?</h4>
                  {openShippingFaq === 3 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openShippingFaq === 3 ? 'block' : 'none' }}>
                  <p>We offer a 30-day return policy for unused items in their original packaging. Please contact our support team to initiate a return.</p>
                </div>
              </div>

              <div className={`faq-item ${openShippingFaq === 4 ? 'active' : ''}`}>
                <div className="faq-question" onClick={() => setOpenShippingFaq(openShippingFaq === 4 ? null : 4)}>
                  <h4>How long will it take until I receive my order?</h4>
                  {openShippingFaq === 4 ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                </div>
                <div className="faq-answer" style={{ display: openShippingFaq === 4 ? 'block' : 'none' }}>
                  <p>Domestic orders typically arrive within 3-7 business days. International delivery can take anywhere from 7-16 days.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CALL TO ACTION SECTION */}
        <section className="faq-cta-section" style={{ paddingTop: '60px', paddingBottom: '60px', textAlign: 'center' }}>
          <div className="container">
            <h6 style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '1px', color: '#0055ba', marginBottom: '15px', textTransform: 'uppercase' }}>ADVAND SUB</h6>
            <h2 style={{ fontSize: '36px', fontWeight: '600', marginBottom: '15px', color: '#000' }}>Have a project in mind? Let's talk.</h2>
            <h3 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '10px', color: '#000' }}>Didn't find your answer?</h3>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '30px' }}>Don't hesitate to contact us</p>
            <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', backgroundColor: '#ae3f4f', color: '#fff', padding: '12px 30px', textDecoration: 'none', fontWeight: '600', borderRadius: '3px', fontSize: '14px' }}>CONTACT US</Link>
          </div>
        </section>

      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}

export default Faqs;
