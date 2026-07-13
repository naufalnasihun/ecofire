
import { motion } from "framer-motion";
import { exportCountries } from "../data/constants";
import { Globe } from "lucide-react";

export function ExportCountries() {
  return (
    <section id="export" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">Jangkauan Global</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            Mengekspor ke <span className="text-orange-fire">Negara</span> di Seluruh Dunia
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Briket premium kami dipercaya oleh bisnis di seluruh dunia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {exportCountries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-background rounded-2xl p-6 text-center border border-gray-200 hover:border-orange-fire/30 transition-all duration-300 shadow-sm"
            >
              <Globe className="w-10 h-10 text-orange-fire mx-auto mb-3" />
              <h3 className="font-semibold text-blue-primary">{country.name}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-orange-fire/10 text-orange-fire rounded-full">
            <span className="font-semibold">Dan masih banyak negara lagi</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

