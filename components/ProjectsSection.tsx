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
      title: 'Web Perpustakaan Pesat',
      description: 'Aplikasi web yang memungkinkan pengguna untuk mendata buku, peminjaman, dan pengembalian.',
      image: '/images/serti3.png',
      technologies: ['Laravel','php','Laragon'],
      githubUrl: 'https://github.com/salmansyarif/serti-3.git'
    },
    {
      id: 2,
      title: 'Pemesanan Hotel',
      description: 'Aplikasi Berbasis Web Untuk Memboking Hotel',
      image: '/images/Hotel.png',
      technologies: ['Laravel', 'Tailwaind', 'Laragon'], 
      githubUrl: 'https://github.com/salmansyarif/BNSP1.git'
    },
    {
      id: 3,
      title: 'Jaki Clone',
      description: 'Aplikasi mobile untuk memberikan informasi terkini. Dibangun menggunakan React Native.',
      video: '/video/jakiclone.mp4',
      technologies: ['Rect-native','Android studio'],
      githubUrl: 'https://github.com/salmansyarif/jaki-clone.git'
    }
  ];

  const additionalProjects = [
    {
      id: 4,
      title: 'Landing Page Restaurant',
      description: 'ini projek landing page pertama saya yang termasuk dalam sertikom',
      image: '/images/serti1.png',
      technologies: ['Index', 'CSS'],
    },
    {
      id: 5,
      title: 'UI/UX Design',
      description: 'UI/UX Design restaurant dengan figma',
      image: '/images/ui.png',
      technologies: ['Figma'],
    },
    {
      id: 6,
      title: 'Surat Menyurat Sekolah',
      description: 'Di rancang untuk mengajukan perizinan / penyuratan sekolah',
      image: '/images/surat.png',
      technologies: ['React Native', 'GraphQL', 'Apollo', 'CoinGecko API'],
 
      githubUrl: 'https://github.com/salmansyarif/system-smsv2.git'
    }
  ];

  const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const [scale, setScale] = useState(1);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const distance = Math.sqrt(x * x + y * y);
      const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);
      const proximity = 1 - Math.min(distance / maxDistance, 1);
      setScale(1 + proximity * 0.1);
    };

    const handleMouseLeave = () => setScale(1);

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
        className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-400/40 transition-all duration-300"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        <div className="relative">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-video overflow-hidden max-h-64 md:max-h-72 lg:max-h-80"
          >
            <motion.div
              animate={{ scale }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="w-full h-full"
            >
              {project.video ? (
                <video
                  src={project.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-center object-cover"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-center object-cover"
                />
              )}
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <Github size={20} />
                </motion.a>
              )}
            </div>
          </motion.div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
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
  };

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {initialProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

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
