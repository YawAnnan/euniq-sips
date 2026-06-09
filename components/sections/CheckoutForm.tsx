"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutForm() {
  const {
    items,
    mode,
    getSingleTotal,
    getCustomTotal,
    getDeliveryFee,
    getGrandTotal,
    clearCart,
  } = useCart();

  const [isAccra, setIsAccra] = useState(true);

  const total =
    mode === "single"
      ? getSingleTotal()
      : getCustomTotal();

  const delivery = getDeliveryFee(isAccra);
  const grandTotal = getGrandTotal(isAccra);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-[#556B2F]">
          Order Summary
        </h2>

        <p className="text-gray-600">
          Review your order before confirming
        </p>
      </div>

      {/* ITEMS LIST */}
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <p className="font-semibold">{item.name}</p>

              <p className="text-sm text-gray-500">
                {mode === "single"
                  ? `${item.packs} packs`
                  : `${item.pieces} pieces`}
              </p>
            </div>

            <p className="font-bold text-[#D97706]">
              GH₵{item.price}
            </p>
          </div>
        ))}
      </div>

      {/* DELIVERY SELECT */}
      <div className="rounded-xl border p-4">
        <p className="mb-2 font-semibold">
          Delivery Location
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setIsAccra(true)}
            className={`flex-1 rounded-lg p-3 ${
              isAccra
                ? "bg-[#556B2F] text-white"
                : "bg-gray-100"
            }`}
          >
            Accra
          </button>

          <button
            onClick={() => setIsAccra(false)}
            className={`flex-1 rounded-lg p-3 ${
              !isAccra
                ? "bg-[#556B2F] text-white"
                : "bg-gray-100"
            }`}
          >
            Outside Accra
          </button>
        </div>
      </div>

      {/* TOTAL BREAKDOWN */}
      <div className="space-y-2 rounded-xl border p-4">
        <div className="flex justify-between">
          <span>Items Total</span>
          <span>GH₵{total}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>
          <span>GH₵{delivery}</span>
        </div>

        <div className="flex justify-between border-t pt-2 text-lg font-bold">
          <span>Total</span>
          <span className="text-[#D97706]">
            GH₵{grandTotal}
          </span>
        </div>
      </div>

      {/* PLACE ORDER */}
      <button
        onClick={() => {
          alert("Order placed successfully!");
          clearCart();
        }}
        className="w-full rounded-xl bg-[#556B2F] py-4 font-bold text-white hover:scale-[1.02] transition"
      >
        Place Order
      </button>
    </div>
  );
}