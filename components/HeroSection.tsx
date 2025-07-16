"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];
  
  useEffect(() => {
    const text = texts[currentIndex];
    let i = 0;
    const timer = setInterval(() => {
      setCurrentText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-12 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Halo, Saya
              </span>
              <br />
              <span className="text-white">Salman Syarif</span>
            </motion.h1>
            
            <motion.div
              className="h-16 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-xl lg:text-2xl text-gray-300">
                Saya adalah <span className="text-blue-400 font-semibold">{currentText}</span>
                <span className="animate-pulse text-blue-400">|</span>
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Tentang Saya</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0"
                  whileHover={{ opacity: 1 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0"
                  whileHover={{ opacity: 0.7, rotate: 180 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="group relative px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Lihat Proyek</span>
                <motion.div
                  className="absolute inset-0 bg-blue-500 opacity-0"
                  whileHover={{ opacity: 0.1 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0"
                  whileHover={{ opacity: 0.7, rotate: -180 }}
                  transition={{ duration: 0.8 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 opacity-30 blur-md"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 opacity-20 blur-lg"
              />
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 15 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Image
                  src="/images/foto1.JPG"
                  alt="Profile"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;