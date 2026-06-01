"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-2xl font-black text-[#556B2F]">
          Euniq Sips
        </div>

        {/* Nav Links */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-gray-700 hover:text-[#556B2F]">
            Home
          </Link>

          <Link
            href="/track-order"
            className="text-gray-700 hover:text-[#556B2F]"
          >
            Track Order
          </Link>
        </nav>

        {/* CTA Button */}
        <Link
          href="/order"
          className="rounded-full bg-[#D97706] px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Order Now
        </Link>
      </div>
    </header>
  );
}