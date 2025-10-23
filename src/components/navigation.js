import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes navigation-pulse {0%,100% {opacity: 0.4;
transform: scaleY(0.8);}
50% {opacity: 0.8;
transform: scaleY(1);}}@keyframes navigation-shine {0%,90% {left: -100%;}
100% {left: 200%;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation, .navigation__logo, .navigation__link, .navigation__link-indicator, .navigation__toggle-icon, .navigation__mobile, .navigation__mobile-content, .navigation__mobile-link, .navigation__mobile-footer, .navigation__progress {
  animation: none;
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container6">
        <div className="navigation-container7">
          <Script
            html={`<script defer data-name="navigation">
(function(){
  // Navigation Toggle and Scroll Effects
  const navToggle = document.getElementById("navToggle")
  const mobileMenu = document.getElementById("mobileMenu")
  const navigation = document.getElementById("mainNavigation")
  const scrollProgress = document.getElementById("scrollProgress")
  const body = document.body

  // Mobile menu toggle
  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true"
      navToggle.setAttribute("aria-expanded", !isExpanded)
      mobileMenu.setAttribute("aria-hidden", isExpanded)
      body.style.overflow = isExpanded ? "" : "hidden"
    })

    // Close mobile menu on link click
    const mobileLinks = mobileMenu.querySelectorAll(".navigation__mobile-link")
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false")
        mobileMenu.setAttribute("aria-hidden", "true")
        body.style.overflow = ""
      })
    })

    // Close mobile menu on backdrop click
    const backdrop = mobileMenu.querySelector(".navigation__mobile-backdrop")
    if (backdrop) {
      backdrop.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false")
        mobileMenu.setAttribute("aria-hidden", "true")
        body.style.overflow = ""
      })
    }
  }

  // Scroll effects
  let lastScrollY = 0
  const handleScroll = () => {
    const currentScrollY = window.scrollY

    // Add scrolled class for backdrop effect
    if (currentScrollY > 50) {
      navigation.classList.add("navigation--scrolled")
    } else {
      navigation.classList.remove("navigation--scrolled")
    }

    // Update scroll progress bar
    if (scrollProgress) {
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (currentScrollY / windowHeight) * 100
      scrollProgress.style.width = scrolled + "%"
    }

    lastScrollY = currentScrollY
  }

  // Throttled scroll handler
  let ticking = false
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll()
        ticking = false
      })
      ticking = true
    }
  })

  // Handle keyboard navigation (Escape key closes mobile menu)
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      mobileMenu &&
      mobileMenu.getAttribute("aria-hidden") === "false"
    ) {
      navToggle.setAttribute("aria-expanded", "false")
      mobileMenu.setAttribute("aria-hidden", "true")
      body.style.overflow = ""
      navToggle.focus()
    }
  })

  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(
    '.navigation__link[href^="#"], .navigation__mobile-link[href^="#"]'
  )

  const highlightActiveLink = () => {
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        navLinks.forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === \`#\${sectionId}\`) {
            link.classList.add("active")
          }
        })
      }
    })
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        highlightActiveLink()
        ticking = false
      })
      ticking = true
    }
  })

  // Initialize on load
  handleScroll()
  highlightActiveLink()
})()
</script>`}
          ></Script>
        </div>
      </div>
      <nav id="mainNavigation" className="navigation">
        <div className="navigation__container">
          <a href="/">
            <div aria-label="Helmi Visuals - Home" className="navigation__logo">
              <span className="navigation__logo-text">
                <span className="navigation-navigationlogo-helmi">Helmi</span>
                <span className="navigation-navigationlogo-divider"></span>
                <span className="navigation-navigationlogo-visuals">
                  
                </span>
              </span>
              <span className="navigation__logo-glow"></span>
            </div>
          </a>
          <div className="navigation__links">
            <a href="#about">
              <div className="navigation__link">
                <span className="navigation__link-text">About</span>
                <span className="navigation__link-indicator"></span>
              </div>
            </a>
            <a href="#skills">
              <div className="navigation__link">
                <span className="navigation__link-text">Skills</span>
                <span className="navigation__link-indicator"></span>
              </div>
            </a>
            <a href="#projects">
              <div className="navigation__link">
                <span className="navigation__link-text">Projects</span>
                <span className="navigation__link-indicator"></span>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation__link navigation__link--cta">
                <span className="navigation__link-text">Contact</span>
                <span className="navigation__link-shine"></span>
              </div>
            </a>
          </div>
          <button
            id="navToggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
            aria-controls="mobileMenu"
            className="navigation__toggle"
          >
            <span className="navigation-navigationtoggle-icon1 navigation__toggle-icon--menu">
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
                  d="M4 5h16M4 12h16M4 19h16"
                ></path>
              </svg>
            </span>
            <span className="navigation-navigationtoggle-icon2">
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
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <div id="mobileMenu" aria-hidden="true" className="navigation__mobile">
          <div className="navigation__mobile-backdrop"></div>
          <div className="navigation__mobile-content">
            <div className="navigation__mobile-links">
              <a href="#about">
                <div className="navigation__mobile-link">
                  <span className="navigation__mobile-link-number">01</span>
                  <span className="navigation__mobile-link-text">About</span>
                </div>
              </a>
              <a href="#skills">
                <div className="navigation__mobile-link">
                  <span className="navigation__mobile-link-number">02</span>
                  <span className="navigation__mobile-link-text">Skills</span>
                </div>
              </a>
              <a href="#projects">
                <div className="navigation__mobile-link">
                  <span className="navigation__mobile-link-number">03</span>
                  <span className="navigation__mobile-link-text">Projects</span>
                </div>
              </a>
              <a href="#contact">
                <div className="navigation__mobile-link navigation__mobile-link--highlight">
                  <span className="navigation__mobile-link-number">04</span>
                  <span className="navigation__mobile-link-text">Contact</span>
                </div>
              </a>
            </div>
            <div className="navigation__mobile-footer">
              <p className="navigation__mobile-tagline">
                {' '}
                 Front-End Development
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
        <div
          id="scrollProgress"
          aria-hidden="true"
          className="navigation__progress"
        ></div>
      </nav>
    </div>
  )
}

export default Navigation
