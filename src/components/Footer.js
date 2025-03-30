export default function Footer() {
    const links = [
      {
        title: "Discover More",
        items: ["Our Story", "Teaching Philosophy", "Parent Testimonials", "FAQ"]
      },
      {
        title: "Learning Resources",
        items: ["Nature Activities", "Playful Worksheets", "Parent Guides", "Educator Tools"]
      },
      {
        title: "Connect With Us",
        items: ["Contact Us", "Support", "Newsletter", "Community"]
      },
      {
        title: "Legal",
        items: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Accessibility"]
      }
    ];
  
    return (
      <footer>
        <div className="container">
          <div className="footer-content">
            {links.map((section, index) => (
              <div key={index} className="footer-column">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="copyright">
            <p>&copy; 2025 SarojVidyalaya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }