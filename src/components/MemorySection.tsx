import { Sparkles, Star } from 'lucide-react';

const memories = [
  { title: "Every laugh we've shared", description: "The joy that lights up our days" },
  { title: "Our quiet moments together", description: "When words aren't needed" },
  { title: "The way you understand me", description: "Like no one else ever has" },
];

const dreams = [
  { title: "Adventures waiting for us", description: "Places we'll explore together" },
  { title: "A home filled with love", description: "Where our hearts belong" },
  { title: "Growing old together", description: "Every year more beautiful" },
];

export default function MemorySection() {
  return (
    <section className="memory-section">
      <div className="memory-container">
        <h2 className="memory-main-title">Our Today & Forever</h2>

        <div className="memory-grid">
          <div className="memory-column">
            <div className="memory-header">
              <Star size={24} className="memory-icon" />
              <h3 className="memory-title">Moments I cherish with you</h3>
            </div>
            <div className="memory-cards">
              {memories.map((memory, index) => (
                <div key={index} className="memory-card">
                  <h4 className="memory-card-title">{memory.title}</h4>
                  <p className="memory-card-desc">{memory.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="memory-column">
            <div className="memory-header">
              <Sparkles size={24} className="memory-icon" />
              <h3 className="memory-title">Dreams I promise to build with you</h3>
            </div>
            <div className="memory-cards">
              {dreams.map((dream, index) => (
                <div key={index} className="memory-card">
                  <h4 className="memory-card-title">{dream.title}</h4>
                  <p className="memory-card-desc">{dream.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
