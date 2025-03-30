// src/components/LotusIcon.js
export default function LotusIcon({ size = 120 }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100"
      className="lotus-icon"
    >
      {/* Outer petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`outer-${i}`}
          d="M50 15C53 5 60 2 65 5C70 8 72 15 70 22C68 29 60 33 50 30C40 33 32 29 30 22C28 15 30 8 35 5C40 2 47 5 50 15Z"
          fill="#DEB6AB"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      
      {/* Inner petals */}
      {Array.from({ length: 8 }).map((_, i) => (
        <path
          key={`inner-${i}`}
          d="M50 25C52 20 56 18 58 20C60 22 60 26 58 29C56 32 52 33 50 31C48 33 44 32 42 29C40 26 40 22 42 20C44 18 48 20 50 25Z"
          fill="#FFBE98"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      
      {/* Center */}
      <circle cx="50" cy="50" r="10" fill="#F5E8C7" />
    </svg>
  );
}