
import { motion } from "framer-motion";
import { useState } from "react";
import { products, Product } from "../data/products";
import { ProductModal } from "./ProductModal";

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="products" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-orange-fire font-semibold mb-3 block">Produk Kami</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
              EcoFire Briket <span className="text-orange-fire">Eceng Gondok</span> Premium
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Jelajahi berbagai briket eceng gondok berkualitas tinggi untuk setiap kebutuhan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-orange-fire/10 transition-all duration-300 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-blue-primary mb-2">{product.name}</h3>
                  <p className="text-gray-500 mb-6">{product.specification}</p>
                  <button
                    onClick={() => handleProductClick(product)}
                    className="w-full px-6 py-3 border border-orange-fire text-orange-fire rounded-full font-semibold hover:bg-orange-fire hover:text-white transition-all duration-300"
                  >
                    Lihat Detail
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

