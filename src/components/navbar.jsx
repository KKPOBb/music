import { useState } from 'react';
import { FaBars, FaTimes, FaMusic } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Music', href: '#music' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50  backdrop-blur-md border-b border-[hsl(var(--border))]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaMusic className="h-6 w-6 text-[hsl(var(--primary))]" />
            <span className="text-lg font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
              Your Name
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-[var(--transition-smooth)] px-2 py-1 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-[var(--transition-smooth)]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-[hsl(var(--border))]">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2 text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-[var(--transition-smooth)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
