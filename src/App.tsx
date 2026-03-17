import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'motion/react';

const responseAudio = `${import.meta.env.BASE_URL}response.mp3`;

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#2a2a2a] font-sans flex flex-col items-center justify-center p-6 md:p-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-16 relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#5A5A40]"></div>
        
        <header className="mb-12 text-center">
          <h1 className="text-sm font-bold tracking-widest uppercase text-[#5A5A40] mb-2">Decision Space Podcast</h1>
          <p className="text-xs text-gray-500 tracking-wider uppercase">A Moment of Clarity</p>
        </header>

        <div className="space-y-12">
          {/* Brendan's Quote */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <span className="absolute -left-4 md:-left-8 top-0 text-4xl text-[#5A5A40] opacity-20 font-serif">"</span>
            <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-800 mb-4">
              "...There is this whole subset of games that are really interactive, that are about understanding someone else, that are about empathy. Why is it that within the popular imagination of games, there is so little room to understand that games at their core — games played from a striving mindset — are really about empathy in some way, shape, or form?"
            </p>
            <p className="text-sm font-semibold tracking-wide text-[#5A5A40] uppercase">— Brendan Hansen</p>
          </motion.div>

          {/* Divider */}
          <div className="w-16 h-px bg-gray-300 mx-auto"></div>

          {/* Thi's Response */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative"
          >
            <span className="absolute -left-4 md:-left-8 top-0 text-4xl text-[#5A5A40] opacity-20 font-serif">"</span>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-black mb-4 italic">
              OMG, such a beautiful question. Makes me want to write a book about answering that.
            </p>
            <p className="text-sm font-semibold tracking-wide text-[#5A5A40] uppercase">— C. Thi Nguyen</p>
          </motion.div>
        </div>

        {/* Audio Player Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex flex-col items-center"
        >
          <audio 
            ref={audioRef} 
            src={responseAudio} 
            onEnded={() => setIsPlaying(false)}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
          
          <button 
            onClick={togglePlay}
            className="w-20 h-20 rounded-full bg-[#5A5A40] text-white flex items-center justify-center hover:bg-[#4a4a30] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
            aria-label={isPlaying ? "Pause response" : "Play response"}
          >
            {isPlaying ? <Pause size={32} className="fill-current" /> : <Play size={32} className="fill-current ml-2" />}
          </button>
          <p className="mt-4 text-sm text-gray-500 font-medium tracking-wide uppercase">
            {isPlaying ? "Playing Response..." : "Play Response"}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
