import { Heart, Infinity } from 'lucide-react';

interface PromiseMeterProps {
  promisesMade: number;
  onAddPromise: () => void;
}

export default function PromiseMeter({ promisesMade, onAddPromise }: PromiseMeterProps) {
  const isUnlocked = promisesMade >= 10;
  const percentage = Math.min((promisesMade / 10) * 100, 100);

  return (
    <section className="meter-section">
      <div className="meter-container">
        <h2 className="meter-title">Promise Commitment</h2>

        <div className="meter-bar-container">
          <div className="meter-bar">
            <div
              className="meter-fill"
              style={{ width: `${percentage}%` }}
            >
              {Array.from({ length: promisesMade }).map((_, i) => (
                <Heart
                  key={i}
                  size={16}
                  className="meter-heart"
                  fill="white"
                  style={{
                    left: `${(i / 10) * 100}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              ))}
            </div>
          </div>
          <span className="meter-count">{promisesMade}/10</span>
        </div>

        {!isUnlocked ? (
          <button onClick={onAddPromise} className="meter-button">
            <Heart size={20} />
            <span>Make Another Promise</span>
          </button>
        ) : (
          <div className="meter-unlocked">
            <Infinity size={32} className="infinity-icon" />
            <p className="unlocked-text">Unlimited promises unlocked ♾️❤️</p>
          </div>
        )}
      </div>
    </section>
  );
}
