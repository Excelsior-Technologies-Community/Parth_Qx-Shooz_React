import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Lookbook from './pages/Lookbook'
import SizeGuide from './pages/SizeGuide'
import Wishlist from './pages/Wishlist'

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/news" element={<Blogs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pages/faqs" element={<Faqs />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/pages/lookbook" element={<Lookbook />} />
          <Route path="/sizeguide" element={<SizeGuide />} />
          <Route path="/pages/sizeguide" element={<SizeGuide />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/pages/wishlist" element={<Wishlist />} />
        </Routes>
        <CartDrawer />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
