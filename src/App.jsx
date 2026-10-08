import Navbar from "./components/Navbar";
import "./App.css";
import elitemartHome from "./assets/projects/elitemart-home.jpeg";
import voiceShieldHome from "./assets/projects/voiceshield-home.jpeg";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero-section">
          <p className="hero-tag">COMPUTER ENGINEERING STUDENT • DEVELOPER</p>

          <h1>
            Hi, I'm <span>Atharva.</span>
          </h1>

          <h2>
            I build apps, websites & AI-powered solutions.
          </h2>

          <p className="hero-description">
            I’m a Computer Engineering student focused on building
            modern mobile applications, websites and AI-powered
            solutions that can help people.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
            </a>

            <a href="#contact" className="secondary-button">
              Let's Work Together
            </a>
          </div>

          <div className="hero-skills">
            <span>React Native</span>
            <span>Android</span>
            <span>AI / ML</span>
            <span>Web Development</span>
          </div>
        </section>
        <section id="about" className="about-section">
  <div className="section-container">

    <p className="section-tag">ABOUT ME</p>

<h2>
  Building useful technology, one project at a time.
</h2>

<p className="about-text">
  I’m a Computer Engineering student and developer focused on
  building modern mobile applications, websites and AI-powered
  solutions. I enjoy turning ideas into practical digital products
  that can actually help people.
</p>

<div className="about-cards">

  <div className="about-card">
    <span>01</span>
    <h3>Build</h3>
    <p>
      I turn ideas into functional applications and digital
      experiences using modern development technologies.
    </p>
  </div>

  <div className="about-card">
    <span>02</span>
    <h3>Learn</h3>
    <p>
      I continuously explore new technologies, frameworks and
      AI tools to improve the way I build products.
    </p>
  </div>

  <div className="about-card">
    <span>03</span>
    <h3>Impact</h3>
    <p>
      I aim to create technology that solves real problems and
      provides practical value to people.
    </p>
  </div>

</div>

  </div>
</section>
<section id="skills" className="skills-section">
  <div className="section-container">

    <p className="section-tag">MY SKILLS</p>

    <h2>Technologies I work with.</h2>

    <p className="skills-description">
      A growing set of technologies I use to design, develop and
      build modern digital products.
    </p>

    <div className="skills-grid">

      <div className="skill-category">
        <span className="skill-number">01</span>
        <h3>Mobile Development</h3>

        <div className="skill-list">
          <span>React Native</span>
          <span>Expo</span>
          <span>Android</span>
          <span>Java</span>
        </div>
      </div>

      <div className="skill-category">
        <span className="skill-number">02</span>
        <h3>Web Development</h3>

        <div className="skill-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </div>

      <div className="skill-category">
        <span className="skill-number">03</span>
        <h3>Backend</h3>

        <div className="skill-list">
          <span>Python</span>
          <span>FastAPI</span>
          <span>REST APIs</span>
        </div>
      </div>

      <div className="skill-category">
        <span className="skill-number">04</span>
        <h3>AI / ML</h3>

        <div className="skill-list">
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Audio Processing</span>
          <span>Hugging Face</span>
        </div>
      </div>

      <div className="skill-category">
        <span className="skill-number">05</span>
        <h3>Tools</h3>

        <div className="skill-list">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Android Studio</span>
        </div>
      </div>

    </div>

  </div>
</section>
<section id="services" className="services-section">
  <div className="section-container">

    <p className="section-tag">SERVICES</p>

<h2>
  What I can build for you.
</h2>

<p className="services-description">
  I help individuals, students and small businesses turn ideas
  into practical digital products.
</p>

<div className="services-grid">

  <div className="service-card">
    <span className="service-number">01</span>

    <h3>Websites</h3>

    <p>
      Modern, responsive websites for portfolios, personal brands,
      small businesses and projects.
    </p>

    <strong>Starting from ₹799</strong>
  </div>

  <div className="service-card">
    <span className="service-number">02</span>

    <h3>Mobile Apps</h3>

    <p>
      React Native and Android applications designed around your
      idea, requirements and users.
    </p>

    <strong>Starting from ₹1,499</strong>
  </div>

  <div className="service-card">
    <span className="service-number">03</span>

    <h3>Backend & APIs</h3>

    <p>
      Simple backend services and REST APIs for connecting
      applications with data and functionality.
    </p>

    <strong>Starting from ₹999</strong>
  </div>

  <div className="service-card">
    <span className="service-number">04</span>

    <h3>UI & Project Support</h3>

    <p>
      UI improvements, bug fixing, technical guidance and
      project documentation for development projects.
    </p>

    <strong>Starting from ₹499</strong>
  </div>

</div>

      <div className="service-card">
        <span className="service-number">06</span>

        <h3>Documentation & PPT</h3>

        <p>
          Professional project documentation, presentations,
          diagrams and technical reports.
        </p>

        <strong>Starting from ₹299</strong>
      </div>

    </div>

  
</section>
<section id="projects" className="projects-section">
  <div className="section-container">

    <p className="section-tag">SELECTED WORK</p>

    <h2>Projects I've built.</h2>

    <p className="projects-description">
      A few projects where I explored mobile development, backend
      systems and AI-powered solutions.
    </p>

    <div className="projects-grid">

      {/* EliteMart */}
<article className="project-card">

  <div className="project-image">
    <img
      src={elitemartHome}
      alt="EliteMart mobile shopping application"
    />
  </div>

  <div className="project-top">
    <span className="project-number">01</span>
    <span className="project-status">MOBILE APP</span>
  </div>

  <div className="project-content">
    <h3>EliteMart</h3>

    <p>
      A modern mobile shopping application with product browsing,
      search, wishlist and cart functionality.
    </p>

    <div className="project-tech">
      <span>React Native</span>
      <span>Expo</span>
      <span>API</span>
      <span>E-Commerce</span>
    </div>
  </div>

 <div className="project-links">

  <a
    href="https://github.com/atharvapisal69-alt/EliteStore"
    target="_blank"
    rel="noreferrer"
    className="project-link"
  >
    GitHub →
  </a>

  <a
    href="#"
    className="project-link secondary"
  >
    View Project →
  </a>

</div>

      </article>


      {/* MedAlert */}
      <article className="project-card">

        <div className="project-top">
          <span className="project-number">02</span>
          <span className="project-status">HEALTH APP</span>
        </div>

        <div className="project-content">
          <h3>MedAlert</h3>

          <p>
            A medicine reminder application designed to help users
            organize medicines and receive timely reminders.
          </p>

          <div className="project-tech">
            <span>React Native</span>
            <span>Expo</span>
            <span>Notifications</span>
            <span>AsyncStorage</span>
          </div>
        </div>

      

      </article>


      {/* VoiceShield */}
       <article className="project-card">

  <div className="project-image">
    <img
      src={voiceShieldHome}
      alt="VoiceShield AI voice security application"
    />
  </div>

  <div className="project-top">
    <span className="project-number">03</span>

    <span className="project-status">
      AI / ML
    </span>
  </div>

  <div className="project-content">

    <h3>VoiceShield</h3>

    <p>
      An AI-assisted security application designed to detect
      synthetic voice patterns and identify potential
      voice-cloning impersonation risks.
    </p>

    <div className="project-tech">
      <span>AI / ML</span>
      <span>FastAPI</span>
      <span>React Native</span>
      <span>Audio Processing</span>
    </div>

  </div>

  <div className="project-links">

    <a
      href="https://github.com/atharvapisal69-alt/VoiceShield"
      target="_blank"
      rel="noreferrer"
      className="project-link"
    >
      GitHub →
    </a>

  </div>

</article>

    </div>

  </div>
</section>
<section id="experience" className="experience-section">
  <div className="section-container">

    <p className="section-tag">EXPERIENCE & ACHIEVEMENTS</p>

<h2>What I've been building.</h2>

<div className="timeline">

  <div className="timeline-item">
    <div className="timeline-dot"></div>

    <div className="timeline-content">
      <span className="timeline-date">2026</span>

      <h3>VoiceShield — AI / ML Project</h3>

      <p>
        Built an AI-assisted solution focused on detecting and
        preventing voice-cloning impersonation risks using audio
        processing, machine learning and FastAPI.
      </p>

      <div className="timeline-tags">
        <span>AI / ML</span>
        <span>Python</span>
        <span>FastAPI</span>
      </div>
    </div>
  </div>


  <div className="timeline-item">
    <div className="timeline-dot"></div>

    <div className="timeline-content">
      <span className="timeline-date">2026</span>

      <h3>Internal Hackathon — Team Project</h3>

      <p>
        Worked on VoiceShield as a team project, contributing to
        product development, technical architecture and
        presentation of the solution.
      </p>

      <div className="timeline-tags">
        <span>Hackathon</span>
        <span>Team Lead</span>
        <span>Innovation</span>
      </div>
    </div>
  </div>


  <div className="timeline-item">
    <div className="timeline-dot"></div>

    <div className="timeline-content">
      <span className="timeline-date">2025 — 2026</span>

      <h3>Mobile App Development</h3>

      <p>
        Developed projects using React Native and Expo,
        including e-commerce and utility-focused applications.
      </p>

      <div className="timeline-tags">
        <span>React Native</span>
        <span>Expo</span>
        <span>Android</span>
      </div>
    </div>
  </div>

</div>

  </div>
</section>
<section id="contact" className="contact-section">
  <div className="section-container">

    <p className="section-tag">GET IN TOUCH</p>

    <h2>Have an idea? Let's build it.</h2>

    <p className="contact-description">
      Whether you need a website, mobile app, AI feature or help
      with an existing project, feel free to reach out.
    </p>

    <div className="contact-grid">

      <div className="contact-info">

        <div className="contact-item">
          <span>EMAIL</span>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=atharvapisal6450@gmail.com"
  target="_blank"
  rel="noreferrer"
>
  atharvapisal6450@gmail.com
</a>
        </div>

   <div className="contact-item">
  <span>GITHUB</span>

  <a
    href="https://github.com/atharvapisal69-alt"
    target="_blank"
    rel="noreferrer"
  >
    github.com/atharvapisal69-alt
  </a>
</div>

        <div className="contact-item">
          <span>WHATSAPP</span>
          <a
            href="https://wa.me/917709337443"
            target="_blank"
            rel="noreferrer"
          >
            Chat with me on WhatsApp →
          </a>
        </div>

      </div>

      <div className="contact-card">

        <h3>Let's work together.</h3>

        <p>
          I'm currently open to small development projects,
          student projects, websites, mobile apps and technical
          collaborations.
        </p>

        <a
          href="https://wa.me/917709337443"
          target="_blank"
          rel="noreferrer"
          className="contact-button"
        >
          Start a Conversation →
        </a>

      </div>

    </div>

  </div>
</section>
         </main>

    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          Atharva<span>.</span>
        </div>

        <p>
          Building useful technology, one project at a time.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Atharva. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>

      </div>
    </footer>
  </>
);
}

export default App;