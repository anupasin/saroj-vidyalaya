import styles from '@/styles/Home.module.css';

export default function Footer() {
  const footerLinks = {
    "Discover More": [
      { name: "Our Story", href: "#" },
      { name: "Teaching Philosophy", href: "#" },
      { name: "Parent Testimonials", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    "Learning Resources": [
      { name: "Nature Activities", href: "#" },
      { name: "Playful Worksheets", href: "#" },
      { name: "Parent Guides", href: "#" },
      { name: "Educator Tools", href: "#" }
    ],
    "Connect With Us": [
      { name: "Contact Us", href: "#" },
      { name: "Support", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Community", href: "#" }
    ],
    "Legal": [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Accessibility", href: "#" }
    ]
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={index} className={styles.footerColumn}>
              <h3>{category}</h3>
              <ul>
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={styles.copyright}>
          <p>&copy; 2025 SarojVidyalaya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}