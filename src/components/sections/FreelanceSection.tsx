export function FreelanceSection() {
  return (
    <section className="freelance-section">
      <div className="freelance-header">
        <h2>Freelance</h2>
        <p className="freelance-role">Website Design and Development</p>
        <p className="freelance-period">2007 - 2014</p>
      </div>

      <p className="freelance-summary">
        Built and shipped websites and e-commerce experiences while helping
        clients turn business goals into practical, user-friendly products.
      </p>

      <ul className="freelance-callouts">
        <li>
          Delivered projects across entertainment, finance, and e-commerce for
          clients including the <strong>Writers Guild of America</strong>,{" "}
          <strong>Fox Studios</strong>, and{" "}
          <strong>Kopion Asset Management</strong>.
        </li>
        <li>
          Managed full project lifecycle from client communication and
          requirements gathering through design, development, and launch.
        </li>
      </ul>

      <ul className="career-tags" aria-label="Freelance focus areas">
        <li>WordPress</li>
        <li>WooCommerce</li>
        <li>OpenCart</li>
        <li>UI/UX</li>
        <li>Client strategy</li>
        <li>Estimation</li>
      </ul>
    </section>
  );
}
