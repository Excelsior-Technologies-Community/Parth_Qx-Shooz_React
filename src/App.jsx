import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blogs from './pages/Blogs'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'

function App() {
  return (
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
