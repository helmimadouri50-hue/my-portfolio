import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes footer-logo-pulse {0%,100% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.08);
opacity: 0.85;}}@keyframes footer-gradient-shift {0%,100% {background-position: 0% 50%;}
50% {background-position: 100% 50%;}}@keyframes footer-fade-in {from {opacity: 0;
transform: translateY(1rem);}
to {opacity: 1;
transform: translateY(0);}}@keyframes footer-float {0%,100% {transform: translate(0, 0) rotate(0deg);}
33% {transform: translate(2rem, -2rem) rotate(120deg);}
66% {transform: translate(-2rem, 2rem) rotate(240deg);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.footer-logo-icon, .footer-brand-name, .footer-tagline, .footer-shape, .footer-scroll-top::before {
  animation: none;
}
.footer-nav-link, .footer-social-link, .footer-scroll-top, .footer-contact-link {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="footer-container6">
        <div className="footer-container7">
          <Script
            html={`<script defer data-name="footer">
(function(){
  const scrollTopButton = document.getElementById("footer-scroll-top")

  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <footer id="footer-main" className="footer-section">
        <div className="footer-video-container">
          <video
            autoPlay="true"
            loop="true"
            muted="true"
            playsInline="true"
            src="https://videos.pexels.com/video-files/34398855/14573046_640_360_30fps.mp4"
            className="footer-background-video"
          ></video>
          <div className="footer-overlay"></div>
        </div>
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-brand-section">
              <div className="footer-logo-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="footer-logo-icon"
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
                <h2 className="footer-brand-name">Helmi Front-End Developer</h2>
              </div>
              <p className="footer-tagline">
                {' '}
                Crafting digital experiences through code &amp; creative vision
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="footer-nav-grid">
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Navigate</h3>
                <nav aria-label="Footer navigation" className="footer-nav-list">
                  <a href="#about">
                    <div className="footer-nav-link">
                      <span>About</span>
                    </div>
                  </a>
                  <a href="#skills">
                    <div className="footer-nav-link">
                      <span>Skills</span>
                    </div>
                  </a>
                  <a href="#projects">
                    <div className="footer-nav-link">
                      <span>Projects</span>
                    </div>
                  </a>
                  <a href="#contact">
                    <div className="footer-nav-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Expertise</h3>
                <nav aria-label="Skills navigation" className="footer-nav-list">
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Front-End Development</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>React &amp; JavaScript</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>Visual Direction</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-nav-link">
                      <span>UI/UX Design</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-nav-column">
                <h3 className="footer-nav-title">Connect</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="footer-contact-icon"
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
                    <a href="mailto:hello@helmivisuals.com?subject=">
                      <div className="footer-contact-link">
                        <span>
                          {' '}
                         helmimadouri50@gmail.com
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-social-links">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                            <path d="M9 18c-4.51 2-5-2-7-2"></path>
                          </g>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2"></circle>
                          </g>
                        </svg>
                      </div>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <div
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-social-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                          </g>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p className="footer-copyright-text">
                {' '}
                &amp;copy; 2025 Helmi madouri. All rights reserved.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="footer-credit">
                Designed &amp; Developed with passion
              </p>
            </div>
            <button
              id="footer-scroll-top"
              aria-label="Scroll to top"
              className="footer-scroll-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m5 12l7-7l7 7m-7 7V5"
                ></path>
              </svg>
              <span className="footer-footer-scroll-text">Back to Top</span>
            </button>
          </div>
        </div>
        <div aria-hidden="true" className="footer-decorative-shapes">
          <div className="footer-shape footer-shape-1"></div>
          <div className="footer-shape footer-shape-2"></div>
          <div className="footer-shape footer-shape-3"></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
