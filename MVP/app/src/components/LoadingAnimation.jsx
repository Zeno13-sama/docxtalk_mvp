// src/components/LoadingAnimation.js
import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-[1000]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }} // Ajustez la durée et le délai selon vos besoins
    >
      <motion.div
        className="w-12 h-12 rounded-full bg-sky-600"
        animate={{ scale: [1, 2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default LoadingAnimation;