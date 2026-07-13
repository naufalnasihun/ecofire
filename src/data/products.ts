
export interface Product {
  id: number;
  name: string;
  image: string;
  specification: string;
  burningTime: string;
  moisture: string;
  ashContent: string;
  calorificValue: string;
  packing?: string;
  price?: string;
  gallery: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Briket Kotak 500gr",
    image: "/500gr.jpeg",
    specification: "Harga 500gr Rp 12.000",
    burningTime: "4-6 jam",
    moisture: "&lt;5%",
    ashContent: "&lt;3%",
    calorificValue: "7000+ kkal/kg",
    price: "Rp 12.000",
    packing: "500gr/bungkus",
    gallery: [
      "/kotak.jpg",
      "/11.jpeg"
    ]
  },
  {
    id: 2,
    name: "Briket Bundar 1kg",
    image: "/1kg.jpeg",
    specification: "Harga 1kg Rp 24.000",
    burningTime: "3-5 jam",
    moisture: "&lt;5%",
    ashContent: "&lt;4%",
    calorificValue: "6800+ kkal/kg",
    price: "Rp 24.000",
    packing: "1kg/bungkus",
    gallery: [
      "/5.jpeg",
      "/22.jpeg"
    ]
  },
  {
    id: 3,
    name: "Briket Lonjong 5kg",
    image: "/5kg.jpeg",
    specification: "Harga 5kg Rp 120.000",
    burningTime: "5-7 jam",
    moisture: "&lt;4%",
    ashContent: "&lt;2.5%",
    calorificValue: "7200+ kkal/kg",
    price: "Rp 120.000",
    packing: "5kg/karton",
    gallery: [
      "/122.jpg",
      "/55.jpeg"
    ]
  },
];

