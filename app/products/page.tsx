"use client"

import { NavbarStatic } from "@/components/navbar-static"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { useTheme } from "@/lib/contexts"
import { products } from "@/lib/products"

export default function ProductsPage() {
  const { isDark } = useTheme()

  const categories = ["All", ...new Set(products.map((p) => p.category))]
  const [selected, setSelected] = ["All"] as any

  const filteredProducts =
    selected === "All" ? products : products.filter((p) => p.category === selected)

  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gray-950"
          : "bg-gradient-to-b from-red-50 via-white to-rose-50"
      }`}
    >
      <NavbarStatic />

      {/* Header */}
      <section
        className={`py-16 px-4 ${isDark ? "bg-gray-900" : "bg-gradient-to-r from-red-500 to-pink-500"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-white"} animate-in fade-in slide-in-from-bottom-4`}
          >
            Premium Auto Care Products
          </h1>
          <p
            className={`text-lg ${isDark ? "text-gray-300" : "text-red-50"} animate-in fade-in slide-in-from-bottom-4 animation-delay-100`}
          >
            Professional-grade automotive care solutions for Pakistani roads
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              All Products
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selected === cat
                      ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                      : isDark
                        ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <div
                key={product.id}
                style={{
                  animation: `slideUp 0.5s ease-out ${i * 0.1}s both`,
                }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
