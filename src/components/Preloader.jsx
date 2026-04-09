import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-dark-bg flex flex-col items-center justify-center p-10"
        >
          <div className="relative overflow-hidden w-full max-w-md h-1 bg-white/10 rounded-full mb-8">
            <motion.div 
              className="absolute inset-0 bg-primary-500 rounded-full origin-left"
              style={{ scaleX: percent / 100 }}
            />
          </div>
          
          <div className="flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-white text-6xl md:text-8xl font-black mb-4 tracking-tighter"
            >
              {percent}%
            </motion.span>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-bold uppercase tracking-[0.5em] text-sm"
            >
              Crafting Experience
            </motion.p>
          </div>

          <div className="absolute bottom-10 left-10 text-white/20 text-xs font-mono uppercase">
            System Initializing...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
