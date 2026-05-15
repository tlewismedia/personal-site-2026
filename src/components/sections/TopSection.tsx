import Link from "next/link";

export function TopSection() {
  return (
    <section className="top-section">
      <div className="top-intro">
        <img
          className="profile-image"
          src="/profile.jpg"
          alt="Tom Lewis portrait"
        />
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
            href="/tomlewis_resume.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Resume PDF"
            data-tooltip="resume"
          >
            <i className="fa-solid fa-file-pdf" aria-hidden="true"></i>
          </a>
        </div>
        <h1>Tom Lewis</h1>
        <p>
          Product-minded, front-end leaning, full-stack engineer with over 15
          years of experience building scalable applications, shaping product
          strategy, and leading multidisciplinary teams, I am passionate about
          discovering and understanding core problems and innovating solutions.
        </p>
      </div>

      <div className="recent-work">
        <h2>Recent Work</h2>
        <div className="work-items-row">
          <Link className="work-item-link" href="/projects/starling-data/">
            <article className="work-item">
              <i className="fa-solid fa-scale-balanced" aria-hidden="true"></i>
              <h3>Starling Data</h3>
            </article>
          </Link>
          <Link
            className="work-item-link"
            href="/projects/next-generation-forms/"
          >
            <article className="work-item">
              <i
                className="fa-solid fa-file-circle-plus"
                aria-hidden="true"
              ></i>
              <h3>Next Generation Forms</h3>
            </article>
          </Link>
          <Link
            className="work-item-link"
            href="/projects/product-and-ui-ux-leadership/"
          >
            <article className="work-item">
              <i
                className="fa-solid fa-compass-drafting"
                aria-hidden="true"
              ></i>
              <h3>Product and UI/UX Leadership</h3>
            </article>
          </Link>
        </div>
      </div>

      <a className="scroll-to-projects-link" href="#projects-section">
        more projects
      </a>
    </section>
  );
}
