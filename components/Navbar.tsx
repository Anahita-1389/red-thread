"use client";
import Link from "next/link";
import { useCart } from "@/lib/store";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
      <Link href="/" className="text-3xl font-bold">
        <span className="text-red-600">نخ</span> سرخ
      </Link>

      <div className="flex gap-8 text-lg items-center">
        <Link href="/" className="hover:text-red-500 transition-colors">
          خانه
        </Link>
        <Link href="/shop" className="hover:text-red-500 transition-colors">
          فروشگاه
        </Link>
        <Link href="/about" className="hover:text-red-500 transition-colors">
          درباره ما
        </Link>

        <Link
          href="/cart"
          className="hover:text-red-500 transition-colors relative"
        >
          🛒 سبد خرید
          {totalItems() > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
              {totalItems()}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}