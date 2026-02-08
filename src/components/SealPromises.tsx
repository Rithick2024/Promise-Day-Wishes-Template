import { useState } from 'react';
import { Heart } from 'lucide-react';

interface SealPromisesProps {
  onSeal: () => void;
  sealed: boolean;
}

export default function SealPromises({ onSeal, sealed }: SealPromisesProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handlePromise = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHeart = { id: Date.now(), x, y };
    setHearts(prev => [...prev, newHeart]);

    setTimeout(() => {
      setHearts(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1000);

    if (!sealed) {
      onSeal();
    }
  };

  return (
    <section className="seal-section">
      <div className="seal-container">
        <h2 className="seal-title">Seal Our Promises</h2>

        <div className="seal-buttons">
          <button onClick={handlePromise} className="seal-button">
            <Heart size={24} fill="currentColor" />
            <span>I Promise Too</span>
            {hearts.map(heart => (
              <div
                key={heart.id}
                className="floating-heart-burst"
                style={{ left: heart.x, top: heart.y }}
              >
                <Heart size={20} fill="currentColor" />
              </div>
            ))}
          </button>

          <button onClick={handlePromise} className="seal-button secondary">
            <span>💌</span>
            <span>Forever Us</span>
          </button>
        </div>

        {sealed && (
          <div className="sealed-message">
            <div className="sealed-hearts">
              <Heart size={32} fill="rgba(255, 105, 180, 0.8)" color="rgba(255, 105, 180, 1)" />
              <span className="plus-sign">+</span>
              <Heart size={32} fill="rgba(255, 105, 180, 0.8)" color="rgba(255, 105, 180, 1)" />
            </div>
            <p className="sealed-text">Two hearts. One forever.</p>
          </div>
        )}
      </div>
    </section>
  );
}
