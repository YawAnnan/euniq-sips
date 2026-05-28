"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide text-[#556B2F]"
        >
          Euniq Sips
        </Link>

        <div className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-[#D97706]"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 hover:text-[#D97706]"
          >
            Products
          </Link>

          <Link
            href="/custom-pack"
            className="text-sm font-medium text-gray-700 hover:text-[#D97706]"
          >
            Custom Pack
          </Link>

          <Link
            href="/tracking"
            className="text-sm font-medium text-gray-700 hover:text-[#D97706]"
          >
            Track Order
          </Link>
        </div>

        <button className="rounded-full bg-[#D97706] px-5 py-2 text-sm font-semibold text-white transition hover:scale-105">
          Order Now
        </button>
      </div>
    </nav>
  );
}