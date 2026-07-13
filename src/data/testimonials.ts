
export interface Testimonial {
  id: number;
  name: string;
  country: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Setiawan",
    country: "Ina",
    rating: 5,
    comment: "Briket berkualitas luar biasa! Waktu pembakaran konsisten dan abu sedikit. Sempurna untuk bisnis shisha kami.",
    avatar: "https://picsum.photos/seed/avatar1/200/200"
  },
  {
    id: 2,
    name: "Akbar sekia",
    country: "Ina",
    rating: 5,
    comment: "Kami sudah menggunakan EcoFire selama 1 tahun. Kualitasnya selalu konsisten dan dapat diandalkan.",
    avatar: "https://picsum.photos/seed/avatar2/200/200"
  },
  {
    id: 3,
    name: "Hans Farah",
    country: "Ina",
    rating: 4,
    comment: "Produk hebat untuk restoran BBQ kami. Output panasnya luar biasa dan pelanggan menyukai rasanya.",
    avatar: "https://picsum.photos/seed/avatar3/200/200"
  },
  {
    id: 4,
    name: "Nina suktemi",
    country: "Ina",
    rating: 5,
    comment: "Kualitas premium dengan harga kompetitif. Pelanggan kami merasakan perbedaannya!",
    avatar: "https://picsum.photos/seed/avatar4/200/200"
  },
  {
    id: 5,
    name: "Nabila hermani",
    country: "Ina",
    rating: 5,
    comment: "Pengiriman cepat dan layanan pelanggan luar biasa. Sangat direkomendasikan!",
    avatar: "https://picsum.photos/seed/avatar5/200/200"
  }
];

