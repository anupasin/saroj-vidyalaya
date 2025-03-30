export default function WaterRipple() {
    return (
      <div className="water-ripple">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="ripple-circle"
            style={{ 
              animationDelay: `${i * 0.5}s`,
              width: `${i * 100}px`,
              height: `${i * 100}px`
            }}
          />
        ))}
      </div>
    );
  }