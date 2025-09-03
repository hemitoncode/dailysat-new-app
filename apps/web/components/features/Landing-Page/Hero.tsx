import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ArrowSvg from '@/components/common/icons/ArrowSVG';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import GradientUnderline from '@/components/ui/GradientUnderline';

const Hero = () => {
  const slides = [
    {
      text: "a 1500+ warrior",
      img: '/doodles/1500-warrior.png',
      alt: 'A person reaching for 1600 sat score',
      pos: "right-[10px] top-[10px]",
      initialRot: -0.3 * 180 / Math.PI,
      finalRot: 0.2 * 180 / Math.PI,
      side: 'right',
    },
    {
      text: 'procrastinating starting studying',
      img: '/doodles/procrastinating-starting-studying.png',
      alt: 'Student distracted by phone instead of studying',
      pos: "left-[30px] top-[30px]",
      initialRot: 0.1 * 180 / Math.PI,
      finalRot: -0.2 * 180 / Math.PI,
      side: 'left',
    },
    {
      text: "not getting SAT math",
      img: '/doodles/cant-get-a-grip-on-sat-math.png',
      alt: 'Student overwhelmed by math problems',
      pos: "right-[10px] top-[10px]",
      initialRot: -0.3 * 180 / Math.PI,
      finalRot: 0 * 180 / Math.PI,
      side: 'right',
    },
    {
      text: "dying on reading and writing",
      img: '/doodles/struggling-sat-english.png',
      alt: 'Student overwhelmed by reading and writing problems',
      pos: "left-[10px] top-1/5",
      initialRot: 0.1 * 180 / Math.PI,
      finalRot: -0.2 * 180 / Math.PI,
      side: 'left',
    }
  ];

  const [index, setIndex] = useState(0);
  const [showMask, setShowMask] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setIndex(i => (i + 1) % slides.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const check = () => setShowMask((window.innerWidth || 0) >= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // TypeScript-safe slide reference
  const slide = slides[index]!;

  return (
    <div className="relative w-screen min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center text-blue-900 font-figtree overflow-hidden py-6 md:py-20 space-y-5 md:space-y-7">
      {/* Foreground content */}
      <motion.div
        className="relative z-10 flex items-center text-sm border border-gray-200 bg-white/70 backdrop-blur-sm shadow-sm px-3 py-0.5 rounded-full text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-blue-500 text-white rounded-full px-2 py-0.5 font-medium shadow">
          💡 Tip
        </div>
        <span className="ml-2 leading-tight font-medium">
          Practice daily. Score higher.
        </span>
      </motion.div>

      <div className="relative z-10 flex flex-col items-center gap-y-0 sm:gap-y-0.5 leading-tight -mt-3 sm:-mt-4">
        <motion.h1
          className="text-[45px] sm:text-[70px] font-[600] leading-[0.88em] tracking-[-0.055em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <GradientUnderline className="pr-2" from="#0ea5e9" to="rgba(14,165,233,0)">SAT</GradientUnderline>{' '}Preparation Made
        </motion.h1>
        <motion.h1
          className="text-[45px] sm:text-[70px] font-[600] leading-[0.88em] tracking-[-0.055em]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Simple and <GradientUnderline from="#0d4fff" to="rgba(13,79,255,0)">Effective</GradientUnderline>.
        </motion.h1>
      </div>

      <motion.div
        className="relative z-10 text-lg text-gray-700 p-4 max-w-xl mt-2 md:mt-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <span>Whether you're </span>
        <span
          className="relative inline-flex h-[2em] items-center justify-center overflow-hidden bg-white/20 border border-white/40 backdrop-blur-md shadow-lg rounded-md px-4 mx-1"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={slide.text}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="block w-full text-center"
            >
              {slide.text}
            </motion.span>
          </AnimatePresence>
        </span>
        <span>, we've got you with a plan, motivation, support, and results.</span>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.img
          key={slide.img}
          src={slide.img}
          alt={slide.alt}
          initial={{ scale: 0.9, opacity: 0, rotate: slide.initialRot }}
          animate={{ scale: 1, opacity: 0.27, rotate: slide.finalRot }}
          exit={{ scale: 0.9, opacity: 0, rotate: slide.initialRot }}
          style={
            showMask
              ? {
                  WebkitMaskImage:
                    slide.side === "right"
                      ? 'radial-gradient(circle at 50vw 50vh, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 70%)'
                      : 'radial-gradient(circle at 0vw 50vh, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 70%)',
                  maskImage:
                    slide.side === "right"
                      ? 'radial-gradient(circle at 50vw 50vh, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 70%)'
                      : 'radial-gradient(circle at 0vw 50vh, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 70%)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                }
              : {}
          }
          className={"absolute " + slide.pos + " z-0 w-[600px] h-auto"}
        />
      </AnimatePresence>

      <motion.div
        className="relative z-10 flex items-center space-x-2 mt-4 md:mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Button
          asChild
          variant="running-stroke"
          ringColor="#3299b3ff"
          fillColor="#0ea5e9"
          textColor="#ffffff"
          strokeThickness="3px"
          runningColor="white"
          strokeSpeed="2s"
          size="lg"
        >
          <Link href="/dashboard" className="flex items-center">
            Start Your Journey
            <ArrowSvg
              className="w-4 h-4 ml-2 transition-transform duration-300 -rotate-45 group-hover:rotate-0"
              stroke="white"
            />
          </Link>
        </Button>

        <Button
          asChild
          variant="running-stroke"
          ringColor="#ddddddff"
          fillColor="white"
          textColor="#111827"
          strokeThickness="3px"
          strokeSpeed="2s"
          runningColor="#00FFFF"
          size="lg"
        >
          <Link href="/#how-it-works" className="flex items-center">
            See How It Works
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
