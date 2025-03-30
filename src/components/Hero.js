import LotusIcon from './LotusIcon';
import WaterRipple from './WaterRipple';

export default function Hero() {
  return (
    <section className="hero">
      <WaterRipple />
      <div className="hero-content container">
        <div className="lotus-container">
          <LotusIcon size={180} />
        </div>
        <h1>SarojVidyalaya</h1>
        <p className="hindi-subtitle">सरोज विद्यालय - ज्ञान का कमल</p>
        <p className="tagline">Where wisdom rises pure like a lotus in still waters</p>
        <a href="#learning" className="btn explore-btn">
          Begin Your Journey
        </a>
      </div>
    </section>
  );
}