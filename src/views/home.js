import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Nonstop Klutzy Rat</title>
        <meta property="og:title" content="Nonstop Klutzy Rat" />
      </Helmet>
      <Navigation></Navigation>
      <div className="home-container11">
        <div className="home-container12">
          <Script
            html={`<style>
        @keyframes heroReveal {0% {opacity: 0;
transform: translateY(32px) scale(0.96);}
100% {opacity: 1;
transform: translateY(0) scale(1);}}@keyframes titleMorphIn {0% {opacity: 0;
clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);}
100% {opacity: 1;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);}}@keyframes cardSlideIn {0% {opacity: 0;
transform: skewY(-3deg) translateY(48px);}
100% {opacity: 1;
transform: skewY(-3deg) translateY(0);}}@keyframes mediaFloat {0% {opacity: 0;
transform: translateY(calc(var(--delay) * 48px)) scale(0.95);}
100% {opacity: 1;
transform: translateY(calc(var(--delay) * 24px)) scale(1);}}@keyframes chipReveal {0% {opacity: 0;
transform: translateY(24px) scale(0.95);}
100% {opacity: 1;
transform: translateY(0) scale(1);}}@keyframes projectReveal {0% {opacity: 0;
transform: translateY(32px) scale(0.98);}
100% {opacity: 1;
transform: translateY(0) scale(1);}}@keyframes cardFadeIn {0% {opacity: 0;
transform: translateY(24px);}
100% {opacity: 1;
transform: translateY(calc(var(--spacing-lg) * -1));}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container13">
        <div className="home-container14">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero__content, .hero-title {
  animation: none;
  opacity: 1;
  transform: none;
}
.hero__nav-link:hover {
  transform: none;
}
}
@media (prefers-reduced-motion: reduce) {
.about-section__hero, .about-section__media-card {
  animation: none;
  transform: skewY(-3deg);
}
.about-section__media-card {
  transform: translateY(calc(var(--delay) * 24px));
}
}
@media (prefers-reduced-motion: reduce) {
.skills-section__chip {
  animation: none;
}
.skills-section__chip:hover {
  transform: none;
}
}
@media (prefers-reduced-motion: reduce) {
.projects-gallery__card {
  animation: none;
}
.projects-gallery__card:hover {
  transform: none;
}
}
@media (prefers-reduced-motion: reduce) {
.contact-section__copy, .contact-section__form {
  animation: none;
  transform: none;
}
.contact-section__input:focus, .contact-section__textarea:focus {
  transform: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="home-container15">
        <div className="home-container16">
          <Script
            html={`<script defer data-name="homepage-interactions">
(function(){
  // Hero parallax effect
  const heroSection = document.getElementById("hero")
  const heroBg = heroSection?.querySelector(".hero__bg")

  if (
    heroBg &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  ) {
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      const heroHeight = heroSection.offsetHeight

      if (scrolled < heroHeight) {
        const offset = scrolled * 0.5
        heroBg.style.transform = \`translateY(\${offset}px) scale(1.1)\`
      }

      ticking = false
    }

    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax)
        ticking = true
      }
    })
  }

  // Skills chip hover interactions
  const skillsChips = document.querySelectorAll(".skills-section__chip")

  skillsChips.forEach((chip) => {
    chip.addEventListener("mouseenter", () => {
      if (
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches
      ) {
        chip.style.willChange = "transform"
      }
    })

    chip.addEventListener("mouseleave", () => {
      chip.style.willChange = "auto"
    })
  })

  // Form validation and animation
  const contactForm = document.querySelector(".contact-section__form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const button = contactForm.querySelector('button[type="submit"]')
      const originalText = button.innerHTML

      button.innerHTML = "<span>Sending...</span>"
      button.disabled = true

      // Simulate form submission
      setTimeout(() => {
        button.innerHTML = "<span>Message Sent!</span>"

        setTimeout(() => {
          button.innerHTML = originalText
          button.disabled = false
          contactForm.reset()
        }, 2000)
      }, 1500)
    })

    // Input focus animations
    const inputs = contactForm.querySelectorAll(
      ".contact-section__input, .contact-section__textarea"
    )

    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.parentElement.style.transform = "translateX(2px)"
      })

      input.addEventListener("blur", () => {
        input.parentElement.style.transform = "translateX(0)"
      })
    })
  }

  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -10% 0px",
  }

  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }

  const observer = new IntersectionObserver(animateOnScroll, observerOptions)

  // Observe sections for scroll animations
  const sections = document.querySelectorAll(
    ".about-section, .skills-section, .projects-gallery, .contact-section"
  )
  sections.forEach((section) => {
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      observer.observe(section)
    }
  })

  // Project card hover parallax
  const projectCards = document.querySelectorAll(".projects-gallery__card")

  projectCards.forEach((card) => {
    const figure = card.querySelector(".projects-gallery__figure")

    if (
      figure &&
      window.matchMedia("(prefers-reduced-motion: no-preference)").matches
    ) {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = (y - centerY) / 30
        const rotateY = (centerX - x) / 30

        card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) translateY(-8px) scale(1.01)\`
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = ""
      })
    }
  })

  // About media cards stagger animation refinement
  const mediaCards = document.querySelectorAll(".about-section__media-card")

  mediaCards.forEach((card, index) => {
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      card.style.animationDelay = \`\${index * 0.1}s\`
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <section id="hero" aria-labelledby="hero-title" className="hero">
        <video
          autoPlay="true"
          loop="true"
          muted="true"
          playsInline="true"
          aria-hidden="true"
          src="https://videos.pexels.com/video-files/34398855/14573046_640_360_30fps.mp4"
          className="hero__bg"
        ></video>
        <div aria-hidden="true" className="hero__scrim"></div>
        <div className="hero__content">
          <div className="hero__label">
            <span>Front‑End Developer </span>
          </div>
          <h1 id="hero-title" className="hero-title">
            Helmi Madouri
          </h1>
          <p className="hero-subtitle">
            {' '}
            I craft cinematic, code‑driven experiences that blend refined UI
            with moody, cityscape storytelling. HTML, CSS, JavaScript, React,
            Bootstrap, Figma — designed and built with intentional light,
            rhythm, and motion.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
          <div className="hero__cta-group">
            <a href="#projects">
              <div className="btn btn-primary">
                <span>View Selected Work</span>
              </div>
            </a>
            <a href="#contact">
              <div className="btn btn-outline">
                <span>Start Collaboration</span>
              </div>
            </a>
          </div>
          <p className="hero__note">
            {' '}
            Ready to collaborate on projects that demand technical excellence
            and cinematic sensibility.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <nav aria-label="Quick navigation" className="hero__nav">
          <a href="#about">
            <div aria-label="Jump to About" className="hero__nav-link">
              <span>About</span>
            </div>
          </a>
          <a href="#skills">
            <div aria-label="Jump to Skills" className="hero__nav-link">
              <span>Skills</span>
            </div>
          </a>
          <a href="#projects">
            <div aria-label="Jump to Projects" className="hero__nav-link">
              <span>Projects</span>
            </div>
          </a>
          <a href="#contact">
            <div aria-label="Jump to Contact" className="hero__nav-link">
              <span>Contact</span>
            </div>
          </a>
        </nav>
      </section>
      <section
        id="about"
        aria-labelledby="about-title"
        className="about-section"
      >
        <div className="about-section__layout">
          <article className="about-section__hero">
            <div className="about-section__hero-inner">
              <h2 id="about-title" className="section-title">
                Craft meets Cinema
              </h2>
              <p className="about-section__role">
                Front‑End Developer &amp; editing  videos
              </p>
              <div className="about-section__bio">
                <p>
                  {' '}
                  I&apos;m Helmi Madouri — a front‑end developer crafting interfaces that feel alive. I blend pixel-perfect HTML and CSS with expressive JavaScript, Bootstrap, and React to build responsive, emotionally resonant experiences. I also have experience in editing short cinematic videos, bringing ideas to life through rhythm, motion, and atmosphere.


                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p>
                  {' '}
                  
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <p>
                  {' '}
                  
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <a href="#contact">
                <div className="btn btn-accent">
                  <span>Let&apos;s Collaborate</span>
                </div>
              </a>
            </div>
          </article>
          <div className="about-section__media">
            <div className="home-about-sectionmedia-card1 about-section__media-card">
              <img
                src="https://images.pexels.com/photos/8100052/pexels-photo-8100052.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Moody studio workspace with focused creative energy"
                loading="lazy"
              />
              <div className="about-section__media-overlay">
                <span className="about-section__media-label">Studio</span>
              </div>
            </div>
            <div className="home-about-sectionmedia-card2 about-section__media-card">
              <img
                src="https://images.pexels.com/photos/7130237/pexels-photo-7130237.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Creative collaboration in action"
                loading="lazy"
              />
              <div className="about-section__media-overlay">
                <span className="about-section__media-label">Process</span>
              </div>
            </div>
            <div className="home-about-sectionmedia-card3 about-section__media-card">
              <img
                src="https://images.pexels.com/photos/4125602/pexels-photo-4125602.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Cinematic lighting and dramatic atmosphere"
                loading="lazy"
              />
              <div className="about-section__media-overlay">
                <span className="about-section__media-label">Vision</span>
              </div>
            </div>
            <div className="home-about-sectionmedia-card4 about-section__media-card">
              <img
                src="https://images.pexels.com/photos/16656277/pexels-photo-16656277.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                alt="Focused creative direction with dramatic lighting"
                loading="lazy"
              />
              <div className="about-section__media-overlay">
                <span className="about-section__media-label">Direction</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        aria-labelledby="skills-title"
        className="skills-section"
      >
        <div className="skills-section__container">
          <header className="skills-section__header">
            <h2 id="skills-title" className="section-title">
              Skills &amp; Tools
            </h2>
            <p className="section-subtitle">
              {' '}
              Crafted for cinematic interfaces and tactile interactions.
              Interactive chips below reveal expertise—hover for motion, explore
              the depth.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="skills-section__grid">
            <div
              data-skill="html-css"
              className="home-skills-sectionchip1 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                  ></path>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">HTML &amp; CSS</h3>
                <p className="skills-section__chip-desc">
                  {' '}
                  Pixel-precise markup, expressive layouts
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              data-skill="javascript"
              className="home-skills-sectionchip2 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                  ></path>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">JavaScript</h3>
                <p className="skills-section__chip-desc">
                  {' '}
                  Performant vanilla JS utilities
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              data-skill="react"
              className="home-skills-sectionchip3 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M6.306 8.711C3.704 9.434 2 10.637 2 12c0 2.21 4.477 4 10 4c.773 0 1.526-.035 2.248-.102m3.444-.609C20.295 14.567 22 13.363 22 12c0-2.21-4.477-4-10-4c-.773 0-1.526.035-2.25.102"></path>
                    <path d="M6.305 15.287C5.629 17.902 5.82 19.98 7 20.66c1.913 1.105 5.703-1.877 8.464-6.66q.581-1.007 1.036-2m1.194-3.284C18.371 6.1 18.181 4.02 17 3.34C15.087 2.235 11.297 5.217 8.536 10c-.387.67-.733 1.34-1.037 2"></path>
                    <path d="M12 5.424C10.075 3.532 8.18 2.658 7 3.34C5.087 4.444 5.774 9.217 8.536 14c.386.67.793 1.304 1.212 1.896M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913-1.104 1.226-5.877-1.536-10.66q-.563-.976-1.212-1.897M11.5 12.866a1 1 0 1 0 1-1.732a1 1 0 0 0-1 1.732"></path>
                  </g>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">React</h3>
                <p className="skills-section__chip-desc">
                  Component-driven architecture
                </p>
              </div>
            </div>
            <div
              data-skill="bootstrap"
              className="home-skills-sectionchip4 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M8 2v4m8-4v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </g>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">Bootstrap</h3>
                <p className="skills-section__chip-desc">
                  Responsive systems at scale
                </p>
              </div>
            </div>
            <div
              data-skill="figma"
              className="home-skills-sectionchip5 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path>
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path>
                  </g>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">Figma</h3>
                <p className="skills-section__chip-desc">
                  {' '}
                  Interactive prototypes &amp; design systems
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              data-skill="css-advanced"
              className="home-skills-sectionchip6 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path>
                    <circle
                      cx="13.5"
                      cy="6.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="17.5"
                      cy="10.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="6.5"
                      cy="12.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                    <circle
                      cx="8.5"
                      cy="7.5"
                      r=".5"
                      fill="currentColor"
                    ></circle>
                  </g>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">Advanced CSS</h3>
                <p className="skills-section__chip-desc">
                  {' '}
                  Cinematic gradients &amp; parallax
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              data-skill="performance"
              className="home-skills-sectionchip7 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                  ></path>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">Performance</h3>
                <p className="skills-section__chip-desc">
                  {' '}
                  Film-like frame rates across devices
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div
              data-skill="accessibility"
              className="home-skills-sectionchip8 skills-section__chip"
            >
              <div className="skills-section__chip-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                </svg>
              </div>
              <div className="skills-section__chip-content">
                <h3 className="skills-section__chip-title">Accessibility</h3>
                <p className="skills-section__chip-desc">
                  {' '}
                  Inclusive, keyboard-first interactions
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="skills-section__footer">
            <p className="section-content">
              {' '}
              Each tool is chosen to serve storytelling: typography as voice,
              motion as pace, and code as the invisible cinematographer.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <a href="#contact">
              <div className="btn btn-secondary">
                <span>Request Walkthrough</span>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
        id="projects"
        aria-labelledby="projects-title"
        className="projects-gallery"
      >
        <div className="projects-gallery__container">
          <header className="projects-gallery__header">
            <h2 id="projects-title" className="section-title">
              Projects Gallery
            </h2>
            <p className="section-subtitle">
              {' '}
              Selected works where front-end craft meets cinematic direction.
              Each snapshot is a compact case study—challenge, creative
              approach, and outcomes.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </header>
          <div className="projects-gallery__grid">
            <article className="projects-gallery__card projects-gallery__card--hero">
              <figure className="projects-gallery__figure">
                <img
                  src="https://images.pexels.com/photos/2693284/pexels-photo-2693284.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Nocturne Interface - Dramatic cityscape with lightning"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="projects-gallery__scrim"
                ></div>
              </figure>
              <div className="projects-gallery__content">
                <div className="projects-gallery__badges">
                  <span className="projects-gallery__badge projects-gallery__badge--role">
                    {' '}
                    React
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="projects-gallery__badge projects-gallery__badge--role">
                    {' '}
                    CSS Grid
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="projects-gallery__badge projects-gallery__badge--status">
                    {' '}
                    Featured
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <h3 className="projects-gallery__title">Nocturne Interface</h3>
                <p className="projects-gallery__synopsis">
                  {' '}
                  Interactive editorial experience transforming long-form
                  journalism into a moody, tactile reading experience. Cinematic
                  parallax and micro-interactions reveal typographic layers.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="projects-gallery__meta">
                  <span className="projects-gallery__meta-item">
                    {' '}
                    35% increase in engagement time
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="projects-gallery__meta-item">
                    {' '}
                    Featured in design roundups
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <a href="#contact">
                  <div className="btn btn-primary">
                    <span>View Case Study</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="projects-gallery__card projects-gallery__card--small">
              <figure className="projects-gallery__figure">
                <img
                  src="https://images.pexels.com/photos/1737955/pexels-photo-1737955.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Metroframe Studio - Urban photography showcase"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="projects-gallery__scrim"
                ></div>
              </figure>
              <div className="projects-gallery__content">
                <div className="projects-gallery__badges">
                  <span className="projects-gallery__badge">Bootstrap</span>
                  <span className="projects-gallery__badge">GSAP</span>
                </div>
                <h3 className="projects-gallery__title">Metroframe Studio</h3>
                <p className="projects-gallery__synopsis">
                  {' '}
                  Portfolio microsite for a photographer showcasing large-format
                  images with progressive loading and ambient motion.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#contact">
                  <div className="btn btn-accent btn-sm">
                    <span>Explore</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="projects-gallery__card projects-gallery__card--small">
              <figure className="projects-gallery__figure">
                <img
                  src="https://images.pexels.com/photos/1633794/pexels-photo-1633794.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Pulse City - Data visualization with urban aesthetic"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="projects-gallery__scrim"
                ></div>
              </figure>
              <div className="projects-gallery__content">
                <div className="projects-gallery__badges">
                  <span className="projects-gallery__badge">React</span>
                  <span className="projects-gallery__badge">D3</span>
                </div>
                <h3 className="projects-gallery__title">Pulse City</h3>
                <p className="projects-gallery__synopsis">
                  {' '}
                  Data-driven storytelling dashboard making dense civic data
                  legible and emotionally resonant for public audiences.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#contact">
                  <div className="btn btn-accent btn-sm">
                    <span>Explore</span>
                  </div>
                </a>
              </div>
            </article>
            <article className="projects-gallery__card projects-gallery__card--small">
              <figure className="projects-gallery__figure">
                <img
                  src="https://images.pexels.com/photos/569804/pexels-photo-569804.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
                  alt="Lumen Brand Kit - Architectural precision"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="projects-gallery__scrim"
                ></div>
              </figure>
              <div className="projects-gallery__content">
                <div className="projects-gallery__badges">
                  <span className="projects-gallery__badge">Figma</span>
                  <span className="projects-gallery__badge">CSS Vars</span>
                </div>
                <h3 className="projects-gallery__title">Lumen Brand Kit</h3>
                <p className="projects-gallery__synopsis">
                  {' '}
                  Visual identity and interactive guidelines with modular
                  components and mood-driven design tokens.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <a href="#contact">
                  <div className="btn btn-accent btn-sm">
                    <span>Explore</span>
                  </div>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="contact-section"
      >
        <div aria-hidden="true" className="contact-section__backdrop">
          <img
            src="https://images.pexels.com/photos/30120891/pexels-photo-30120891.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=650&amp;w=940"
            alt="true"
            loading="lazy"
          />
        </div>
        <div aria-hidden="true" className="contact-section__scrim"></div>
        <div className="contact-section__container">
          <article className="contact-section__copy">
            <h2 id="contact-title" className="section-title">
              Let&apos;s create together
            </h2>
            <p className="section-subtitle">
              {' '}
              I&apos;m available for creative direction, front‑end builds, and
              visual collaborations. Tell me about your project, timeline, and
              the feeling you want to evoke.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <div className="contact-section__info">
              <div className="contact-section__info-item">
                <div className="contact-section__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="contact-section__info-title">
                    Email Response
                  </h3>
                  <p className="contact-section__info-text">
                    {' '}
                    I&apos;ll respond within 48 hours
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className="contact-section__info-item">
                <div className="contact-section__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M8 2v4m8-4v4"></path>
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="contact-section__info-title">Availability</h3>
                  <p className="contact-section__info-text">
                    Mon–Fri, 10:00–18:00 (CET)
                  </p>
                </div>
              </div>
              <div className="contact-section__info-item">
                <div className="contact-section__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="contact-section__info-title">
                    Confidentiality
                  </h3>
                  <p className="contact-section__info-text">
                    {' '}
                    All discussions treated with professional care
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-section__cta-group">
              <a href="tel:+21646331717">
                <div className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Schedule a Call
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </article>
          <form
            role="form"
            aria-labelledby="contact-title"
            className="contact-section__form"
          >
            <div className="contact-section__form-group">
              <label htmlFor="contact-name" className="contact-section__label">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="true"
                required="true"
                aria-required="true"
                className="contact-section__input"
              />
            </div>
            <div className="contact-section__form-group">
              <label
                htmlFor="contact-company"
                className="contact-section__label"
              >
                {' '}
                Role / Company
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <input
                type="text"
                id="contact-company"
                name="company"
                className="contact-section__input"
              />
            </div>
            <div className="contact-section__form-group">
              <label
                htmlFor="contact-project"
                className="contact-section__label"
              >
                {' '}
                Project Brief
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <input
                type="text"
                id="contact-project"
                name="project"
                placeholder="One line description"
                className="contact-section__input"
              />
            </div>
            <div className="contact-section__form-row">
              <div className="contact-section__form-group">
                <label
                  htmlFor="contact-budget"
                  className="contact-section__label"
                >
                  {' '}
                  Budget Range
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
                <input
                  type="text"
                  id="contact-budget"
                  name="budget"
                  className="contact-section__input"
                />
              </div>
              <div className="contact-section__form-group">
                <label
                  htmlFor="contact-start"
                  className="contact-section__label"
                >
                  {' '}
                  Preferred Start Date
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </label>
                <input
                  type="date"
                  id="contact-start"
                  name="start-date"
                  className="contact-section__input"
                />
              </div>
            </div>
            <div className="contact-section__form-group">
              <label htmlFor="contact-email" className="contact-section__label">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required="true"
                aria-required="true"
                className="contact-section__input"
              />
            </div>
            <div className="contact-section__form-group">
              <label htmlFor="contact-phone" className="contact-section__label">
                {' '}
                Phone (optional)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                className="contact-section__input"
              />
            </div>
            <div className="contact-section__form-group">
              <label
                htmlFor="contact-message"
                className="contact-section__label"
              >
                {' '}
                Message
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell me about the feeling you want to evoke..."
                className="contact-section__textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939"
                ></path>
              </svg>
              <span>
                {' '}
                Send Message
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </button>
            <p className="contact-section__form-note">
              {' '}
              After your message I&apos;ll share a concise brief, proposed
              scope, and a moodboard concept to align creative direction.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </form>
        </div>
      </section>
      <Footer></Footer>
      
    </div>
  )
}

export default Home
