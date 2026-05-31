// Samsung
import samsungS24Image from "../assets/stickers/samsungS24Image.png";
import samsungS24UltraImage from "../assets/stickers/samsungS24UltraImage.png";
import samsungZFlip6Image from "../assets/stickers/samsungZFlip6Image.png";
import samsungZFold6Image from "../assets/stickers/samsungZFold6Image.png";

import samsungS25Image from "../assets/stickers/samsungS25Image.png";
import samsungS25UltraImage from "../assets/stickers/samsungS25UltraImage.png";
import samsungZFlip7Image from "../assets/stickers/samsungZFlip7Image.png";
import samsungZFold7Image from "../assets/stickers/samsungZFold7Image.png";

import samsungS26Image from "../assets/stickers/samsungS26Image.png";
import samsungS26UltraImage from "../assets/stickers/samsungS26UltraImage.png";
import samsungZFlip8Image from "../assets/stickers/samsungZFlip8Image.png";
import samsungZFold8Image from "../assets/stickers/samsungZFold8Image.png";

// Apple
import iphone16Image from "../assets/stickers/iphone16Image.png";
import iphone16ProImage from "../assets/stickers/iphone16ProImage.png";
import iphone16ProMaxImage from "../assets/stickers/iphone16ProMaxImage.png";
import iphoneSE2024Image from "../assets/stickers/iphoneSE2024Image.png";

import iphone17Image from "../assets/stickers/iphone17Image.png";
import iphone17ProImage from "../assets/stickers/iphone17ProImage.png";
import iphone17ProMaxImage from "../assets/stickers/iphone17ProMaxImage.png";
import iphoneSE2025Image from "../assets/stickers/iphoneSE2025Image.png";

import iphone18Image from "../assets/stickers/iphone18Image.png";
import iphone18ProImage from "../assets/stickers/iphone18ProImage.png";
import iphone18ProMaxImage from "../assets/stickers/iphone18ProMaxImage.png";
import iphoneSE2026Image from "../assets/stickers/iphoneSE2026Image.png";

// Google
import pixel9Image from "../assets/stickers/pixel9Image.png";
import pixel9ProImage from "../assets/stickers/pixel9ProImage.png";

import pixel10Image from "../assets/stickers/pixel10Image.png";
import pixel10ProImage from "../assets/stickers/pixel10ProImage.png";

import pixel11Image from "../assets/stickers/pixel11Image.png";
import pixel11ProImage from "../assets/stickers/pixel11ProImage.png";

const products = [
  // Samsung 2024
  {
    productId: 1,
    name: "Samsung Galaxy S24",
    description: "Flagship performance with sleek design.",
    price: 95000.0,
    popularity: "92",
    imageUrl: samsungS24Image,
  },
  {
    productId: 2,
    name: "Samsung Galaxy S24 Ultra",
    description: "Ultimate camera and productivity powerhouse.",
    price: 125000.0,
    popularity: "98",
    imageUrl: samsungS24UltraImage,
  },
  {
    productId: 3,
    name: "Samsung Galaxy Z Flip6",
    description: "Compact foldable with premium features.",
    price: 105000.0,
    popularity: "85",
    imageUrl: samsungZFlip6Image,
  },
  {
    productId: 4,
    name: "Samsung Galaxy Z Fold6",
    description: "Tablet-sized foldable for multitasking.",
    price: 145000.0,
    popularity: "90",
    imageUrl: samsungZFold6Image,
  },

  // Apple 2024
  {
    productId: 5,
    name: "iPhone 16",
    description: "Apple’s 2024 flagship with A18 chip.",
    price: 110000.0,
    popularity: "95",
    imageUrl: iphone16Image,
  },
  {
    productId: 6,
    name: "iPhone 16 Pro",
    description: "ProMotion display and advanced cameras.",
    price: 135000.0,
    popularity: "97",
    imageUrl: iphone16ProImage,
  },
  {
    productId: 7,
    name: "iPhone 16 Pro Max",
    description: "The largest and most powerful iPhone.",
    price: 150000.0,
    popularity: "99",
    imageUrl: iphone16ProMaxImage,
  },
  {
    productId: 8,
    name: "iPhone SE (2024)",
    description: "Affordable iPhone with modern chip.",
    price: 55000.0,
    popularity: "80",
    imageUrl: iphoneSE2024Image,
  },

  // Google 2024
  {
    productId: 9,
    name: "Google Pixel 9",
    description: "Clean Android experience with AI features.",
    price: 90000.0,
    popularity: "88",
    imageUrl: pixel9Image,
  },
  {
    productId: 10,
    name: "Google Pixel 9 Pro",
    description: "Pro-level cameras and performance.",
    price: 115000.0,
    popularity: "93",
    imageUrl: pixel9ProImage,
  },

  // Samsung 2025
  {
    productId: 11,
    name: "Samsung Galaxy S25",
    description: "Next-gen flagship with AI integration.",
    price: 98000.0,
    popularity: "94",
    imageUrl: samsungS25Image,
  },
  {
    productId: 12,
    name: "Samsung Galaxy S25 Ultra",
    description: "Unmatched zoom and productivity features.",
    price: 145000.0,
    popularity: "97",
    imageUrl: samsungS25UltraImage,
  },
  {
    productId: 13,
    name: "Samsung Galaxy Z Flip7",
    description: "Stylish foldable with improved durability.",
    price: 110000.0,
    popularity: "87",
    imageUrl: samsungZFlip7Image,
  },
  {
    productId: 14,
    name: "Samsung Galaxy Z Fold7",
    description: "Massive foldable with multitasking power.",
    price: 155000.0,
    popularity: "91",
    imageUrl: samsungZFold7Image,
  },

  // Apple 2025
  {
    productId: 15,
    name: "iPhone 17",
    description: "Apple’s 2025 flagship with A19 chip.",
    price: 115000.0,
    popularity: "96",
    imageUrl: iphone17Image,
  },
  {
    productId: 16,
    name: "iPhone 17 Pro",
    description: "Pro-level performance and cameras.",
    price: 140000.0,
    popularity: "98",
    imageUrl: iphone17ProImage,
  },
  {
    productId: 17,
    name: "iPhone 17 Pro Max",
    description: "Apple’s biggest and most advanced phone.",
    price: 155000.0,
    popularity: "99",
    imageUrl: iphone17ProMaxImage,
  },
  {
    productId: 18,
    name: "iPhone SE (2025)",
    description: "Budget-friendly iPhone with latest chip.",
    price: 60000.0,
    popularity: "82",
    imageUrl: iphoneSE2025Image,
  },

  // Google 2025
  {
    productId: 19,
    name: "Google Pixel 10",
    description: "AI-powered Android flagship.",
    price: 95000.0,
    popularity: "90",
    imageUrl: pixel10Image,
  },
  {
    productId: 20,
    name: "Google Pixel 10 Pro",
    description: "Pro cameras and performance.",
    price: 120000.0,
    popularity: "94",
    imageUrl: pixel10ProImage,
  },

  // Samsung 2026
  {
    productId: 21,
    name: "Samsung Galaxy S26",
    description: "Flagship with futuristic AI features.",
    price: 100000.0,
    popularity: "95",
    imageUrl: samsungS26Image,
  },
  {
    productId: 22,
    name: "Samsung Galaxy S26 Ultra",
    description: "Ultimate productivity and camera system.",
    price: 150000.0,
    popularity: "98",
    imageUrl: samsungS26UltraImage,
  },
  {
    productId: 23,
    name: "Samsung Galaxy Z Flip8",
    description: "Compact foldable with premium design.",
    price: 115000.0,
    popularity: "88",
    imageUrl: samsungZFlip8Image,
  },
  {
    productId: 24,
    name: "Samsung Galaxy Z Fold8",
    description: "Massive foldable with AI multitasking.",
    price: 160000.0,
    popularity: "92",
    imageUrl: samsungZFold8Image,
  },

  // Apple 2026
  {
    productId: 25,
    name: "iPhone 18",
    description: "Apple’s 2026 flagship with A20 chip.",
    price: 120000.0,
    popularity: "97",
    imageUrl: iphone18Image,
  },
  {
    productId: 26,
    name: "iPhone 18 Pro",
    description: "ProMotion display and advanced cameras.",
    price: 145000.0,
    popularity: "98",
    imageUrl: iphone18ProImage,
  },
  {
    productId: 27,
    name: "iPhone 18 Pro Max",
    description: "Apple’s largest and most powerful phone.",
    price: 160000.0,
    popularity: "99",
    imageUrl: iphone18ProMaxImage,
  },
  {
    productId: 28,
    name: "iPhone SE (2026)",
    description: "Affordable iPhone with modern chip.",
    price: 65000.0,
    popularity: "83",
    imageUrl: iphoneSE2026Image,
  },

  // Google 2026
  {
    productId: 29,
    name: "Google Pixel 11",
    description: "AI-driven Android flagship.",
    price: 100000.0,
    popularity: "91",
    imageUrl: pixel11Image,
  },
  {
    productId: 30,
    name: "Google Pixel 11 Pro",
    description: "Pro-level cameras and performance.",
    price: 125000.0,
    popularity: "95",
    imageUrl: pixel11ProImage,
  },
];

export default products;
