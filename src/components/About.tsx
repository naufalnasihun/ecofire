
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "../data/constants";

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const increment = end / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {count}
      {suffix}
    </motion.span>
  );
};

export function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg">
             <img src="/1.png" alt="EcoFire Factory" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-fire/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-primary/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
          >
            <span className="text-orange-fire font-semibold mb-3 block">Tentang Kami</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-blue-primary mb-6">
             Ecofire Briket  
              <span className="text-orange-fire"> Berkualitas Premium </span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              EcoFire merupakan produsen briket berbahan baku eceng gondok, tanaman yang diolah menjadi bahan bakar alternatif berkualitas dan ramah lingkungan. Melalui proses produksi yang tepat, kami menghasilkan briket dengan panas yang stabil, waktu pembakaran lebih lama, serta mudah digunakan untuk berbagai kebutuhan memasak.
            </p>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              EcoFire menghadirkan produk berkualitas dengan harga yang terjangkau untuk memenuhi kebutuhan rumah tangga, UMKM kuliner, angkringan, usaha bakaran, hingga kegiatan luar ruangan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 + index * 0.1 } },
                  }}
                  className="bg-secondary rounded-2xl p-6 text-center shadow-sm"
                >
                  <span className="text-4xl md:text-5xl font-bold text-orange-fire">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className="text-gray-500 mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

