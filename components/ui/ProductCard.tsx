"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

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
  const {
    items,
    mode,
    updateSinglePack,
    updateCustomPieces,
  } = useCart();

  const item = items.find((i) => i.name === name);

  const quantity =
    mode === "single"
      ? item?.packs || 0
      : item?.pieces || 0;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="overflow-hidden rounded-[30px] bg-white shadow-lg"
    >
      {/* IMAGE */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#556B2F]">
            {name}
          </h3>

          <span className="rounded-full bg-[#FFF4E5] px-4 py-1 text-sm font-semibold text-[#D97706]">
            VIVA Drink
          </span>
        </div>

        <p className="mb-6 text-gray-500">
          Premium refreshing beverage experience.
        </p>

        {/* CUSTOM MODE */}
        {mode === "custom" && (
          <div className="mb-6">
            <label
              htmlFor={`custom-${name}`}
              className="mb-2 block text-sm font-medium text-gray-600"
            >
              Pieces in Pack
            </label>

            <select
              id={`custom-${name}`}
              value={quantity}
              onChange={(e) =>
                updateCustomPieces(
                  name,
                  price,
                  Number(e.target.value)
                )
              }
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#556B2F]"
            >
              <option value={0}>Select pieces</option>

              {Array.from({ length: 27 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* SINGLE MODE */}
        {mode === "single" && (
          <div className="mb-6">
            <label
              htmlFor={`single-${name}`}
              className="mb-2 block text-sm font-medium text-gray-600"
            >
              Number of Packs
            </label>

            <input
              id={`single-${name}`}
              type="number"
              min="0"
              value={quantity}
              onChange={(e) =>
                updateSinglePack(
                  name,
                  price,
                  Number(e.target.value)
                )
              }
              placeholder="Enter number of packs"
              className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-[#556B2F]"
            />

            <p className="mt-2 text-sm text-gray-500">
              1 pack = 27 pieces of {name}
            </p>
          </div>
        )}

        {/* PRICE */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400">
              {mode === "single" ? "Per Pack" : "Per Item"}
            </p>

            <p className="text-2xl font-black text-[#D97706]">
              GH₵{price}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-400">
              Selected
            </p>

            <p className="text-xl font-bold text-[#556B2F]">
              {quantity}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}