"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "Музыка", href: "#music" },
    { name: "Обо мне", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <>
      {/* --- Animated Navbar on page load --- */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[hsl(var(--border))]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-25 md:w-35" />
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden md:flex items-center space-x-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.4 }}
                    className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-[var(--transition-smooth)] px-2 py-1 text-sm font-medium"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-md text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-[var(--transition-smooth)]"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- Animated Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-40 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-400"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
