"use client"

import { Product } from "@/lib/products"
import { useProduct, useTheme } from "@/lib/contexts"
import { Star, ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { setSelectedProduct } = useProduct()
  const { isDark } = useTheme()

  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group ${
        isDark
          ? "bg-gray-800 border border-gray-700 hover:border-pink-500"
          : "bg-white border border-gray-200 hover:border-pink-500"
      } animate-in fade-in slide-in-from-bottom-4`}
      onClick={() => setSelectedProduct(product)}
    >
      {/* Image */}
      <div
        className={`h-48 flex items-center justify-center text-6xl transition-all duration-300 group-hover:scale-110 ${
          isDark ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        {product.image}
      </div>

      {/* Content */}
      <div className="p-4">
        <p
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? "text-pink-400" : "text-pink-600"
          } mb-2`}
        >
          {product.category}
        </p>

        <h3
          className={`text-lg font-bold mb-2 line-clamp-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : isDark
                    ? "text-gray-600"
                    : "text-gray-300"
              }`}
            />
          ))}
          <span className={`text-xs ml-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500 mb-3">
          Rs. {product.price}
        </p>

        {/* Button */}
        <button className={`w-full py-2 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
          isDark
            ? "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white"
            : "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
        }`}>
          <ShoppingCart size={18} />
          View Details
        </button>
      </div>
    </div>
  )
}
