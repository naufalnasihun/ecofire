
import { motion } from "framer-motion";
import { Award, Leaf, Clock, Droplets, Flame, Settings } from "lucide-react";

const features = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Kualitas Premium",
    description: "Terbuat dari 100% eceng gondok alami dengan kontrol kualitas ketat",
  },
  {
    icon: <Leaf className="w-12 h-12" />,
    title: "Ramah Lingkungan",
    description: "Produksi berkelanjutan menggunakan sumber daya terbaru",
  },
  {
    icon: <Clock className="w-12 h-12" />,
    title: "Bakar Lama",
    description: "Waktu bakar lebih lama dengan output panas yang konsisten",
  },
  {
    icon: <Droplets className="w-12 h-12" />,
    title: "Abu Rendah",
    description: "Produksi abu minimal untuk pembersihan mudah",
  },
  {
    icon: <Flame className="w-12 h-12" />,
    title: "Panas Tinggi",
    description: "Nilai kalori tinggi untuk memasak dan memanaskan yang efisien",
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "OEM Tersedia",
    description: "Branding, kemasan, dan spesifikasi khusus tersedia",
  },
];

export function WhyChoose() {
  return (
    <section id="why" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-fire font-semibold mb-3 block">Mengapa Memilih Kami</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
            Keunggulan <span className="text-orange-fire">EcoFire</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Temukan alasan bisnis di seluruh dunia mempercayai EcoFire untuk kebutuhan briket premium mereka
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-background rounded-2xl p-8 hover:shadow-lg hover:shadow-orange-fire/10 transition-all duration-300 border border-gray-200 hover:border-orange-fire/30"
            >
              <div className="w-16 h-16 bg-orange-fire/10 rounded-2xl flex items-center justify-center text-orange-fire mb-6">
                {feature.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-blue-primary mb-3">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

