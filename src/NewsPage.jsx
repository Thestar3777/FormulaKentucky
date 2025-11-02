import './NewsPage.css'
import ukLogo from './assets/University_of_Kentucky_logoblue.svg.png'

function NewsPage() {
  return (
    <div className="news-page">
      {/* Header Banner */}
      <header className="news-header">
        <div className="news-header-container">
          <h1 className="news-header-title">FORMULA KENTUCKY</h1>
          <div className="news-header-logo">
            <img src={ukLogo} alt="UK Wildcat Logo" />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="news-nav">
        <ul className="news-nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#team">The Team</a></li>
          <li><a href="#cars">The Cars</a></li>
          <li><a href="#join">Join Our Team!</a></li>
          <li><a href="#sponsorship">Sponsorship</a></li>
          <li><a href="/news" className="active">News</a></li>
        </ul>
      </nav>

      {/* Newsletter Title Section */}
      <section className="newsletter-title-section">
        <h2 className="newsletter-title">FEBRUARY 2025 NEWSLETTER</h2>
        <p className="newsletter-subtitle">University of Kentucky Formula Kentucky Team</p>
        <div className="title-divider"></div>
      </section>

      {/* Introduction */}
      <section className="newsletter-intro">
        <div className="intro-container">
          <p className="greeting">Dear Supporters and Alumni of Formula Kentucky,</p>
          <p className="intro-text">
            We are excited to share our progress as we continue building FK07, our seventh Formula SAE race car. 
            Thanks to the generous support of our sponsors and the dedication of our team members, we have made 
            significant strides across all subsystems. We are on track to compete in Lincoln, Nebraska this May, 
            and we couldn't be more grateful for your continued support of our mission.
          </p>
        </div>
      </section>

      {/* Main Content - Subsystems */}
      <div className="subsystems-container">
        
        {/* CHASSIS */}
        <section className="subsystem-section left-image">
          <div className="subsystem-card">
            <div className="subsystem-image">
              <div className="placeholder-image chassis-bg">
                <span>CHASSIS FRAME</span>
              </div>
            </div>
            <div className="subsystem-content">
              <h3 className="subsystem-heading">CHASSIS</h3>
              <p className="subsystem-text">
                The chassis subsystem has completed all frame welding and tab placement. Our team has successfully 
                constructed the primary structure that will serve as the foundation for FK07. The frame has passed 
                all internal quality checks and is ready for integration with other subsystems. Our welders have 
                demonstrated exceptional craftsmanship, ensuring structural integrity while maintaining the 
                lightweight design necessary for competitive performance.
              </p>
            </div>
          </div>
        </section>

        {/* AERODYNAMICS */}
        <section className="subsystem-section right-image">
          <div className="subsystem-card">
            <div className="subsystem-content">
              <h3 className="subsystem-heading">AERODYNAMICS</h3>
              <p className="subsystem-text">
                The aerodynamics team has completed foam molds and is in the process of resin infusion for the 
                carbon fiber body panels. We are excited to announce that FK07 will feature a DeLorean-inspired 
                livery that pays homage to classic motorsport aesthetics while maintaining a modern edge. The 
                aerodynamic package has been optimized through extensive CFD simulations to maximize downforce 
                while minimizing drag, giving us a competitive advantage on the track.
              </p>
            </div>
            <div className="subsystem-image">
              <div className="placeholder-image aero-bg">
                <span>AERODYNAMICS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ELECTRONICS */}
        <section className="subsystem-section left-image">
          <div className="subsystem-card">
            <div className="subsystem-image">
              <div className="placeholder-image electronics-bg">
                <span>ELECTRONICS</span>
              </div>
            </div>
            <div className="subsystem-content">
              <h3 className="subsystem-heading">ELECTRONICS</h3>
              <p className="subsystem-text">
                Our electronics subsystem has made significant progress on the wiring harness and telemetry system. 
                We are proud to be working with the C70 datalogger, which will provide real-time performance metrics 
                during testing and competition. Special thanks to our sponsor Bosch for their continued support in 
                providing cutting-edge components. The team has also implemented a robust sensor array that will 
                monitor critical parameters including tire temperature, brake pressure, and suspension travel.
              </p>
            </div>
          </div>
        </section>

        {/* POWERTRAIN */}
        <section className="subsystem-section right-image">
          <div className="subsystem-card">
            <div className="subsystem-content">
              <h3 className="subsystem-heading">POWERTRAIN</h3>
              <p className="subsystem-text">
                The powertrain team has completed the FK06 engine refresh and radiator installation. Final touches 
                are being made to the oil pan gasket, and we expect to have the engine fully operational for 
                testing within the next few weeks. The team has optimized the intake and exhaust systems for 
                maximum performance within the Formula SAE regulations. Dyno testing has shown promising results, 
                with power output exceeding our initial targets.
              </p>
            </div>
            <div className="subsystem-image">
              <div className="placeholder-image powertrain-bg">
                <span>POWERTRAIN</span>
              </div>
            </div>
          </div>
        </section>

        {/* SUSPENSION */}
        <section className="subsystem-section left-image">
          <div className="subsystem-card">
            <div className="subsystem-image">
              <div className="placeholder-image suspension-bg">
                <span>SUSPENSION</span>
              </div>
            </div>
            <div className="subsystem-content">
              <h3 className="subsystem-heading">SUSPENSION</h3>
              <p className="subsystem-text">
                The suspension team is currently machining spherical bearing housings and preparing for final 
                assembly. The suspension geometry has been carefully designed to provide optimal handling 
                characteristics for the varied track conditions we expect to encounter at competition. Our team 
                has utilized advanced simulation software to predict suspension behavior and make data-driven 
                design decisions. Assembly is scheduled to begin next month.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Closing Section */}
      <section className="newsletter-closing">
        <div className="closing-divider"></div>
        <p className="closing-message">
          Once again, we thank you for your continued support of the team and look forward to 
          the completion of the car and competition in May!
        </p>
        <p className="closing-signature">— The Formula Kentucky Team</p>
      </section>

      {/* Footer */}
      <footer className="news-footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={ukLogo} alt="University of Kentucky" />
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/FormulaKentucky" target="_blank" rel="noopener noreferrer">
              📷 Instagram
            </a>
            <a href="https://youtube.com/@FormulaKentucky" target="_blank" rel="noopener noreferrer">
              ▶️ YouTube
            </a>
            <a href="https://facebook.com/FormulaKentucky" target="_blank" rel="noopener noreferrer">
              📘 Facebook
            </a>
          </div>
          <div className="footer-contact">
            <a href="mailto:formulakentucky@gmail.com">✉️ formulakentucky@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default NewsPage
