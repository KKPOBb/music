import SocialLinks from "./SocialLinks";
import { FaMusic, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[hsl(var(--background))] backdrop-blur-lg border-t border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <FaMusic className="h-6 w-6 text-[hsl(var(--primary))]" />
              <span className="text-lg font-bold bg-[var(--gradient-primary)] bg-clip-text text-">
                Violinboy
              </span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
              Певец, автор песен и исполнитель, создающий музыку, которая
              говорит с душой.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors duration-300"
            >
              <FaEnvelope className="h-4 w-4" />
              <span>your.email@example.com</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-base font-semibold mb-3">Подписывайтесь на меня</h3>
            <SocialLinks showTitle={false} className="mb-3 mt-[-40px]" />
          </div>
        </div>

        {/* Bottom Section */}
        <a
          href="https://t.me/mirik_web"
          target="_blank"
          className="pt-4 border-t border-[hsl(var(--border))] flex mx-auto"
        >
          <div className="flex flex-col justify-between items-center mx-auto">
            <div className="flex items-center space-x-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span>© {currentYear} MirikWeb. Made with</span>
              <FaHeart className="text-violet-500 animate-pulse" />
              <span>for music lovers</span>
            </div>

            {/* <div className="flex items-center space-x-4 text-xs text-[hsl(var(--muted-foreground))]">
              <a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">
                Terms of Service
              </a>
            </div> */}
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
