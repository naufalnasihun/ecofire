
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/hero/1920/1080"
          alt="Burning Charcoal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-orange-fire/10 text-orange-fire rounded-full text-sm font-semibold mb-6 border border-orange-fire/20">
              Ecofire Briket 2024
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-primary mb-6 leading-tight">
              Cube Energy by Ecofire: 
              <br />
              <span className="text-orange-fire"> Briket Eceng Gondok </span>  Biomassa Premium
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
EcoFire menghadirkan briket eceng gondok dengan campuran limbah kayu dan tepung singkong berkualitas premium dengan daya bakar tahan lama, kadar abu rendah, panas stabil, dan ramah lingkungan. Diproduksi dengan standar ekspor untuk memenuhi kebutuhan pasar internasional.            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-orange-fire text-white rounded-full font-semibold text-lg hover:bg-orange-fire/90 transition-all duration-300 hover:shadow-lg hover:shadow-orange-fire/30"
            >
              Hubungi Kami
            </a>
            <a
              href="#products"
              className="px-8 py-4 border-2 border-blue-primary text-blue-primary rounded-full font-semibold text-lg hover:bg-blue-primary hover:text-white transition-all duration-300"
            >
              Lihat Produk
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-orange-fire rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

