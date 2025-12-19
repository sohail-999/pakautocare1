"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { useTheme } from "@/lib/contexts"
import { ThemeToggle } from "./theme-toggle"
import { useCart } from "@/lib/contexts"

export function NavbarStatic() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const { isDark } = useTheme()
  const { cart } = useCart()

  useEffect(() => {
    const supabase = createClient()
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()
  }, [])

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    setUser(null)
    window.location.href = "/"
  }

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"} border-b shadow-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🚗</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Pak Auto Care</span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
            <Link href="/products" className={`${isDark ? "hover:text-pink-400" : "hover:text-red-600"} transition`}>
              Products
            </Link>
            <Link href="/subscription" className={`${isDark ? "hover:text-pink-400" : "hover:text-red-600"} transition`}>
              Subscription
            </Link>
            <Link href="/about" className={`${isDark ? "hover:text-pink-400" : "hover:text-red-600"} transition`}>
              About
            </Link>
            <Link href="/contact" className={`${isDark ? "hover:text-pink-400" : "hover:text-red-600"} transition`}>
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/cart" className={`relative font-semibold transition ${isDark ? "text-pink-400 hover:text-pink-300" : "text-red-600 hover:text-red-700"}`}>
              🛒 Cart
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              )}
            </Link>
            {!loading && user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/protected/profile"
                  className={`px-3 py-1 text-sm border rounded transition ${isDark ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-50"}`}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className={`px-3 py-1 text-sm font-semibold transition ${isDark ? "text-pink-400 hover:text-pink-300" : "text-red-600 hover:text-red-700"}`}
                  title="Logout"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  href="/auth/login"
                  className={`px-3 py-1 text-sm border rounded transition ${isDark ? "border-gray-600 hover:bg-gray-700" : "border-gray-300 hover:bg-gray-50"}`}
                >
                  Login
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="px-3 py-1 text-sm bg-gradient-to-r from-red-500 to-pink-500 text-white rounded hover:opacity-90 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
