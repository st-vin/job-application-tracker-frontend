import './App.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Verify from './pages/auth/Verify';

function App() {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      <header className="hero">
        <nav className="nav">
          <span className="brand">Job Application Tracker</span>
          <div className="nav-actions">
            <a className="nav-link" href="#features">
              Features
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
            <Link className="btn btn-secondary" to="/login">Log In</Link>
            <Link className="btn btn-primary" to="/register">Register</Link>
          </div>
        </nav>

        <div className="hero-content">
          <div className="hero-copy">
            <span className="eyebrow">Stay organized, stay motivated</span>
            <h1>Track every job application from first touch to offer.</h1>
            <p>
              Consolidate your job search, set smart reminders, and uncover insights that help you
              land your next role faster. Everything you need to manage your pipeline in one place.
            </p>
            <div className="cta-group">
              <Link className="btn btn-primary btn-large" to="/register">Get Started</Link>
              <button className="btn btn-ghost btn-large">See how it works</button>
            </div>
            <div className="social-proof">
              <strong>2,500+</strong> job seekers already tracking with confidence.
            </div>
          </div>

          <div className="hero-visual" role="presentation" aria-hidden="true">
            <div className="dashboard-preview">
              <div className="preview-card stats">
                <span>Total Applications</span>
                <strong>42</strong>
              </div>
              <div className="preview-card reminders">
                <span>Upcoming Reminder</span>
                <p>Follow up with Google tomorrow at 2:00 PM.</p>
              </div>
              <div className="preview-card chart">
                <span>Status Snapshot</span>
                <div className="chart-bars">
                  <span className="bar applied" />
                  <span className="bar interview" />
                  <span className="bar offer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="features" id="features">
          <h2>Everything you need for a seamless job search</h2>
          <p className="section-lead">
            From application tracking to reminder scheduling, stay on top of every opportunity.
          </p>
          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">📋</div>
              <h3>Structured tracking</h3>
              <p>
                Manage applications with custom statuses, notes, and salary insights. Transition
                between list, board, and calendar views instantly.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Smart reminders</h3>
              <p>
                Never miss a follow-up with reminders that sync to each application stage and alert
                you before key deadlines.
              </p>
            </article>
            <article className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Actionable analytics</h3>
              <p>
                Visualize your progress with dashboards that highlight win rates, recent activity,
                and status distribution at a glance.
              </p>
            </article>
          </div>
        </section>

        <section className="cta-ribbon" id="about">
          <div className="cta-text">
            <h2>Ready to streamline your job search?</h2>
            <p>Stay focused on opportunities, not spreadsheets. Join for free and import your existing applications in minutes.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary btn-large">Create your account</button>
            <button className="btn btn-secondary btn-large">Book a live demo</button>
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-content">
          <span className="brand">Job Application Tracker</span>
          <div className="footer-links">
            <a href="#features">Product</a>
            <a href="#about">Pricing</a>
            <a href="#contact">Support</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
        <div id="privacy" className="footer-privacy">
          <p>
            We respect your data. Read about how we safeguard your information in our privacy
            policy.
          </p>
          <button className="btn btn-secondary">View Privacy Policy</button>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Job Application Tracker. All rights reserved.</p>
      </footer>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
