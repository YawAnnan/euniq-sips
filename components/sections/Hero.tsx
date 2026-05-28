"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#FDFBF7] px-6 pt-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#D97706]">
            Premium Beverage Experience
          </p>

          <h1 className="mb-6 text-5xl font-black leading-tight text-[#556B2F] md:text-7xl">
            Refreshment
            <br />
            Reimagined.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
            Euniq Sips delivers luxury beverage experiences across Ghana with
            customizable drink packs, premium flavors, and seamless delivery.
          </p>

          <div className="flex gap-4">
            <button className="rounded-full bg-[#556B2F] px-8 py-4 font-semibold text-white transition hover:scale-105">
              Shop Now
            </button>

            <button className="rounded-full border border-[#556B2F] px-8 py-4 font-semibold text-[#556B2F] transition hover:bg-[#556B2F] hover:text-white">
              Build Pack
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="h-125 rounded-[40px] bg-linear-to-br from-[#556B2F] to-[#D97706] shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
}