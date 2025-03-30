export default function Features() {
    const features = [
      {
        title: "Playful Learning",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      },
      {
        title: "Nature-Inspired Education",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      },
      {
        title: "Holistic Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
      }
    ];
  
    return (
      <section className="features nature-elements">
        <div className="leaf">🍃</div>
        <div className="leaf">🌿</div>
        <div className="leaf">🍂</div>
        <div className="leaf">🌱</div>
        <div className="container">
          <h2 className="section-title">Why Choose SarojVidyalaya?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-img">
                  <img src="/images/placeholder.png" alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }