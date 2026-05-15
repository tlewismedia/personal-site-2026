export function DigitalHarborSection() {
  return (
    <section className="digital-harbor-section">
      <div className="digital-harbor-header">
        <h2>Digital Harbor</h2>
        <p className="digital-harbor-role">
          ‘Form Designer’ Team Lead, Product Team Lead, Full Stack Developer
        </p>
        <p className="digital-harbor-period">2020 - 2026</p>
      </div>

      <p className="digital-harbor-summary">
        Helped shape Social Forms into a collaborative, next-generation form
        platform by leading across product, UX, and engineering.
      </p>

      <ul className="digital-harbor-highlights">
        <li>
          Led product, design, and engineering for{" "}
          <strong>
            <em>Social Forms</em>
          </strong>
          , an enterprise form-building platform focused on solving the
          frustrations of multi-user forms with complex workflows.
        </li>
        <li>
          Developed an Assistive UI system for contextual help/dialog including
          a performant custom animation engine (RAF techniques) reducing
          rendering lag by 30%.
        </li>
        <li>
          Built{" "}
          <strong>
            <em>Social Autofill</em>
          </strong>
          , a feature leveraging LLM embeddings for intelligent form completion;
          drove adoption from near 0% to 100% of form designers.
        </li>

        <li>
          Architected{" "}
          <strong>
            <em>DesignKit</em>
          </strong>
          , a theming and template system that changed how teams approached
          forms — from utilitarian defaults to considered, brand-forward
          designs.
        </li>

        <li>
          Led adoption of a unified dev/QA testing process built on{" "}
          <strong>Playwright</strong> and AI-assisted test generation,
          increasing e2e test coverage by 50% and boosting shipping confidence.
        </li>

        <li>
          {" "}
          Established <strong>Storybook</strong> and a component system strategy
          to align design and engineering, including automated story generation
          workflows.
        </li>
      </ul>

      <ul className="career-tags" aria-label="Digital Harbor focus areas">
        <li>Angular</li>
        <li>Nest.js</li>
        <li>NgRx</li>
        <li>Playwright</li>
        <li>Design Systems</li>
        <li>Product Leadership</li>
      </ul>
    </section>
  );
}
