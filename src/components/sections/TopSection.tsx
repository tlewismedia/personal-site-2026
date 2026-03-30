import Link from 'next/link';

export function TopSection() {
  return (
    <section className="top-section">
      <div className="top-intro">
        <img className="profile-image" src="/profile.jpg" alt="Tom Lewis portrait" />
        <div className="profile-links" aria-label="Social and resume links">
          <a
            className="profile-link-icon"
            href="https://www.linkedin.com/in/tlewismedia/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            data-tooltip="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a
            className="profile-link-icon"
            href="https://github.com/tlewismedia"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            data-tooltip="GitHub"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="profile-link-icon resume-link-icon"
            href="/tomlewis_resume_print.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume PDF"
            data-tooltip="resume"
          >
            <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>
          </a>
        </div>
        <h1>Hi, I&apos;m Tom Lewis.</h1>
        <p>
          I&apos;m a product-minded front-end engineer focused on building clean,
          reliable, and human-centered digital experiences. I enjoy turning
          complex ideas into clear interfaces that are useful, fast, and easy
          to maintain.
        </p>
      </div>

      <div className="recent-work">
        <h2>What have I been working on</h2>
        <div className="work-items-row">
          <article className="work-item">
            <i className="fa-solid fa-file-circle-plus" aria-hidden="true"></i>
            <h3>
              <Link className="work-item-link" href="/projects/next-generation-forms/">
                Next Generation Forms
              </Link>
            </h3>
          </article>
          <article className="work-item">
            <i className="fa-solid fa-compass-drafting" aria-hidden="true"></i>
            <h3>
              <Link className="work-item-link" href="/projects/product-and-ui-ux-leadership/">
                Product and UI/UX Leadership
              </Link>
            </h3>
          </article>
          <article className="work-item">
            <i className="fa-solid fa-comments" aria-hidden="true"></i>
            <h3>
              <Link className="work-item-link" href="/projects/conversational-ui/">
                Conversational UI
              </Link>
            </h3>
          </article>
        </div>
      </div>

      <a className="scroll-to-projects-link" href="#projects-section">
        more projects
      </a>
    </section>
  );
}
