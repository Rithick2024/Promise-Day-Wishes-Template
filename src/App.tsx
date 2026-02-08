import { useState, useRef } from 'react';
import { Music, Volume2, VolumeX } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import PromiseReveal from './components/PromiseReveal';
import SealPromises from './components/SealPromises';
import MemorySection from './components/MemorySection';
import PromiseMeter from './components/PromiseMeter';
import LoveLetter from './components/LoveLetter';
import FinalMessage from './components/FinalMessage';

function App() {
  const [showPromises, setShowPromises] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [promisesMade, setPromisesMade] = useState(0);
  const [sealed, setSealed] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (musicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setMusicPlaying(!musicPlaying);
    }
  };

  const handleOpenPromises = () => {
    setShowPromises(true);
    setTimeout(() => {
      const element = document.getElementById('promises-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  const handleAddPromise = () => {
    setPromisesMade(prev => Math.min(prev + 1, 10));
  };

  const handleSeal = () => {
    setSealed(true);
  };

  return (
    <div className="promise-day-app">
      <FloatingHearts />

      <button
        onClick={toggleMusic}
        className="music-toggle"
        aria-label="Toggle music"
      >
        {musicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <Hero onOpenPromises={handleOpenPromises} />

      {showPromises && (
        <>
          <PromiseReveal />
          <SealPromises onSeal={handleSeal} sealed={sealed} />
          <MemorySection />
          <PromiseMeter
            promisesMade={promisesMade}
            onAddPromise={handleAddPromise}
          />
          <LoveLetter />
          <FinalMessage />
        </>
      )}

      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
