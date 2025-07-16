"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const CertificatesSection = () => {
  const certificates = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'freeCodeCamp',
      images: [
        '/images/1dpn.jpg',
        '/images/1blkng.jpg'
      ],
      description: 'Comprehensive course covering React, Node.js, MongoDB, and modern web development practices.'
    },
    {
      id: 2,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      images: [
           '/images/2dpn.jpg',
        '/images/2blkng.jpg'
      ],
      description: 'Advanced JavaScript programming including ES6+, functional programming, and algorithm optimization.'
    },
    {
      id: 3,
      title: 'React Developer Certification',
      issuer: 'Meta',
      images: [
        '/images/3dpn.jpg',
        '/images/3blkng.jpg'
      ],
      description: 'Professional certification in React development, including hooks, context, and advanced patterns.'
    },
    {
      id: 4,
      title: 'Cloud Computing Fundamentals',
      issuer: 'AWS',
      images: [
        '/images/4dpn.jpg',
        '/images/4blkng.jpg'
      ],
      description: 'Cloud architecture, serverless computing, and AWS services implementation and management.'
    }
  ];

  return (
    <section id="certificates" className="py-48 px-48">
      <div className="max-w-8xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold text-center mb-20"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Sertifikat & Pencapaian
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:border-blue-400/40 transition-all duration-300"
            >
              {/* Rotating glow effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative">
                {/* Certificate Images */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {certificate.images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      whileHover={{ scale: 1.05 }}
                      className="relative h-56 overflow-hidden rounded-lg border border-blue-500/20"
                    >
                      <Image
                        src={image}
                        alt={`${certificate.title} Certificate ${imgIndex + 1}`}
                        width={500}
                        height={320}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    </motion.div>
                  ))}
                </div>

                {/* Certificate Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {certificate.title}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-4 text-lg">
                    {certificate.issuer}
                  </p>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Achievement Badge */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
                  >
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;