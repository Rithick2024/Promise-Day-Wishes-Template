import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function FinalMessage() {
  const [clicks, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);

  const handleHeartClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);

    if (newClicks >= 7 && !showSecret) {
      setShowSecret(true);
    }
  };

  return (
    <section className="final-section">
      <div className="final-container">
        <h2 className="final-title">With you, every promise feels beautiful.</h2>

        <div className="final-heart-container" onClick={handleHeartClick}>
          <Heart
            size={80}
            className={`final-heart ${clicks > 0 ? 'beating' : ''}`}
            fill="rgba(255, 105, 180, 0.3)"
            color="rgba(255, 105, 180, 0.8)"
          />
          <div className="infinity-symbol">∞</div>
        </div>

        <p className="final-subtitle">Today, tomorrow, always… you.</p>

        {showSecret && (
          <div className="secret-message">
            <div className="secret-popup">
              <Heart size={24} fill="currentColor" className="secret-heart" />
              <p className="secret-text">Promise saved in my heart forever 🤍</p>
              <p className="secret-subtext">You found the hidden message ✨</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
