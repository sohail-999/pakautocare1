"use client"

import { useState } from "react"
import { useProduct, useCart, useTheme } from "@/lib/contexts"
import { X, ShoppingCart, Star } from "lucide-react"

export function ProductModal() {
  const { selectedProduct, setSelectedProduct } = useProduct()
  const { addToCart } = useCart()
  const { isDark } = useTheme()
  const [quantity, setQuantity] = useState(1)

  if (!selectedProduct) return null

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity)
    setQuantity(1)
    setSelectedProduct(null)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isDark ? "bg-black/50" : "bg-black/30"
      } backdrop-blur-sm animate-in fade-in duration-200`}
      onClick={() => setSelectedProduct(null)}
    >
      <div
        className={`${
          isDark
            ? "bg-gray-900 border border-gray-700"
            : "bg-white border border-gray-200"
        } rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-200`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`sticky top-0 flex items-center justify-between p-6 border-b ${
            isDark
              ? "bg-gray-800/50 border-gray-700"
              : "bg-gray-50/50 border-gray-200"
          }`}
        >
          <h2 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            Product Details
          </h2>
          <button
            onClick={() => setSelectedProduct(null)}
            className={`p-2 rounded-lg transition-colors ${
              isDark
                ? "hover:bg-gray-700 text-gray-400"
                : "hover:bg-gray-200 text-gray-600"
            }`}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div
              className={`flex items-center justify-center p-8 rounded-xl ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <span className="text-8xl animate-bounce">{selectedProduct.image}</span>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h3
                  className={`text-3xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {selectedProduct.name}
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {selectedProduct.category}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < Math.floor(selectedProduct.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : isDark
                            ? "text-gray-600"
                            : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-1`}>
                  Price
                </p>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                  Rs. {selectedProduct.price}
                </p>
              </div>

              {/* Description */}
              <div>
                <p
                  className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {selectedProduct.description}
                </p>
              </div>

              {/* Details */}
              <div>
                <h4
                  className={`font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Key Details
                </h4>
                <ul
                  className={`space-y-2 text-sm ${isDark ? "text-gray-400" : "text-gray-700"}`}
                >
                  {selectedProduct.details.map((detail, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-pink-500">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4
                  className={`font-semibold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  Benefits
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.benefits.map((benefit, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isDark
                          ? "bg-red-900/30 text-red-300"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity and Cart */}
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    Quantity:
                  </span>
                  <div
                    className={`flex items-center border rounded-lg ${
                      isDark ? "border-gray-700" : "border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className={`px-3 py-2 font-semibold transition-colors ${
                        isDark
                          ? "hover:bg-gray-700 text-gray-300"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      −
                    </button>
                    <span className={`px-4 py-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className={`px-3 py-2 font-semibold transition-colors ${
                        isDark
                          ? "hover:bg-gray-700 text-gray-300"
                          : "hover:bg-gray-100 text-gray-700"
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!selectedProduct.inStock}
                  className="w-full py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 animate-pulse hover:animate-none"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
