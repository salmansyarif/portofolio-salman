"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // ← mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "certificates",
        "contact",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // tutup menu setelah klik
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Tentang" },
    { id: "skills", label: "Keahlian" },
    { id: "projects", label: "Proyek" },
    { id: "certificates", label: "Sertifikat" },
    { id: "contact", label: "Kontak" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-slate-900/80 shadow-lg shadow-blue-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Salman
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}

                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <motion.div
                    className="absolute inset-0 rounded-lg bg-blue-500/10 opacity-0"
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {isOpen ? (
                  // ICON CLOSE
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  // ICON HAMBURGER
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-lg border-b border-white/10"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-gray-300 text-base py-2 ${
                    activeSection === item.id
                      ? "text-blue-400 font-semibold"
                      : "hover:text-blue-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
