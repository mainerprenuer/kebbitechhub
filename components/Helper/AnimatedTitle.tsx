import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  textArray: string[]; // Accepts an array of strings for multiple text animations
  cursorColor?: string; // Optional prop to customize cursor color (defaults to white)
  typingSpeed?: number; // Optional prop to adjust typing/erasing speed (defaults to 100ms)
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const childVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  textArray,
  cursorColor = 'white',
  typingSpeed = 100,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isTyping) {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < textArray[currentTextIndex].length) {
            return prevIndex + 1;
          } else {
            setIsTyping(false);
            return textArray[currentTextIndex].length;
          }
        });
      } else {
        setCurrentIndex((prevIndex) => {
          if (prevIndex > 0) {
            return prevIndex - 1;
          } else {
            setIsTyping(true);
            setCurrentTextIndex((prevIndex) =>
              (prevIndex + 1) % textArray.length
            );
            return 0;
          }
        });
      }
    }, typingSpeed); // Adjust typing/erasing speed based on prop

    return () => clearInterval(intervalId);
  }, [textArray, isTyping, currentIndex, currentTextIndex, typingSpeed]);

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      animate="visible"
      ref={titleRef}
    >
      <AnimatePresence>
        {textArray[currentTextIndex].split('').map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            custom={index}
            initial={false}
            animate={index <= currentIndex ? 'visible' : 'hidden'}
            exit="hidden"
          >
            {char}
            {index === currentIndex && isTyping && (
              <span style={{ color: cursorColor }}>|</span> // Cursor
            )}
          </motion.span>
        ))}
      </AnimatePresence>
    </motion.h1>
  );
};

export default AnimatedTitle;