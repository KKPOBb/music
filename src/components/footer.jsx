import SocialLinks from './SocialLinks';
import { FaMusic, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-[hsl(var(--background))] backdrop-blur-lg border-t border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
              <FaMusic className="h-6 w-6 text-[hsl(var(--primary))]" />
              <span className="text-lg font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                Your Name
              </span>
            </div>
            <p className="text-sm text-[hsl(var(--muted-foreground))] mb-3">
              Singer, songwriter, and performer creating music that speaks to the soul.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center space-x-2 text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-glow))] transition-colors duration-300"
            >
              <FaEnvelope className="h-4 w-4" />
              <span>your.email@example.com</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-base font-semibold mb-3">Quick Links</h3>
            <div className="space-y-1">
              {["Home", "Music", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-base font-semibold mb-3">Follow Me</h3>
            <SocialLinks showTitle={false} className="mb-3" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-[hsl(var(--border))]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-[hsl(var(--muted-foreground))]">
              <span>© {currentYear} Your Name. Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>for music lovers</span>
            </div>

            <div className="flex items-center space-x-4 text-xs text-[hsl(var(--muted-foreground))]">
              <a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[hsl(var(--primary))] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
