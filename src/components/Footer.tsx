
import { Instagram, Link2 } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Why EcoFire", href: "#why" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/ecofire_luverta?igsh=MWIzc3dkMzNvYXlkNg==" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@ecofire.official?_r=1&_t=ZS-97uzBZ3OHUy" },
  { icon: SiShopee, href: "https://id.shp.ee/kiqnjZh6" },
  { icon: Link2, href: "https://linktr.ee/BriketEcofire" }
];

export function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
            <img src="/logo1.jpg" alt="EcoFire Logo" className="h-12 w-auto" />
          </div>
            <p className="text-gray-400 mb-6">
              Produsen terkemuka briket premium untuk ekspor global.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-gray-400 hover:text-orange-fire hover:bg-orange-fire/10 transition-all duration-300"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Tautan Cepat</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-fire transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Produk Kami</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-orange-fire transition-colors duration-300">
                  Briket Kotak 500gr
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-orange-fire transition-colors duration-300">
                  Briket Bundar 1kg
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-orange-fire transition-colors duration-300">
                  Briket Bundar 5kg
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-3 text-gray-400">
              <li>briketstore22@gmail.com</li>
              <li>+62 857-3353-5057</li>
              <li>Carang Puspo, Carang Rejo, Kec. Kesamben, Kabupaten Jombang, Jawa Timur 61484</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} EcoFire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

