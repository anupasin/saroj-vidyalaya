export default function LotusIcon({ size = 120 }) {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100"
        className="lotus-icon"
      >
        {/* Base circle (subtle water effect) */}
        <circle cx="50" cy="50" r="45" fill="#e8f4f8" opacity="0.6" />
        
        {/* Petals (two layers) */}
        <g transform="rotate(-10 50 50)">
          {/* Outer petals (8 petals) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={`outer-${i}`}
              d="M50 15C53 5 60 2 65 5C70 8 72 15 70 22C68 29 60 33 50 30C40 33 32 29 30 22C28 15 30 8 35 5C40 2 47 5 50 15Z"
              fill="#fff"
              opacity="0.9"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
          
          {/* Inner petals (8 smaller petals) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <path
              key={`inner-${i}`}
              d="M50 25C52 20 56 18 58 20C60 22 60 26 58 29C56 32 52 33 50 31C48 33 44 32 42 29C40 26 40 22 42 20C44 18 48 20 50 25Z"
              fill="#f8e8f0"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </g>
        
        {/* Center (stamen) */}
        <circle cx="50" cy="50" r="10" fill="#f3e5ab" />
        <circle cx="50" cy="50" r="6" fill="#d4a017" />
      </svg>
    );
  }