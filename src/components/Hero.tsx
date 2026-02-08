import { Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenPromises: () => void;
}

export default function Hero({ onOpenPromises }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-sparkle">
          <Sparkles size={40} className="sparkle-icon" />
        </div>

        <h1 className="hero-title">
          Happy Promise Day, My Love
          <span className="hero-heart">🤍</span>
        </h1>

        <p className="hero-subtitle">
          Today isn't just about words… it's about forever.
        </p>

        <button onClick={onOpenPromises} className="hero-button">
          <span>Open My Promises</span>
          <div className="button-glow"></div>
        </button>
      </div>
    </section>
  );
}
