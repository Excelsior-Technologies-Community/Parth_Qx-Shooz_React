import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquare, Calendar, User } from 'lucide-react';
import { AnnouncementBar, TopBar, Header, Footer } from './Home';

// Import blog image assets
import blog1 from '../assets/images/blog-1.png';
import blog2 from '../assets/images/blog-2.png';
import blog3 from '../assets/images/blog-3.png';
import blog4 from '../assets/images/blog-4.png';
import blog5 from '../assets/images/blog-5.png';
import blog6 from '../assets/images/blog-6.png';

const blogPosts = [
  {
    id: 1,
    title: "The Future Of Footwear: A Look Ahead",
    date: "10-28-2024",
    fullDate: "October 28, 2024",
    comments: "0 COMMENTS",
    author: "Qodex Web",
    excerpt: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
    image: blog2,
  },
  {
    id: 2,
    title: "Eco-Friendly Footwear: Sustainable Style",
    date: "10-28-2024",
    fullDate: "October 28, 2024",
    comments: "0 COMMENTS",
    author: "Qodex Web",
    excerpt: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
    image: blog1,
  },
  {
    id: 3,
    title: "The Ultimate Guide To Sneaker Care",
    date: "10-17-2024",
    fullDate: "October 17, 2024",
    comments: "0 COMMENTS",
    author: "Qodex Web",
    excerpt: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
    image: blog3,
  },
  {
    id: 4,
    title: "How To Style Your Favorite Sneakers",
    date: "10-17-2024",
    fullDate: "October 17, 2024",
    comments: "0 COMMENTS",
    author: "Qodex Web",
    excerpt: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
    image: blog4,
  },
  {
    id: 5,
    title: "The Evolution Of Footwear: A Brief History",
    date: "10-17-2024",
    fullDate: "October 17, 2024",
    comments: "0 COMMENTS",
    author: "Qodex Web",
    excerpt: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
    image: blog5,
  },
  {
    id: 6,
    title: "Finding The Perfect Fit: A Shoe Buying Guide",
    date: "09-26-2024",
    fullDate: "September 26, 2024",
    comments: "0 COMMENTS",
    author: "Qodex Web",
    excerpt: "Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet bibendum enim facilisis. Quam elementum pulvinar etiam non quam lacus. Non odio euismod lacinia at quis risus sed vulputate...",
    image: blog6,
  }
];

// Top 3 posts used as featured slides
const featuredSlides = blogPosts.slice(0, 3);

function Blogs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll slider every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page-wrapper">
      <AnnouncementBar />
      <TopBar />
      <Header />

      <main className="blog-main-content">
        
        {/* INTERACTIVE FEATURED POST SLIDER */}
        <section className="featured-blog-slider">
          <div className="slider-wrapper">
            
            {/* Arrows */}
            <button className="slider-arrow prev-arrow" onClick={handlePrevSlide} aria-label="Previous slide">
              <ChevronLeft size={24} />
            </button>
            <button className="slider-arrow next-arrow" onClick={handleNextSlide} aria-label="Next slide">
              <ChevronRight size={24} />
            </button>

            {/* Slide Container */}
            <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {featuredSlides.map((slide) => (
                <div key={slide.id} className="featured-slide-item">
                  <div className="featured-slide-container">
                    
                    {/* Left Column (Text) */}
                    <div className="featured-slide-info">
                      <span className="featured-badge">FEATURED POST</span>
                      <h2 className="featured-title">
                        <Link to={`/blogs/news`}>{slide.title}</Link>
                      </h2>
                      
                      <div className="featured-meta flex-center">
                        <span className="meta-item">
                          <Calendar size={14} />
                          {slide.fullDate}
                        </span>
                        <span className="meta-separator">|</span>
                        <span className="meta-item">
                          <User size={14} />
                          {slide.author}
                        </span>
                        <span className="meta-separator">|</span>
                        <span className="meta-item">
                          <MessageSquare size={14} />
                          {slide.comments}
                        </span>
                      </div>

                      <p className="featured-excerpt">{slide.excerpt}</p>
                      
                      <Link to={`/blogs/news`} className="featured-readmore-btn">
                        READ MORE <ArrowRight size={16} className="btn-arrow-icon" />
                      </Link>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="featured-slide-image">
                      <img src={slide.image} alt={slide.title} />
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="slider-dots">
              {featuredSlides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 2-COLUMN MAIN BLOG POSTS GRID */}
        <section className="blog-posts-grid-section">
          <div className="container">
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="blog-grid-card">
                  
                  {/* Card Image */}
                  <div className="card-image-wrapper">
                    <Link to={`/blogs/news`}>
                      <img src={post.image} alt={post.title} className="card-img" />
                    </Link>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <div className="card-meta">
                      <span>{post.date}</span>
                      <span className="meta-dot">•</span>
                      <span>{post.comments}</span>
                    </div>

                    <h3 className="card-title">
                      <Link to={`/blogs/news`}>{post.title}</Link>
                    </h3>

                    <p className="card-excerpt">{post.excerpt}</p>

                    <Link to={`/blogs/news`} className="card-readmore-link">
                      Read more <ArrowRight size={14} className="link-arrow-icon" />
                    </Link>
                  </div>

                </article>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer showNewsletter={false} />
    </div>
  );
}

export default Blogs;
