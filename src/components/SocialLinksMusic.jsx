"use client";

import { FaSpotify, FaHeart, FaVk, FaYandex } from "react-icons/fa";
import { SiApplemusic } from "react-icons/si";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const SocialLinksMusic = ({ showTitle = true, className = "" }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const socialLinksMusic = [
    {
      name: "Yandex Music",
      icon: FaYandex,
      url: "https://music.yandex.uz/artist/12482674?utm_source=web&utm_medium=copy_link",
      color: "hover:text-yellow-500",
    },
    {
      name: "VK",
      icon: FaVk,
      url: "https://vk.com/artist/violinboy",
      color: "hover:text-blue-500",
    },
    {
      name: "Apple Music",
      icon: SiApplemusic,
      url: "https://music.apple.com/uz/artist/violinboy/1575912002",
      color: "hover:text-red-500",
    },
    {
      name: "Spotify",
      icon: FaSpotify,
      url: "https://open.spotify.com/artist/7jCLOzaRo5gzuiBOYRdU3D?si=F-slHiqKTsiBldekB7ZH1Q",
      color: "hover:text-green-500",
    },
  ];

  return (
    <div
      ref={containerRef}
      className={`text-center bg-[hsl(var(--background))] text-[hsl(var(--foreground))] ${className}`}
    >
      {showTitle && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text ">
            Свяжитесь со мной
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Следите за моим музыкальным путешествием и будьте в курсе последних
            релизов, закулисного контента и живых выступлений.
          </p>
        </motion.div>
      )}

      <div className="flex justify-center items-center gap-4 md:mt-15">
        {socialLinksMusic.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative p-3 rounded-full bg-card border border-border transition-all duration-300 hover:border-primary hover:shadow-glow hover:-translate-y-2 ${social.color}`}
              aria-label={social.name}
            >
              <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-lg text-[12px] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                {social.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
              </div>
            </motion.a>
          );
        })}
      </div>

      {showTitle && (
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center space-x-2 text-muted-foreground"
        >
          <span>Made with</span>
          <FaHeart className="text-violet-500 animate-pulse" />
          <span>for music lovers</span>
        </motion.div>
      )}
    </div>
  );
};

export default SocialLinksMusic;
