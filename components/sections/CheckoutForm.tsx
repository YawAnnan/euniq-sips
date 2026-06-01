"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutForm() {
  const { items } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState<
    "Accra" | "Outside"
  >("Accra");

  const deliveryFee = location === "Accra" ? 40 : 50;

  const subtotal = useMemo(() => {
    return items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
  }, [items]);

  const total = subtotal + deliveryFee;

  const whatsappMessage = `
Hello Euniq Sips,

I would like to place an order.

Name: ${name}
Phone: ${phone}
Location: ${location}
Address: ${address}

Order Details:
${items
  .map(
    (item) =>
      `- ${item.name} x${item.quantity}`
  )
  .join("\n")}

Subtotal: GH₵${subtotal}
Delivery Fee: GH₵${deliveryFee}

Total: GH₵${total}
`;

  const whatsappLink = `https://wa.me/233242743921?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      
      {/* FORM */}
      <div>
        <h2 className="mb-6 text-3xl font-black text-[#556B2F]">
          Checkout Details
        </h2>

        <div className="space-y-5">
          
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-[#556B2F]"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-[#556B2F]"
          />

          <textarea
            placeholder="Delivery Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            className="h-32 w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-[#556B2F]"
          />

          <div>
            <label htmlFor="delivery-location" className="mb-2 block font-medium text-gray-700">
              Delivery Location
            </label>

            <select
              id="delivery-location"
              value={location}
              onChange={(e) =>
                setLocation(
                  e.target.value as
                    | "Accra"
                    | "Outside"
                )
              }
              className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-[#556B2F]"
            >
              <option value="Accra">
                Accra
              </option>

              <option value="Outside">
                Outside Accra
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="rounded-[30px] bg-[#F8F6F1] p-8">
        
        <h2 className="mb-6 text-3xl font-black text-[#556B2F]">
          Order Summary
        </h2>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between"
            >
              <span>
                {item.name} x{item.quantity}
              </span>

              <span className="font-bold">
                GH₵
                {item.quantity * item.price}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-6">
          
          <div className="mb-3 flex justify-between">
            <span>Subtotal</span>
            <span>GH₵{subtotal}</span>
          </div>

          <div className="mb-3 flex justify-between">
            <span>Delivery Fee</span>
            <span>GH₵{deliveryFee}</span>
          </div>

          <div className="mt-5 flex justify-between text-2xl font-black text-[#D97706]">
            <span>Total</span>
            <span>GH₵{total}</span>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            className="mt-8 block rounded-2xl bg-[#25D366] py-4 text-center text-lg font-bold text-white transition hover:scale-[1.02]"
          >
            Continue via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}