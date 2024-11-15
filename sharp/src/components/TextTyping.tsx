"use client"
 
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
 
export function TextTyping({ text = 'Typing Effect' }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2
      ref={ref}
      className="text-xl text-end sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]"
      dir='rtl'
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.1, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}