"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const initialProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan React, Node.js, dan MongoDB. Fitur lengkap termasuk payment gateway dan admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan real-time collaboration. Dibangun menggunakan Next.js dan Socket.io.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      technologies: ['Next.js', 'Socket.io', 'PostgreSQL', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
      image: 'https://images.pexels.com/photos/5965866/pexels-photo-5965866.jpeg',
      technologies: ['Vue.js', 'Express', 'MySQL', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const additionalProjects = [
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Dashboard analytics untuk media sosial dengan visualisasi data real-time dan automated reporting.',
      image: '/images/serti1.png',
      technologies: ['React', 'D3.js', 'Firebase', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Restaurant Booking System',
      description: 'Sistem reservasi restoran dengan notifikasi real-time dan manajemen meja otomatis.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg',
      technologies: ['Angular', 'Node.js', 'Redis', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'Aplikasi tracking harga cryptocurrency dengan alert system dan portfolio management.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      technologies: ['React Native', 'GraphQL', 'Apollo', 'CoinGecko API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        rotateX: 5,
        rotateY: 5
      }}
      className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Rotating glow effect */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      <div className="relative">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Overlay buttons */}
          <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.liveUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200"
            >
              <ExternalLink size={20} />
            </motion.a>
            <motion.a
              href={project.githubUrl}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-200"
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Proyek Terbaru
          </span>
        </motion.h2>

        {/* Initial Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {initialProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Additional Projects */}
        <AnimatePresence>
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {additionalProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Show More Button */}
        <div className="text-center">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden"
          >
            <span className="relative z-10">
              {showMore ? 'Sembunyikan Proyek' : 'Proyek Lainnya'}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0"
              whileHover={{ opacity: 1 }}
            />
            <motion.div
              animate={{ rotate: showMore ? 180 : 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-70"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;