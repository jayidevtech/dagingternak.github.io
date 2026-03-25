export const productPriceEstimates = [
  {
    name: "Daging Kambing",
    price: "Rp 120.000/kg",
  },
  {
    name: "Kepala Kambing",
    price: "Rp 80.000/kg",
  },
  {
    name: "Daging Sapi Lokal (Kelas 1)",
    price: "Rp 140.000/kg",
  },
  {
    name: "Daging Sapi Lokal (Kelas 2)",
    price: "Rp 120.000/kg",
  },
  {
    name: "Daging Sapi Lokal (Kelas 3)",
    price: "Rp 100.000/kg",
  },
  {
    name: "Daging Sapi Impor",
    price: "Rp 135.000/kg",
  },
  {
    name: "Daging Kepala Sapi",
    price: "Rp 105.000/kg",
  },
  {
    name: "Daging Tetelan Sapi",
    price: "Rp 90.000/kg",
  },
  {
    name: "Tulang Sapi",
    price: "Rp 70.000/kg",
  },
  {
    name: "Lidah Sapi",
    price: "Rp 110.000/kg",
  },
  {
    name: "Kulit Sapi",
    price: "Rp 50.000/kg",
  },
  {
    name: "Daging Ayam",
    price: "Rp 40.000/kg",
  },
  {
    name: "Ceker Ayam",
    price: "Rp 20.000/kg",
  },
  {
    name: "Sayap Ayam",
    price: "Rp 25.000/kg",
  },
  {
    name: "Usus Ayam",
    price: "Rp 18.000/kg",
  },
];

import imgSheep from "../assets/products/sheep.avif";
import imgCow from "../assets/products/cow.avif";
import imgChicken from "../assets/products/chicken.avif";
import imgFish from "../assets/products/fish.avif";
import imgEgg from "../assets/products/egg.avif";

export const productCategories = [
  {
    id: "kambing",
    name: "Produk Kambing/Domba",
    description:
      "Tersedia daging kambing/domba dan kepala kambing/domba untuk sate, gulai, tongseng, aqiqah, dan kebutuhan acara.",
    image: imgSheep,
    comingSoon: false,
  },
  {
    id: "sapi",
    name: "Produk Sapi",
    description:
      "Pilihan lengkap daging sapi lokal, impor, tetelan, tulang, lidah, kulit, hingga kepala sapi sesuai kebutuhan usaha dan rumah tangga.",
    image: imgCow,
    comingSoon: false,
  },
  {
    id: "ayam",
    name: "Produk Ayam",
    description:
      "Menyediakan daging ayam, ceker, sayap, dan usus ayam untuk kebutuhan harian, kuliner, dan partai kecil maupun besar.",
    image: imgChicken,
    comingSoon: false,
  },
  {
    id: "ikan",
    name: "Produk Ikan",
    description:
      "Segera hadir! Kami akan menyediakan pilihan ikan segar untuk melengkapi kebutuhan kuliner dan usaha Anda.",
    image: imgFish,
    comingSoon: true,
  },
  {
    id: "telur",
    name: "Produk Telur",
    description:
      "Segera hadir! Kami akan menyediakan telur segar untuk kebutuhan harian, kuliner, dan usaha Anda.",
    image: imgEgg,
    comingSoon: true,
  },
];
