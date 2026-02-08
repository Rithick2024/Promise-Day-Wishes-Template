import { useState, useEffect } from 'react';
import { Heart, Lock } from 'lucide-react';

const promises = [
  "I promise to stand by you in every phase of life, through every high and every low",
  "I promise to make you smile even on the hardest days, when the world feels heavy",
  "I promise to listen with my whole heart, to understand your silences and celebrate your words",
  "I promise to support your dreams as if they were my own, and watch you soar",
  "I promise to choose you every single day, in a thousand small ways and a million big moments",
  "I promise to grow with you, to learn together, and never give up on us",
  "I promise to be your safe place, where you can always be yourself",
  "I promise to love you not just for who you are, but for who we become together"
];

export default function PromiseReveal() {
  const [visiblePromises, setVisiblePromises] = useState<number[]>([]);
  const [lockedPromises, setLockedPromises] = useState<Set<number>>(new Set());

  useEffect(() => {
    promises.forEach((_, index) => {
      setTimeout(() => {
        setVisiblePromises(prev => [...prev, index]);
      }, index * 800);
    });
  }, []);

  const toggleLock = (index: number) => {
    setLockedPromises(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="promises-section" className="promises-section">
      <div className="promises-container">
        <div className="promises-book">
          <h2 className="promises-title">My Promises to You</h2>

          <div className="promises-list">
            {promises.map((promise, index) => (
              <div
                key={index}
                className={`promise-card ${visiblePromises.includes(index) ? 'visible' : ''} ${lockedPromises.has(index) ? 'locked' : ''}`}
              >
                <div className="promise-content">
                  <p className="promise-text">{promise}</p>
                  <button
                    onClick={() => toggleLock(index)}
                    className="promise-lock-btn"
                    aria-label="Lock promise"
                  >
                    {lockedPromises.has(index) ? (
                      <Lock size={20} className="lock-icon locked" />
                    ) : (
                      <Heart size={20} className="heart-icon" />
                    )}
                  </button>
                </div>
                <div className="promise-sparkle"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
