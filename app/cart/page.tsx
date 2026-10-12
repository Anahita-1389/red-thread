"use client";
import Link from "next/link";
import { useCart } from "../../lib/store";
import Navbar from "../../components/Navbar";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <section className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold mb-4">
          سبد <span className="text-red-600">خرید</span>
        </h1>
        <p className="text-gray-400">
          {items.length === 0 ? "سبدت خالیه!" : `${items.length} محصول توی سبدت داری`}
        </p>
      </section>

      {/* Cart Content */}
      <section className="px-8 pb-20 max-w-5xl mx-auto">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🛒</div>
            <p className="text-2xl text-gray-400 mb-8">سبد خریدت خالیه</p>
            <Link
              href="/shop"
              className="bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-full font-bold text-lg inline-block"
            >
              برو به فروشگاه
            </Link>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-4 mb-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-red-900/30 to-black rounded-xl flex items-center justify-center text-5xl">
                    👕
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-red-500 font-bold">
                      {item.price} Robux
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full transition-colors font-bold"
                    >
                      −
                    </button>
                    <span className="w-12 text-center text-xl font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full transition-colors font-bold"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors text-2xl"
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl">جمع کل:</span>
                <span className="text-4xl font-bold text-red-500">
                  {totalPrice()} <span className="text-lg">Robux</span>
                </span>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-full font-bold text-lg hover:scale-105">
                  💳 ادامه و پرداخت
                </button>
                <button
                  onClick={clearCart}
                  className="border border-white/30 hover:border-red-500 hover:text-red-500 transition-all px-8 py-4 rounded-full font-bold"
                >
                  پاک کردن
                </button>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-white/10 text-gray-500">
        <p>ساخته شده با ❤️ توسط نخ سرخ</p>
        <p className="text-sm mt-2">© 2026 Red Thread</p>
      </footer>

    </main>
  );
}