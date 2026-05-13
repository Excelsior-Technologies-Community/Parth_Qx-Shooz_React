import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';

function SizeGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sizeguide-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="sizeguide-page-content" style={{ paddingBottom: '80px' }}>
        {/* Breadcrumbs */}
        <div className="breadcrumbs-wrapper" style={{ padding: '20px 0', borderBottom: '1px solid #f5f5f5' }}>
          <div className="container">
            <nav className="breadcrumbs" style={{ fontSize: '13px', display: 'flex', alignItems: 'center' }}>
              <Link to="/" className="breadcrumb-item" style={{ color: '#e7a33e', textDecoration: 'none', fontWeight: '500' }}>Home</Link>
              <span className="breadcrumb-separator" style={{ margin: '0 10px', color: '#ccc' }}>/</span>
              <span className="breadcrumb-item breadcrumb-current" style={{ color: '#333' }}>sizeguide</span>
            </nav>
          </div>
        </div>

        {/* Size Guide Content */}
        <div className="container" style={{ maxWidth: '1200px', marginTop: '60px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#1a1a1a' }}>Size Guide</h1>
          
          <p style={{ fontSize: '15px', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
            If you need assistance when choosing your size, don't hesitate to - <Link to="/contact" style={{ color: '#888', textDecoration: 'underline' }}>contact us</Link>. 
            All sizes shown in the Size Charts are approximate. Please shop carefully and refer to our Size Chart to ensure the best fit.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ backgroundColor: '#e9ecef', color: '#333' }}>
                  <th style={{ padding: '15px 20px', border: '1px solid #dee2e6', fontWeight: '600' }}>Our size</th>
                  <th style={{ padding: '15px 20px', border: '1px solid #dee2e6', fontWeight: '600' }}>Size</th>
                  <th style={{ padding: '15px 20px', border: '1px solid #dee2e6', fontWeight: '600' }}>Bust</th>
                  <th style={{ padding: '15px 20px', border: '1px solid #dee2e6', fontWeight: '600' }}>Waist</th>
                  <th style={{ padding: '15px 20px', border: '1px solid #dee2e6', fontWeight: '600' }}>Hip</th>
                </tr>
              </thead>
              <tbody style={{ color: '#555' }}>
                <tr>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>XS</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>6</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>79 - 81</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>63 - 66</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>91 - 94</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>S</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>8</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>86 - 89</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>67 - 70</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>95 - 98</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>M</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>10</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>89 - 92</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>71 - 74</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>99 - 102</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>L</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>12</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>92 - 95</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>74 - 77</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>102 - 105</td>
                </tr>
                <tr>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>XL</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>14</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>104 - 107</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>86 - 89</td>
                  <td style={{ padding: '15px 20px', border: '1px solid #dee2e6' }}>111 - 114</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '14px', color: '#555' }}>
            * All measurements are in centimeters (cm).
          </p>

        </div>
      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}

export default SizeGuide;
