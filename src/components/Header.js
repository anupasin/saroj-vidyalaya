export default function Header() {
    return (
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <div className="logo-icon">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Simplified lotus logo */}
                  <path d="M50 15C50 15 65 30 65 50C65 70 50 85 50 100C50 85 35 70 35 50C35 30 50 15 50 15Z" fill="#f3e5ab"/>
                  <circle cx="50" cy="50" r="10" fill="#f3e5ab"/>
                </svg>
              </div>
              Saroj<span>Vidyalaya</span>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#learning">Learning</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }