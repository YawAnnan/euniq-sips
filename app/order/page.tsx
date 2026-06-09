"use client";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import CheckoutForm from "@/components/sections/CheckoutForm";

export default function OrderPage() {
  const [step, setStep] = useState<number>(1);

  const { mode, setMode, items } = useCart();

  const totalItems = items.reduce(
    (sum, item) => sum + item.packs + item.pieces,
    0
  );

  return (
    <main className="min-h-screen bg-[#F8F6F1] px-6 py-10">
      {/* HEADER */}
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <h1 className="text-4xl font-black text-[#556B2F]">
          Order VIVA Drinks
        </h1>
        <p className="mt-2 text-gray-600">
          Build your order in a few simple steps
        </p>
      </div>

      {/* STEP INDICATOR */}
      <div className="mx-auto mb-10 flex max-w-2xl justify-between text-sm font-semibold">
        <span className={step >= 1 ? "text-[#556B2F]" : "text-gray-400"}>
          1. Choose Mode
        </span>
        <span className={step >= 2 ? "text-[#556B2F]" : "text-gray-400"}>
          2. Select Items
        </span>
        <span className={step >= 3 ? "text-[#556B2F]" : "text-gray-400"}>
          3. Checkout
        </span>
      </div>

      <div className="mx-auto max-w-4xl rounded-[30px] bg-white p-8 shadow-lg">
        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-[#556B2F]">
              Choose your order type
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <button
                onClick={() => {
                  setMode("single");
                  setStep(2);
                }}
                className="rounded-2xl border p-6 text-left transition hover:border-[#556B2F]"
              >
                <h3 className="text-xl font-bold">
                  Single Flavour Order
                </h3>
                <p className="mt-2 text-gray-600">
                  Buy full packs of one flavour (1 pack = 27 drinks)
                </p>
              </button>

              <button
                onClick={() => {
                  setMode("custom");
                  setStep(2);
                }}
                className="rounded-2xl border p-6 text-left transition hover:border-[#D97706]"
              >
                <h3 className="text-xl font-bold">
                  Mix Your Pack
                </h3>
                <p className="mt-2 text-gray-600">
                  Combine multiple flavours into one 27-item pack
                </p>
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <div>
            {/* TITLE */}
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-black text-[#556B2F]">
                {mode === "single"
                  ? "Single Flavour Order"
                  : "Mix Your Pack"}
              </h2>

              <p className="mt-2 text-gray-600">
                {mode === "single"
                  ? "Select flavour and number of packs"
                  : "Select pieces from different flavours (Total must be 27)"}
              </p>

              {/* MODE BANNER (STEP 1 & 2 FIX) */}
              {mode && (
                <div
                  className={`mt-5 rounded-xl p-3 text-sm font-semibold ${
                    mode === "single"
                      ? "bg-green-50 text-green-700"
                      : "bg-orange-50 text-orange-700"
                  }`}
                >
                  {mode === "single"
                    ? "🟢 Single Mode Active — Buying full packs"
                    : "🟠 Custom Mode Active — Building 27-piece mix"}
                </div>
              )}

              {/* CUSTOM PROGRESS */}
              {mode === "custom" && (
                <div className="mt-4">
                  <p
                    className={`text-lg font-bold ${
                      totalItems === 27
                        ? "text-green-600"
                        : "text-[#D97706]"
                    }`}
                  >
                    {totalItems} / 27 items selected
                  </p>

                  {totalItems === 27 && (
                    <p className="mt-1 text-sm text-green-600">
                      Pack completed successfully ✓
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* PRODUCTS */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>

            {/* NAVIGATION */}
            <div className="mt-10 flex justify-between">
              <button
                onClick={() => setStep(1)}
                className="rounded-xl bg-gray-200 px-6 py-3"
              >
                Back
              </button>

              <button
                onClick={() => setStep(3)}
                disabled={mode === "custom" && totalItems !== 27}
                className={`rounded-xl px-6 py-3 text-white ${
                  mode === "custom" && totalItems !== 27
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-[#556B2F]"
                }`}
              >
                Continue to Checkout
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <div>
            <CheckoutForm />

            <div className="mt-10 flex justify-between">
              <button
                onClick={() => setStep(2)}
                className="rounded-xl bg-gray-200 px-6 py-3"
              >
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}