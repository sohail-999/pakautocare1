export interface Product {
  id: string
  name: string
  category: string
  price: number
  image: string
  description: string
  details: string[]
  benefits: string[]
  rating: number
  reviews: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Car Shampoo",
    category: "Cleaning",
    price: 1299,
    image: "🧴",
    description: "Professional-grade car shampoo designed for Pakistan's climate",
    details: [
      "pH-balanced formula safe for all paint types",
      "Removes dirt, salt, and UV damage",
      "Creates brilliant shine and hydrophobic effect",
      "500ml bottle - lasts up to 25 washes",
    ],
    benefits: [
      "Protects against harsh weather",
      "Eco-friendly biodegradable formula",
      "No water spots after drying",
    ],
    rating: 4.8,
    reviews: 245,
    inStock: true,
  },
  {
    id: "2",
    name: "Ceramic Wax Coating",
    category: "Protection",
    price: 2499,
    image: "🛡️",
    description: "Advanced ceramic coating for ultimate paint protection",
    details: [
      "Nano-ceramic technology",
      "Lasts up to 6 months with proper care",
      "Hydrophobic - water beads off paint",
      "100ml jar with application sponge",
    ],
    benefits: [
      "Extreme durability against elements",
      "Deep gloss enhancement",
      "UV and oxidation protection",
    ],
    rating: 4.9,
    reviews: 198,
    inStock: true,
  },
  {
    id: "3",
    name: "Microfiber Drying Towels",
    category: "Accessories",
    price: 899,
    image: "🧽",
    description: "Ultra-soft microfiber towels for safe drying",
    details: [
      "Set of 3 premium microfiber towels",
      "40x60cm size - perfect for most vehicles",
      "Zero lint and scratch-free",
      "Machine washable up to 500 times",
    ],
    benefits: [
      "Won't damage clear coat",
      "Super absorbent material",
      "Quick-drying properties",
    ],
    rating: 4.7,
    reviews: 312,
    inStock: true,
  },
  {
    id: "4",
    name: "Glass Cleaning Solution",
    category: "Cleaning",
    price: 699,
    image: "💎",
    description: "Streak-free windshield and window cleaner",
    details: [
      "Removes bugs, dirt, and mineral deposits",
      "Anti-fog formula for safety",
      "1000ml ready-to-use bottle",
      "Safe for tinted windows",
    ],
    benefits: [
      "Crystal clear visibility",
      "Water-repellent coating",
      "Long-lasting protection",
    ],
    rating: 4.6,
    reviews: 156,
    inStock: true,
  },
  {
    id: "5",
    name: "Tire Shine & Protectant",
    category: "Tires",
    price: 549,
    image: "⚫",
    description: "Restore black tires and provide UV protection",
    details: [
      "Non-greasy satin finish",
      "Extends tire lifespan",
      "400ml aerosol bottle",
      "UV ray blocking formula",
    ],
    benefits: [
      "Deep black restoration",
      "Prevents cracking and fading",
      "Anti-slip coating",
    ],
    rating: 4.5,
    reviews: 189,
    inStock: true,
  },
  {
    id: "6",
    name: "Leather Conditioner",
    category: "Interior",
    price: 1199,
    image: "✨",
    description: "Premium leather care and protection",
    details: [
      "Nourishes and protects leather",
      "Prevents cracking and fading",
      "250ml bottle",
      "Pleasant leather scent",
    ],
    benefits: [
      "Keeps leather supple",
      "Water and stain resistant",
      "Restores leather shine",
    ],
    rating: 4.8,
    reviews: 203,
    inStock: true,
  },
  {
    id: "7",
    name: "Clay Bar Kit",
    category: "Cleaning",
    price: 1899,
    image: "🎨",
    description: "Deep cleaning clay bar for paint decontamination",
    details: [
      "2 clay bars included",
      "Removes overspray and embedded contaminants",
      "Works with any car wash soap",
      "Reusable until discolored",
    ],
    benefits: [
      "Prepares paint for wax/sealant",
      "Restores paint smoothness",
      "Professional detailing results",
    ],
    rating: 4.7,
    reviews: 134,
    inStock: true,
  },
  {
    id: "8",
    name: "Car Air Freshener",
    category: "Interior",
    price: 399,
    image: "🌸",
    description: "Long-lasting premium air freshener",
    details: [
      "Natural ingredients",
      "Lasts up to 30 days",
      "Multiple scent options available",
      "Odor-eliminating formula",
    ],
    benefits: [
      "Fresh cabin aroma",
      "No chemical smell",
      "Eliminates odors naturally",
    ],
    rating: 4.4,
    reviews: 267,
    inStock: true,
  },
]
