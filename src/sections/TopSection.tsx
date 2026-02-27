export function TopSection() {
  return (
    <section className="top-section">
      <div className="top-intro">
        <img className="profile-image" src="/profile.jpg" alt="Tom Lewis portrait" />
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
              <a className="work-item-link" href="#/projects/next-generation-forms">
                Next Generation Forms
              </a>
            </h3>
          </article>
          <article className="work-item">
            <i className="fa-solid fa-compass-drafting" aria-hidden="true"></i>
            <h3>
              <a
                className="work-item-link"
                href="#/projects/product-and-ui-ux-leadership"
              >
                Product and UI/UX Leadership
              </a>
            </h3>
          </article>
          <article className="work-item">
            <i className="fa-solid fa-comments" aria-hidden="true"></i>
            <h3>
              <a className="work-item-link" href="#/projects/conversational-ui">
                Conversational UI
              </a>
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
