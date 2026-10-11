import {
  ArrowUpRight,
  Download,
  Menu,
  X,
  MapPin,
  GitBranch,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { useEffect, useState } from "react";
import portfolioData from "./portfolioData";


function SocialIcon({ name }) {
  const label = name.toLowerCase();

  if (label.includes("instagram")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="social-icon"
        aria-hidden="true"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />

        <circle
          cx="17.5"
          cy="6.8"
          r="1"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label.includes("facebook")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="social-icon"
        aria-hidden="true"
      >
        <path
          d="M13.5 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.3-1.4 1.5-1.4h1.6V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H8.2V13h2.5v7h2.8Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label.includes("linkedin")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="social-icon"
        aria-hidden="true"
      >
        <path
          d="M5.2 8.1A1.7 1.7 0 1 0 5.2 4.7a1.7 1.7 0 0 0 0 3.4ZM3.8 19.5h2.8v-9H3.8v9Zm4.6 0h2.8v-5c0-1.3.2-2.6 1.9-2.6 1.7 0 1.7 1.5 1.7 2.7v4.9h2.8v-5.5c0-2.7-.6-4.8-3.9-4.8-1.6 0-2.7.9-3.1 1.7h-.1v-1.4H8.4v10Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label.includes("whatsapp")) {
    return (
      <svg
        viewBox="0 0 24 24"
        className="social-icon"
        aria-hidden="true"
      >
        <path
          d="M20.1 11.7a8.1 8.1 0 0 1-12 7.1L3.5 20l1.3-4.5a8.1 8.1 0 1 1 15.3-3.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
        />

        <path
          d="M8.3 8.2c.2-.3.4-.3.7-.3h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c.6 1.2 1.5 2.1 2.7 2.7l.7-.6c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.3.7-.3.3-.8.5-1.2.5-1.1 0-2.8-.8-4.2-2.1-1.4-1.4-2.1-3.1-2.1-4.2 0-.4.2-.9.5-1.2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label.includes("github")) {
    return (
      <GitBranch
        className="social-icon"
        aria-hidden="true"
      />
    );
  }

  if (label === "x" || label.includes("twitter")) {
    return (
      <span
        className="x-icon"
        aria-hidden="true"
      >
        𝕏
      </span>
    );
  }

  return (
    <BriefcaseBusiness
      className="social-icon"
      aria-hidden="true"
    />
  );
}


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] =
    useState(null);
  const [activeMedia, setActiveMedia] = useState(0);
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const {
    personal,
    theme,
    socialLinks,
    experience,
    skills,
    certificates,
    projects,
    settings,
    siteCraft,
  } = portfolioData;


  const navItems = [
    settings.showAbout && {
      label: "About",
      id: "about",
    },

    settings.showExperience && {
      label: "Experience",
      id: "experience",
    },

    settings.showSkills && {
      label: "Expertise",
      id: "expertise",
    },

    settings.showCertificates && {
      label: "Credentials",
      id: "credentials",
    },

    settings.showProjects && {
      label: "Projects",
      id: "projects",
    },

    settings.showContact && {
      label: "Contact",
      id: "contact",
    },
  ].filter(Boolean);


  const socials = [
    settings.showLinkedin &&
      socialLinks.linkedin !== "#" && {
        name: "LinkedIn",
        url: socialLinks.linkedin,
      },

    settings.showFacebook &&
      socialLinks.facebook !== "#" && {
        name: "Facebook",
        url: socialLinks.facebook,
      },

    settings.showInstagram &&
      socialLinks.instagram !== "#" && {
        name: "Instagram",
        url: socialLinks.instagram,
      },

    settings.showGithub &&
      socialLinks.github !== "#" && {
        name: "GitHub",
        url: socialLinks.github,
      },

    settings.showX &&
      socialLinks.x !== "#" && {
        name: "X",
        url: socialLinks.x,
      },

    settings.showWhatsapp &&
      socialLinks.whatsapp !== "#" && {
        name: "WhatsApp",
        url: socialLinks.whatsapp,
      },
  ].filter(Boolean);


  const projectMedia =
    selectedProject?.media?.filter(
      (item) => item.src
    ) || [];

  const currentMedia =
    projectMedia[activeMedia] || null;


  const openProject = (project) => {
    setSelectedProject(project);
    setActiveMedia(0);
  };


  const closeProject = () => {
    setSelectedProject(null);
    setActiveMedia(0);
  };


  const closeCertificate = () => {
    setSelectedCertificate(null);
  };


  const showPreviousMedia = () => {
    if (projectMedia.length < 2) return;

    setActiveMedia((current) =>
      current === 0
        ? projectMedia.length - 1
        : current - 1
    );
  };


  const showNextMedia = () => {
    if (projectMedia.length < 2) return;

    setActiveMedia((current) =>
      current === projectMedia.length - 1
        ? 0
        : current + 1
    );
  };


  useEffect(() => {
    const modalOpen =
      Boolean(selectedProject) ||
      Boolean(selectedCertificate);

    document.body.style.overflow = modalOpen
      ? "hidden"
      : "";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedCertificate) {
          closeCertificate();
          return;
        }

        if (selectedProject) {
          closeProject();
          return;
        }
      }

      if (
        selectedProject &&
        !selectedCertificate
      ) {
        if (event.key === "ArrowLeft") {
          showPreviousMedia();
        }

        if (event.key === "ArrowRight") {
          showNextMedia();
        }
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.body.style.overflow = "";

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [
    selectedProject,
    selectedCertificate,
    projectMedia.length,
  ]);


  return (
    <div
      className="site"
      style={{
        "--background": theme.background,
        "--text": theme.text,
        "--muted": theme.muted,
        "--accent": theme.accent,
        "--dark-section": theme.darkSection,
        "--line": theme.line,
        "--card": theme.card,
        "--black": theme.text,
        "--cream": theme.background,
      }}
    >

      {/* =========================
          NAVIGATION
      ========================= */}

      <header className="navbar">
        <a
          href="#home"
          className="brand"
        >
          {personal.firstName}
        </a>

        <nav className="desktop-nav">
          <a href="#home">
            Home
          </a>

          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {settings.showContact && (
          <a
            href="#contact"
            className="nav-button"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>
        )}

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>


      {/* =========================
          MOBILE NAVIGATION
      ========================= */}

      {menuOpen && (
        <div className="mobile-nav">
          <a
            href="#home"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </a>

          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      )}


      <main>

        {/* =========================
            HERO
        ========================= */}

        <section
          className="hero"
          id="home"
        >
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>

              {personal.availability}
            </div>

            <h1>
              {personal.headline.lineOne}{" "}
              <span>
                {personal.headline.emphasis}
              </span>

              <br />

              {personal.headline.lineTwo}
            </h1>

            <p className="hero-description">
              {personal.introduction}
            </p>

            <div className="hero-actions">
              {settings.showProjects && (
                <a
                  href="#projects"
                  className="primary-button"
                >
                  View My Work
                  <ArrowUpRight size={18} />
                </a>
              )}

              {settings.showContact && (
                <a
                  href="#contact"
                  className="secondary-button"
                >
                  Get In Touch
                </a>
              )}
            </div>

            <div className="hero-meta">
              <div>
                <MapPin size={16} />

                <span>
                  {personal.location}
                </span>
              </div>

              <div>
                <span className="meta-line"></span>

                {personal.title}
              </div>
            </div>
          </div>


          <div className="hero-visual">
            <div className="image-frame">
              {personal.photo ? (
                <img
                  src={personal.photo}
                  alt={personal.name}
                  className="profile-photo"
                />
              ) : (
                <div className="image-placeholder">
                  <span>
                    {personal.firstName.charAt(
                      0
                    )}

                    {personal.name
                      .split(" ")
                      .slice(-1)[0]
                      .charAt(0)}
                  </span>
                </div>
              )}

              <div className="floating-card">
                <span className="floating-label">
                  Currently
                </span>

                <strong>
                  {personal.title}
                </strong>
              </div>
            </div>

            <div className="vertical-text">
              PORTFOLIO / 2026
            </div>
          </div>
        </section>


        {/* =========================
            INTRO STRIP
        ========================= */}

        <section className="intro-strip">
          <p>
            A personal portfolio designed to tell
            your story, showcase your work, and help
            opportunities find you.
          </p>

          <ArrowUpRight size={24} />
        </section>


        {/* =========================
            01 — ABOUT
        ========================= */}

        {settings.showAbout && (
          <section
            className="section about"
            id="about"
          >
            <div className="section-heading">
              <span>01</span>
              <p>ABOUT ME</p>
            </div>

            <div className="about-grid">
              <h2>
                More than a CV.
                <br />
                <em>
                  A complete picture.
                </em>
              </h2>

              <div className="about-copy">
                {personal.about.map(
                  (paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  )
                )}

                {personal.cvUrl &&
                  personal.cvUrl !== "#" && (
                    <a
                      href={personal.cvUrl}
                      className="text-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download my CV
                      <Download size={17} />
                    </a>
                  )}

                {personal.cvUrl === "#" && (
                  <span className="text-link">
                    CV available on request
                    <Download size={17} />
                  </span>
                )}
              </div>
            </div>
          </section>
        )}


        {/* =========================
            02 — EXPERIENCE
        ========================= */}

        {settings.showExperience && (
          <section
            className="section experience"
            id="experience"
          >
            <div className="section-heading">
              <span>02</span>
              <p>EXPERIENCE</p>
            </div>

            <div className="experience-list">
              {experience.map(
                (item, index) => (
                  <article
                    className="experience-item"
                    key={index}
                  >
                    <div className="experience-date">
                      {item.period}
                    </div>

                    <div className="experience-main">
                      <h3>
                        {item.role}
                      </h3>

                      <p className="company">
                        {item.company}
                      </p>

                      <p className="experience-description">
                        {item.description}
                      </p>

                      <div className="tags">
                        {item.skills.map(
                          (skill) => (
                            <span key={skill}>
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                  
                  </article>
                )
              )}
            </div>
          </section>
        )}


        {/* =========================
            03 — EXPERTISE
        ========================= */}

        {settings.showSkills && (
          <section
            className="section expertise"
            id="expertise"
          >
            <div className="section-heading">
              <span>03</span>
              <p>EXPERTISE</p>
            </div>

            <div className="expertise-header">
              <div>
                <p className="section-kicker">
                  EXPERTISE
                </p>

                <h2>
                  What I bring
                  <br />
                  <em>
                    to the table.
                  </em>
                </h2>
              </div>

              <p className="expertise-intro">
                A combination of creative thinking,
                digital knowledge, and practical
                experience used to turn ideas into
                meaningful work.
              </p>
            </div>

            <div className="expertise-list">
              {skills.map((skill) => (
                <div
                  className="expertise-item"
                  key={skill.number}
                >
                  <div className="expertise-number">
                    {skill.number}
                  </div>

                  <div className="expertise-main">
                    <div className="expertise-title-row">
                      <h3>
                        {skill.title}
                      </h3>

                      <span className="expertise-category">
                        {skill.category}
                      </span>
                    </div>

                    <p>
                      {skill.description}
                    </p>
                  </div>

                  
                </div>
              ))}
            </div>
          </section>
        )}


        {/* =========================
            04 — CREDENTIALS
        ========================= */}

        {settings.showCertificates && (
          <section
            className="section credentials"
            id="credentials"
          >
            <div className="section-heading">
              <span>04</span>
              <p>CREDENTIALS</p>
            </div>

            <div className="credentials-header">
              <h2>
                Credentials
                <br />
                <em>
                  that count.
                </em>
              </h2>

              <p>
                Professional certifications and
                qualifications that support the
                experience behind the work.
              </p>
            </div>

            <div className="credentials-list">
              {certificates.map(
                (certificate) => (
                  <button
                    type="button"
                    className="credential-item"
                    key={certificate.number}
                    onClick={() =>
                      setSelectedCertificate(
                        certificate
                      )
                    }
                  >
                    <span className="credential-number">
                      {certificate.number}
                    </span>

                    <span className="credential-main">
                      <strong>
                        {certificate.title}
                      </strong>

                      <span>
                        {certificate.issuer}
                      </span>
                    </span>

                    <span className="credential-year">
                      {certificate.year}
                    </span>

                    <span className="credential-type">
                      {certificate.type}
                    </span>

                    <span className="credential-arrow">
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.4}
                      />
                    </span>
                  </button>
                )
              )}
            </div>
          </section>
        )}


        {/* =========================
            05 — SELECTED WORK
        ========================= */}

        {settings.showProjects && (
          <section
            className="section projects"
            id="projects"
          >
            <div className="section-heading">
              <span>05</span>
              <p>SELECTED WORK</p>
            </div>

            <div className="projects-header">
              <h2>
                Selected
                <br />
                <em>
                  projects.
                </em>
              </h2>

              <p>
                A collection of work that
                demonstrates creativity, strategy,
                and practical problem solving.
              </p>
            </div>

            <div className="project-grid">
              {projects.map(
                (project, index) => (
                  <article
                    className={`project-card ${
                      index === 0
                        ? "project-large"
                        : ""
                    }`}
                    key={project.title}
                    onClick={() =>
                      openProject(project)
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        event.preventDefault();
                        openProject(project);
                      }
                    }}
                  >
                    <div
                      className={`project-image project-${
                        index + 1
                      }`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-photo"
                        />
                      ) : (
                        <span>
                          {project.number}
                        </span>
                      )}

                      {project.media?.some(
                        (media) =>
                          media.type ===
                            "video" &&
                          media.src
                      ) && (
                        <span className="project-video-badge">
                          <Play size={12} />
                          Video
                        </span>
                      )}
                    </div>

                    <div className="project-info">
                      <div>
                        <h3>
                          {project.title}
                        </h3>

                        <p>
                          {project.category}
                        </p>
                      </div>

                      <button
                        type="button"
                        aria-label={`View ${project.title}`}
                        onClick={(event) => {
                          event.stopPropagation();
                          openProject(project);
                        }}
                      >
                        <ArrowUpRight />
                      </button>
                    </div>
                  </article>
                )
              )}
            </div>
          </section>
        )}


        {/* =========================
            06 — CONTACT
        ========================= */}

        {settings.showContact && (
          <section
            className="section contact"
            id="contact"
          >
            <div className="contact-inner">
              <div className="section-heading">
                <span>06</span>
                <p>CONTACT</p>
              </div>

              <h2>
                Have an opportunity?
                <br />
                <em>
                  Let's talk.
                </em>
              </h2>

              <p className="contact-intro">
                Whether you're hiring,
                collaborating, or simply want to
                connect, I'd love to hear from you.
              </p>

              <a
                href={`mailto:${personal.email}`}
                className="contact-email"
              >
                <span>
                  {personal.email}
                </span>

                <ArrowUpRight size={25} />
              </a>

              <div className="contact-details">
                <div className="contact-detail">
                  <span>
                    LOCATION
                  </span>

                  <strong>
                    {personal.location}
                  </strong>
                </div>

                <div className="contact-detail">
                  <span>
                    AVAILABILITY
                  </span>

                  <strong>
                    {personal.availability}
                  </strong>
                </div>
              </div>

              <div className="social-links">
                {socials.length > 0 ? (
                  socials.map((social) => (
                    <a
                      href={social.url}
                      key={social.name}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${social.name}`}
                    >
                      <SocialIcon
                        name={social.name}
                      />

                      <span>
                        {social.name}
                      </span>

                      <ArrowUpRight
                        className="social-arrow"
                        size={14}
                      />
                    </a>
                  ))
                ) : (
                  <span className="social-placeholder">
                    <BriefcaseBusiness
                      size={17}
                    />
                    Social links
                  </span>
                )}
              </div>
            </div>
          </section>
        )}

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">
            {personal.firstName.charAt(0)}
          </span>

          <span>
            {personal.name}
          </span>
        </div>

        <p>
          {personal.title}
        </p>

        {siteCraft.enabled && (
          <p>
            {siteCraft.text}
          </p>
        )}
      </footer>


      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      {selectedProject && (
        <div
          className="project-modal"
          role="dialog"
          aria-modal="true"
          aria-label={
            selectedProject.title
          }
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeProject();
            }
          }}
        >
          <div className="project-modal-panel">

            <button
              type="button"
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project"
            >
              <X size={22} />
            </button>


            <div className="project-media-viewer">
              <div className="project-media-stage">

                {currentMedia ? (
                  currentMedia.type ===
                  "video" ? (
                    <video
                      src={currentMedia.src}
                      poster={
                        currentMedia.poster
                      }
                      controls
                      playsInline
                      className="project-media-video"
                    />
                  ) : (
                    <img
                      src={currentMedia.src}
                      alt={
                        currentMedia.alt ||
                        selectedProject.title
                      }
                      className="project-media-image"
                    />
                  )
                ) : (
                  <div className="project-media-empty">
                    <span>
                      {selectedProject.number}
                    </span>
                  </div>
                )}


                {projectMedia.length > 1 && (
                  <>
                    <button
                      type="button"
                      className="media-nav media-nav-left"
                      onClick={
                        showPreviousMedia
                      }
                      aria-label="Previous media"
                    >
                      <ChevronLeft />
                    </button>

                    <button
                      type="button"
                      className="media-nav media-nav-right"
                      onClick={
                        showNextMedia
                      }
                      aria-label="Next media"
                    >
                      <ChevronRight />
                    </button>
                  </>
                )}


                {currentMedia?.type ===
                  "video" && (
                  <div className="media-type-label">
                    <Play size={12} />
                    VIDEO
                  </div>
                )}
              </div>


              {projectMedia.length > 1 && (
                <div className="media-thumbnails">
                  {projectMedia.map(
                    (media, index) => (
                      <button
                        type="button"
                        key={`${media.src}-${index}`}
                        className={`media-thumbnail ${
                          index === activeMedia
                            ? "active"
                            : ""
                        }`}
                        onClick={() =>
                          setActiveMedia(
                            index
                          )
                        }
                        aria-label={`View media ${
                          index + 1
                        }`}
                      >
                        {media.type ===
                        "video" ? (
                          <div className="thumbnail-video">
                            <Play size={17} />
                          </div>
                        ) : (
                          <img
                            src={media.src}
                            alt=""
                          />
                        )}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>


            <div className="project-modal-content">
              <div className="project-modal-topline">
                <span>
                  {selectedProject.number}
                </span>

                <span>
                  {selectedProject.year}
                </span>
              </div>

              <h2>
                {selectedProject.title}
              </h2>

              <p className="project-modal-category">
                {selectedProject.category}
              </p>

              <p className="project-modal-description">
                {selectedProject.description}
              </p>

              <div className="project-modal-tools">
                {selectedProject.tools?.map(
                  (tool) => (
                    <span key={tool}>
                      {tool}
                    </span>
                  )
                )}
              </div>

              {selectedProject.link &&
                selectedProject.link !== "#" && (
                  <a
                    href={
                      selectedProject.link
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="project-modal-link"
                  >
                    View Live Project
                    <ArrowUpRight
                      size={18}
                    />
                  </a>
                )}
            </div>
          </div>
        </div>
      )}


      {/* =====================================================
          CERTIFICATE MODAL
      ===================================================== */}

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-label={
            selectedCertificate.title
          }
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeCertificate();
            }
          }}
        >
          <div
            className="certificate-modal-panel"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <button
              type="button"
              className="certificate-modal-close"
              onClick={closeCertificate}
              aria-label="Close certificate"
            >
              <X
                size={20}
                strokeWidth={1.4}
              />
            </button>


            <div className="certificate-viewer">

              {selectedCertificate.file ? (
                selectedCertificate.type ===
                "PDF" ? (
                  <iframe
                    src={`${selectedCertificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                    title={
                      selectedCertificate.title
                    }
                    className="certificate-pdf"
                  />
                ) : (
                  <img
                    src={
                      selectedCertificate.file
                    }
                    alt={
                      selectedCertificate.title
                    }
                    className="certificate-image"
                    onError={(event) => {
                      event.currentTarget.style.display =
                        "none";

                      const fallback =
                        event.currentTarget
                          .nextElementSibling;

                      if (fallback) {
                        fallback.style.display =
                          "grid";
                      }
                    }}
                  />
                )
              ) : null}


              {!selectedCertificate.file && (
                <div className="certificate-empty">
                  <span>
                    Certificate file unavailable
                  </span>

                  <small>
                    Add the certificate file to
                    continue.
                  </small>
                </div>
              )}

              {selectedCertificate.file &&
                selectedCertificate.type !==
                  "PDF" && (
                  <div
                    className="certificate-image-fallback"
                    style={{
                      display: "none",
                    }}
                  >
                    <span>
                      Certificate preview unavailable
                    </span>

                    <small>
                      Check the certificate file
                      path.
                    </small>
                  </div>
                )}
            </div>


            <div className="certificate-details">

              <p className="certificate-modal-label">
                {selectedCertificate.type}
              </p>

              <h2>
                {selectedCertificate.title}
              </h2>

              <p className="certificate-issuer">
                {selectedCertificate.issuer}
              </p>


              <div className="certificate-meta">

                <div>
                  <span>
                    YEAR
                  </span>

                  <strong>
                    {selectedCertificate.year}
                  </strong>
                </div>


                {selectedCertificate.credentialId && (
                  <div>
                    <span>
                      CREDENTIAL ID
                    </span>

                    <strong>
                      {
                        selectedCertificate.credentialId
                      }
                    </strong>
                  </div>
                )}
              </div>


              {selectedCertificate.verificationUrl && (
                <a
                  href={
                    selectedCertificate.verificationUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="certificate-verify"
                >
                  Verify credential

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


export default App;