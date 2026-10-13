"use client";
import Link from "next/link";
import { useCart } from "@/lib/store";
import Navbar from "../../../components/Navbar";

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart();

  // فعلاً نمونه، بعداً از دیتابیس میاد
  const product = {
    id: params.id,
    name: "هودی قرمز کلاسیک",
    price: 100,
    category: "هودی",
    description: "هودی قرمز کلاسیک نخ سرخ، ساخته شده با پارچه نرم و راحت. مناسب برای استایل روزمره و گیمینگ.",
    features: ["پارچه نرم و باکیفیت", "طراحی اختصاصی نخ سرخ", "مناسب برای همه آواتارها", "قابل استفاده در همه حالت‌ها"],
    badge: "پرفروش",
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-8 py-6 text-sm text-gray-500 max-w-7xl mx-auto">
        <Link href="/" className="hover:text-red-500">خانه</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-red-500">فروشگاه</Link>
        <span className="mx-2">/</span>
        <span className="text-white">{product.name}</span>
      </div>

      {/* Product Detail */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Image / 3D Placeholder */}
          <div className="bg-gradient-to-br from-red-900/30 to-black border border-white/10 rounded-3xl h-[500px] flex items-center justify-center relative">
            <span className="text-[200px]">👕</span>
            {product.badge && (
              <span className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full">
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur px-4 py-2 rounded-full text-sm text-gray-300">
              🎬 نمایش سه‌بعدی به زودی
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            
            <span className="text-red-500 text-sm mb-2">
              {product.category}
            </span>

            <h1 className="text-5xl font-bold mb-6">
              {product.name}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">ویژگی‌ها:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <span className="text-red-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Price & Buy */}
            <div className="flex items-center gap-6 mb-8">
              <span className="text-5xl font-bold text-red-500">
                {product.price}
              </span>
              <span className="text-2xl text-gray-400">Robux</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => addItem({
                  id: Number(params.id),
                  name: product.name,
                  price: product.price
                })}
                className="flex-1 bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-full font-bold text-lg hover:scale-105"
              >
                🛒 افزودن به سبد
              </button>
              <button className="border border-white/30 hover:border-red-500 hover:text-red-500 transition-all px-8 py-4 rounded-full font-bold">
                ❤️
              </button>
            </div>

          </div>
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