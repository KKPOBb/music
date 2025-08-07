import SocialLinks from "./SocialLinks";
import { FaHeart } from "react-icons/fa";
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

  // Tepadan pastga tushadigan elementlar uchun variant
  const slideInFromTopVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Pastdan tepaga chiqadigan elementlar uchun variant
  const slideInFromBottomVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Eng pastdagi element uchun variant (alohida)
  const copyrightVariants = {
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
          {/* Brand Section (Tepadan tushadi) */}
          <motion.div
            className="text-center md:text-left"
            variants={slideInFromTopVariants}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <img src="/logo2.png" alt="Logo" className="w-25" />
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-6">
              Певец, автор песен и исполнитель, создающий музыку, которая
              говорит с душой.
            </p>
          </motion.div>

          {/* Social Links (Pastdan chiqadi) */}
          <motion.div
            className="md:mt-[-10px]"
            variants={slideInFromBottomVariants}
          >
            <h3 className="text-base font-semibold md:mb-10 flex items-center justify-center md:justify-end">
              Подписывайтесь на меня
            </h3>
            <SocialLinks
              showTitle={false}
              className="mb-3 mt-[-40px] flex items-center justify-center md:justify-end "
            />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.a
          href="https://t.me/mirik_web"
          target="_blank"
          className="pt-4 border-t border-[hsl(var(--border))] flex mx-auto"
          variants={copyrightVariants}
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