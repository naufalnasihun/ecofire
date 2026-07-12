
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Why EcoFire", href: "#why" },
  { name: "Gallery", href: "#gallery" },
  { name: "Export", href: "#export" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg py-2 md:py-3"
          : "bg-transparent py-4 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo1.jpg"
            alt="EcoFire Logo"
            className="h-9 md:h-12 w-auto rounded-lg"
          />
        </a>

        {/* Desktop Menu - visible at md breakpoint for tablets */}
        <div className="hidden md:flex items-center gap-3 lg:gap-8 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-500 hover:text-orange-fire transition-colors duration-300 font-medium text-xs md:text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6285733535057?text=Halo%20EcoFire,%20saya%20tertarik%20dengan%20produk%20briket%20arang%20Anda.%20Bisa%20diberikan%20informasi%20harga%20dan%20detail%20lebih%20lanjut?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 md:px-4 lg:px-6 py-1.5 md:py-2 bg-orange-fire text-white rounded-full font-semibold hover:bg-orange-fire/90 transition-all duration-300 hover:shadow-lg hover:shadow-orange-fire/30 text-xs md:text-sm lg:text-base whitespace-nowrap"
          >
            Permintaan Harga
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-primary bg-white/20 backdrop-blur-sm p-2 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-orange-fire transition-colors duration-300 py-2 text-base border-b border-gray-100 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6285733535057?text=Halo%20EcoFire,%20saya%20tertarik%20dengan%20produk%20briket%20arang%20Anda.%20Bisa%20diberikan%20informasi%20harga%20dan%20detail%20lebih%20lanjut?"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-orange-fire text-white rounded-full font-semibold text-center hover:bg-orange-fire/90 transition-all duration-300 shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Permintaan Harga
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

