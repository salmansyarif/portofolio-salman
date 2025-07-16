"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Tentang Saya
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur-xl"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}

                className="relative w-96 h-[500px] overflow-hidden border-8 border-blue-500/30 shadow-2xl rounded-[30px] shadow-blue-500/30"
              >
                <Image
                  src="/images/foto1.JPG"
                  alt="About Profile"


                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Full Stack Developer & Designer
            </h3>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
              Halo! Saya Salman Syarif, seorang pelajar yang sedang menekuni dunia web dan aplikasi development. Ketertarikan saya pada teknologi dimulai sejak sekolah, dan sekarang saya fokus belajar berbagai teknologi seperti HTML, CSS, JavaScript, React, serta Laravel.
              </p>
              
              <p>
                Saya senang membangun proyek sederhana sebagai latihan, seperti landing page, aplikasi to-do list, dan sistem manajemen data. Setiap error atau tantangan saya anggap sebagai peluang untuk belajar lebih dalam.
              </p>
              
              <p>
               Selain ngoding, saya juga mulai tertarik dengan UI/UX design, karena saya ingin membuat aplikasi yang tidak hanya fungsional, tapi juga nyaman digunakan. Saat ini saya sedang memperdalam skill Full Stack Development dengan harapan bisa berkontribusi di dunia teknologi dan memberikan dampak nyata.


              </p>
            </div>

            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">3 Years Study</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">20+ Projects</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">Full Stack</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;