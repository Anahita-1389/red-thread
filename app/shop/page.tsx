"use client"
import Navbar from "@/components/Navbar";
import Link from "next/link";

// لباس‌های نمونه (بعداً از دیتابیس میاد)
const products = [
  { id: 1, name: "هودی قرمز کلاسیک", price: 100, category: "هودی", badge: "پرفروش" },
  { id: 2, name: "کاپشن زمستانی", price: 150, category: "کاپشن", badge: "جدید" },
  { id: 3, name: "شلوار جین آبی", price: 120, category: "شلوار", badge: null },
  { id: 4, name: "تی‌شرت مشکی", price: 50, category: "تی‌شرت", badge: "رایگان" },
  { id: 5, name: "کت چرم قرمز", price: 300, category: "کت", badge: "ویژه" },
  { id: 6, name: "کلاه زمستانی", price: 80, category: "کلاه", badge: null },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <section className="text-center py-16 px-4">
        <h1 className="text-6xl font-bold mb-4">
          فروشگاه <span className="text-red-600">نخ سرخ</span>
        </h1>
        <p className="text-xl text-gray-400">
          {products.length} لباس اختصاصی برای تو
        </p>
      </section>

      {/* Products Grid */}
      <section className="px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all hover:scale-105 cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-red-900/30 to-black flex items-center justify-center relative">
                <span className="text-7xl">👕</span>
                {product.badge && (
                  <span className="absolute top-4 right-4 bg-red-600 text-white text-sm px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  دسته: {product.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-500">
                    {product.price} <span className="text-sm">Robux</span>
                  </span>
                  <Link
                    href={`/product/${product.id}`}
                    className="bg-red-600 hover:bg-red-700 transition-colors px-4 py-2 rounded-full text-sm font-bold"
                  >
                    مشاهده
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/10 text-gray-500">
        <p>ساخته شده با ❤️ توسط نخ سرخ</p>
        <p className="text-sm mt-2">© 2026 Red Thread</p>
      </footer>

    </main>
  );
}