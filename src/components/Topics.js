export default function Topics() {
    const topics = [
      { icon: "🌳", title: "Mathematics Grove", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
      { icon: "🌊", title: "Science Stream", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
      { icon: "🌸", title: "Literature Meadow", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." },
      { icon: "🌎", title: "Geography Valley", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore." }
    ];
  
    return (
      <section className="topics">
        <div className="lotus-corner">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 0C50 0 65 15 65 40C65 65 50 85 50 100C50 85 35 65 35 40C35 15 50 0 50 0Z" fill="#5c6f58"/>
            <path d="M0 50C0 50 15 35 40 35C65 35 85 50 100 50C85 50 65 65 40 65C15 65 0 50 0 50Z" fill="#5c6f58"/>
            <path d="M15 15C15 15 30 25 35 45C40 65 35 80 30 85C35 80 50 65 55 45C60 25 50 10 45 5C50 10 60 25 65 45C70 65 65 80 70 85C65 80 60 65 55 45C50 25 60 15 85 15C60 15 50 25 45 45C40 65 45 80 50 85C45 80 30 65 25 45C20 25 30 15 15 15Z" fill="#5c6f58"/>
            <circle cx="50" cy="50" r="10" fill="#5c6f58"/>
          </svg>
        </div>
        <div className="container">
          <h2 className="section-title">Our Learning Gardens</h2>
          <div className="topics-grid">
            {topics.map((topic, index) => (
              <div key={index} className="topic-card">
                <div className="topic-icon">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }