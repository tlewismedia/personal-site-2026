export function PrincicplesSection() {
  return (
    <section className="principles-section">
      <div className="principles-intro">
        <h2>Building great software is about understanding</h2>
        <p>
          Great design isn&apos;t just aesthetics or code. It starts with how people
          work, collaborate, and make decisions in real workflows.
        </p>
      </div>

      <div className="principles-grid">
        <article className="principle-item">
          <span className="principle-number">01</span>
          <h3>Understand People</h3>
          <p>
            Start with context and constraints so solutions match real user
            behavior, not assumptions.
          </p>
        </article>
        <article className="principle-item">
          <span className="principle-number">02</span>
          <h3>Design for Flow</h3>
          <p>
            Reduce friction by making complex interactions feel familiar,
            readable, and predictable.
          </p>
        </article>
        <article className="principle-item">
          <span className="principle-number">03</span>
          <h3>Build for Change</h3>
          <p>
            Architect systems that are scalable and maintainable as product
            needs evolve.
          </p>
        </article>
      </div>

      <div className="practice-row" aria-label="In practice">
        <span>Discovery</span>
        <span>Prototyping</span>
        <span>Design Systems</span>
        <span>Accessibility</span>
      </div>
    </section>
  );
}
