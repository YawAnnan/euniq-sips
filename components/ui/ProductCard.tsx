"use client";

import { motion } from "framer-motion";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-[30px] bg-white shadow-lg"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#556B2F]">
            {name}
          </h3>

          <span className="rounded-full bg-[#FFF4E5] px-4 py-1 text-sm font-semibold text-[#D97706]">
            27 Pack
          </span>
        </div>

        <p className="mb-6 text-gray-500">
          Premium refreshing beverage experience.
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">Starting from</p>

            <p className="text-2xl font-black text-[#D97706]">
              GH₵{price}
            </p>
          </div>

          <button className="rounded-full bg-[#556B2F] px-5 py-3 font-semibold text-white transition hover:scale-105">
            Add Pack
          </button>
        </div>
      </div>
    </motion.div>
  );
}