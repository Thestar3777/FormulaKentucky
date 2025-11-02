import './App.css'
import ukLogo from './assets/University_of_Kentucky_logoblue.svg.png'

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-left">
            <div className="nav-logo">
              <img src={ukLogo} alt="University of Kentucky Logo" className="uk-logo" />
              <div className="nav-text">
                <h2>UNIVERSITY OF KENTUCKY</h2>
                <p className="college-name">Stanley and Karen Pigman College of Engineering</p>
              </div>
            </div>
          </div>
          
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="https://sae.engr.uky.edu/team">THE TEAM</a></li>
              <li><a href="https://sae.engr.uky.edu/cars">THE CARS</a></li>
              <li><a href="https://sae.engr.uky.edu/join-our-team">JOIN OUR TEAM!</a></li>
              <li><a href="https://sae.engr.uky.edu/sponsorship">SPONSORSHIP</a></li>
              <li><a href="https://sae.engr.uky.edu/news-5" onClick={(e) => { e.preventDefault(); window.location.href = '/news'; }}>NEWS</a></li>
            </ul>
            
            {/* Hamburger Menu for Mobile */}
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-line1">JOIN</span>
              <span className="hero-line2">FORMULA KENTUCKY</span>
              <span className="hero-line3">RACE TEAM</span>
            </h1>
            <p className="hero-subtitle">
              Representing the University of Kentucky in Formula SAE competitions.
            </p>
            <div className="hero-buttons">
              <a href="https://sae.engr.uky.edu/join-our-team"><button className="btn-primary">LEARN MORE</button></a>
              <a href="https://sae.engr.uky.edu/sponsorship"><button className="btn-secondary">SUPPORT US</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="contact-section">
        <div className="contact-overlay"></div>
        <div className="contact-container">
          <h2 className="contact-heading">GET IN TOUCH WITH US</h2>
          <div className="contact-accent-line"></div>
          
          <div className="contact-grid">
            {/* Left Column - Contact Information */}
            <div className="contact-info">
              <h3 className="contact-subtitle">ON-CAMPUS CONTACT</h3>
              <div className="contact-details">
                <p className="contact-name">Peter Szalay</p>
                <p className="contact-title">(Current Captain)</p>
                
                <a href="mailto:peter.szalay@uky.edu" className="contact-email">
                  ✉️ peter.szalay@uky.edu
                </a>
                
                <p className="contact-phone">📞 (859) 555-0123</p>
                
                <div className="contact-address">
                  <p className="address-icon">📍</p>
                  <div className="address-text">
                    <p>351 Ralph G. Anderson Building</p>
                    <p>Lexington, KY 40506-0503</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider Line */}
            <div className="contact-divider"></div>

            {/* Right Column - Social Media */}
            <div className="social-info">
              <h3 className="contact-subtitle">SOCIAL MEDIA</h3>
              <p className="social-intro">
                Want to connect with us or learn more? Reach out or follow our journey online.
              </p>
              
              <div className="social-links">
                <a href="mailto:formulakentucky@gmail.com" className="social-link">
                  <span className="social-icon">✉️</span>
                  <span className="social-text">formulakentucky@gmail.com</span>
                </a>
                
                <a href="https://facebook.com/FormulaKentucky" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📘</span>
                  <span className="social-text">@FormulaKentucky</span>
                </a>
                
                <a href="https://instagram.com/FormulaKentucky" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">📷</span>
                  <span className="social-text">@FormulaKentucky</span>
                </a>
                
                <a href="https://youtube.com/@FormulaKentucky" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span className="social-icon">▶️</span>
                  <span className="social-text">@FormulaKentucky</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="contact-cta">
            <p className="cta-text">Interested in joining the team?</p>
            <a href="https://sae.engr.uky.edu/join-our-team"><button className="btn-cta">JOIN US</button></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
