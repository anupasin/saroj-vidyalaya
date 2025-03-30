// src/components/LotusIcon.js
import Image from 'next/image'; // Import Next.js Image component

export default function LotusIcon({ size = 120 }) {
  return (
    <Image 
      src="/images/lotus-icon.png" // Update with the correct path to your PNG
      alt="Lotus Icon"
      width={size} 
      height={size} 
      className="lotus-icon"
    />
  );
}
