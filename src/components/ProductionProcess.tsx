
import { motion } from "framer-motion";
import { productionProcess } from "../data/constants";

export function ProductionProcess() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">Proses Kami</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            Dari <span className="text-orange-fire">Eceng gondok</span> ke Briket Premium
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Temukan proses produksi teliti kami yang memastikan kualitas tertinggi
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - visible on all devices */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-fire to-orange-300 rounded-full" />

          <div className="space-y-10 md:space-y-12">
            {productionProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 md:gap-8 pl-12 md:pl-20"
              >
                {/* Step Circle */}
                <div className="absolute left-0 md:left-3 top-2 w-12 h-12 md:w-14 md:h-14 bg-orange-fire rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl border-4 border-background shadow-lg z-10">
                  {step.step}
                </div>

                {/* Content Card */}
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-secondary to-white rounded-2xl p-5 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-blue-primary mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

