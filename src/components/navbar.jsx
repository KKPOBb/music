import { useState, useEffect } from "react"; // <-- 1. useEffect import qilindi
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // --- YANGI QO'SHILGAN KOD BLOGI ---
  // Bu useEffect `isOpen` holati o'zgarganda ishga tushadi
  useEffect(() => {
    // Agar menyu ochiq bo'lsa...
    if (isOpen) {
      // ...sahifadagi scrollni o'chiramiz
      document.body.style.overflow = "hidden";
    } else {
      // Aks holda, scrollni qayta yoqamiz
      document.body.style.overflow = "unset";
    }

    // "Cleanup" funksiyasi: Komponent ekrandan yo'qolganda
    // scrollni qayta yoqish uchun kerak.
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]); // Bu effekt faqat `isOpen` o'zgargandagina ishlaydi
  // --- YANGI KOD BLOGI TUGADI ---

  const menuItems = [
    { name: "Главная", href: "#home" },
    { name: "Музыка", href: "#music" },
    { name: "Обо мне", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[hsl(var(--border))]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="w-25 md:w-35" />
            </div>

            <div className="ml-auto flex items-center">
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
      </nav>

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
                onClick={toggleMenu} // Menyudagi link bosilganda ham menyuni yopadi
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
