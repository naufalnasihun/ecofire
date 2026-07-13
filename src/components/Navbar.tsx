
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
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        isScrolled
          ? "bg-background/98 backdrop-blur-md shadow-lg py-2 md:py-3"
          : "bg-transparent py-3 md:py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logo1.jpg"
            alt="EcoFire Logo"
            className="h-12 md:h-14 w-auto rounded-xl shadow-sm"
          />
        </a>

        {/* Desktop Menu - visible at md breakpoint for tablets */}
        <div className="hidden md:flex items-center gap-3 lg:gap-8 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-600 hover:text-orange-fire transition-colors duration-300 font-medium text-xs md:text-sm lg:text-base"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/6285733535057?text=Halo%20EcoFire,%20saya%20tertarik%20dengan%20produk%20briket%20Anda.%20Bisa%20diberikan%20informasi%20harga%20dan%20detail%20lebih%20lanjut?"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 md:px-4 lg:px-6 py-1.5 md:py-2 bg-orange-fire text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-300 text-xs md:text-sm lg:text-base whitespace-nowrap"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-primary bg-white/30 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white/50 transition-all z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-[50]"
            />
            {/* Menu container */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="md:hidden bg-background border-b border-gray-200 shadow-lg z-[60]"
            >
              <div className="container mx-auto px-6 py-8 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-orange-fire transition-colors duration-300 py-4 text-lg font-medium border-b border-gray-100 last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/6285733535057?text=Halo%20EcoFire,%20saya%20tertarik%20dengan%20produk%20briket%20Anda.%20Bisa%20diberikan%20informasi%20harga%20dan%20detail%20lebih%20lanjut?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-4 bg-gradient-to-r from-orange-fire to-orange-600 text-white rounded-full font-semibold text-center hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-orange-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Permintaan Harga
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

