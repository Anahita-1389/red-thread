import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4">

        <div className="inline-block bg-red-600/10 border border-red-600/30 rounded-full px-4 py-2 mb-8">
          <span className="text-red-500 text-sm">🎉 کالکشن جدید به زودی</span>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold mb-6">
          <span className="text-red-600">نخ</span> سرخ
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12">
          لباس‌های اختصاصی Roblox — بافته از نخ سرخ داستان تو
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/shop"
            className="bg-red-600 hover:bg-red-700 transition-all px-8 py-4 rounded-full font-bold text-lg hover:scale-105"
          >
            مشاهده فروشگاه
          </Link>
          <Link
            href="/about"
            className="border border-white/30 hover:border-red-500 hover:text-red-500 transition-all px-8 py-4 rounded-full font-bold text-lg"
          >
            درباره ما
          </Link>
        </div>

      </section>

      <footer className="text-center py-8 border-t border-white/10 text-gray-500">
        <p>ساخته شده با ❤️ توسط نخ سرخ</p>
        <p className="text-sm mt-2">© 2026 Red Thread</p>
      </footer>

    </main>
  );
}