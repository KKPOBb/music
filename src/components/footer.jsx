import SocialLinks from "./SocialLinks";
import { FaMusic, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Umumiy konteyner uchun animatsiya varianti
  const footerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Ichki elementlarni ketma-ket chiqarish
        ease: "easeInOut",
      },
    },
  };

  // Chap tomondan chiqadigan elementlar uchun variant
  const leftItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // O'ng tomondan chiqadigan elementlar uchun variant
  const rightItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  // Pastdan chiqadigan element uchun variant
  const bottomItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };

  return (
    <motion.footer
      id="contact"
      className="bg-[hsl(var(--background))] backdrop-blur-lg border-t border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }} // Ekran 50% ko'ringanda ishga tushadi
      variants={footerContainerVariants}
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Brand Section */}
          <motion.div
            className="text-center md:text-left"
            variants={leftItemVariants}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <FaMusic className="h-6 w-6 text-[hsl(var(--primary))]" />
              <span className="text-lg font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                Violinboy
              </span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
              Певец, автор песен и исполнитель, создающий музыку, которая
              говорит с душой.
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="h-4 w-4" />
              <span>your.email@example.com</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center md:text-right"
            variants={rightItemVariants}
          >
            <h3 className="text-base font-semibold mb-3">Подписывайтесь на меня</h3>
            {/* SocialLinks'ga alohida animatsiya berish shart emas, chunki ota-onasi allaqachon animatsiyaga ega */}
            <SocialLinks showTitle={false} className="mb-3 mt-[-40px]" />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.a
          href="https://t.me/mirik_web"
          target="_blank"
          className="pt-4 border-t border-[hsl(var(--border))] flex mx-auto"
          variants={bottomItemVariants}
        >
          <div className="flex flex-col justify-between items-center mx-auto">
            <div className="flex items-center space-x-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span>© {currentYear} MirikWeb. Made with</span>
              <FaHeart className="text-violet-500 animate-pulse" />
              <span>for music lovers</span>
            </div>
          </div>
        </motion.a>
      </div>
    </motion.footer>
  );
};

export default Footer;