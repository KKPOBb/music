import { useState } from "react";
import { FaBars, FaTimes, FaMusic } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Главная", href: "#home" }, 
    { name: "Музыка", href: "#music" }, 
    { name: "Обо мне", href: "#about" }, 
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <>
      {/* Asosiy Navigatsiya paneli */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <FaMusic className="h-6 w-6 text-[hsl(var(--primary))]" />
              <span className="text-lg font-bold bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                Your Name
              </span>
            </div>

            {/* Desktop (kompyuter) uchun menyu */}
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

            {/* Mobil menyu uchun tugma */}
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
      </nav>

      {/* --- YAngi O'zgartirishlar Shu Yerda --- */}
      {/* Mobile Menu Overlay (Mobil menyu uchun to'liq ekranli qoplama) */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-background/90 backdrop-blur-sm 
          transition-opacity duration-400 ease-in-out
          flex flex-col items-center justify-center
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col items-center space-y-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={toggleMenu} // Link bosilganda menyuni yopish uchun
                className="text-2xl font-semibold text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-400"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
