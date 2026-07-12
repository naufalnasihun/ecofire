
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "../data/gallery";

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <>
      <section id="gallery" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-fire font-semibold mb-3 block">Galeri</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
              <span className="text-orange-fire">Karya</span> Kami dalam Gambar
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Lihat fasilitas produksi, produk, dan pelanggan puas kami
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full aspect-square object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-4 mx-auto w-[95%] max-w-5xl bg-white rounded-2xl overflow-hidden z-[70] border border-gray-200 shadow-2xl max-h-[calc(100vh-2rem)] flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 flex-shrink-0">
                <h2 className="font-heading text-xl md:text-2xl font-bold text-blue-primary">Galeri</h2>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 hover:text-blue-primary"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="overflow-y-auto flex-1 p-5 md:p-8 flex items-center justify-center">
                <div className="relative w-full flex items-center justify-center">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    className="absolute left-2 md:left-4 text-orange-fire hover:text-orange-600 transition-colors z-10 bg-white/80 rounded-full p-2 shadow-md"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <img
                    src={galleryImages[selectedImage]}
                    alt={`Full size ${selectedImage + 1}`}
                    className="max-h-[70vh] max-w-full rounded-xl object-contain"
                  />
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    className="absolute right-2 md:right-4 text-orange-fire hover:text-orange-600 transition-colors z-10 bg-white/80 rounded-full p-2 shadow-md"
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 text-center text-gray-500 font-medium">
                {selectedImage + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

