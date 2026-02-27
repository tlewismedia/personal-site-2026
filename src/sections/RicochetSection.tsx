export function RicochetSection() {
  return (
    <section className="ricochet-section career-section">
      <div className="career-header">
        <h2>Ricochet</h2>
        <p className="career-role">Senior Programmer to Solution Architect</p>
        <p className="career-period">2014 - 2019</p>
      </div>

      <div className="career-grid">
        <p className="career-card">
          At Ricochet Partners, I grew from Senior Programmer (2014 to 2018) to
          Solution Architect (2019), leading development across websites, web
          apps, and interactive experiences for complex client needs.
        </p>
        <p className="career-card">
          I led delivery of projects including a 3D interactive web app using
          JavaScript, Web Components, Webpack, and the Sketchfab API; a legal
          document management prototype for a major semiconductor manufacturer; a
          Ruby on Rails plus Angular LMS prototype; a vision correction web app
          using Angular, Webpack, Jasmine, and Docker; and an AR trade show
          application built with Unity, C#, Xcode, and TestFlight.
        </p>
        <p className="career-card">
          I also led development of a contact lens company website in Craft CMS,
          implementing a modular page-building system with BEM and SASS for
          long-term maintainability.
        </p>
        <p className="career-card">
          Additional work from this period included building course-authoring
          processes with the Adapt Framework for responsive HTML5 SCORM
          courseware, implementing ARIA accessibility solutions for Adobe
          Captivate training programs, and helping port a web-based weather app
          to iOS and Android.
        </p>
      </div>

      <ul className="career-tags" aria-label="Ricochet focus areas">
        <li>Web Apps</li>
        <li>Interactive 3D</li>
        <li>AR Prototyping</li>
        <li>Rails + Angular</li>
        <li>Accessibility</li>
        <li>Architecture</li>
      </ul>
    </section>
  );
}
