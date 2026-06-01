"use client";

import { createContext, useContext, useState } from "react";

type CartItem = {
  name: string;
  quantity: number;
  price: number;
};

type Mode = "single" | "custom" | null;

type CartContextType = {
  items: CartItem[];
  mode: Mode;
  setMode: (mode: Mode) => void;

  updateItemQuantity: (
    name: string,
    price: number,
    quantity: number
  ) => void;

  removeItem: (name: string) => void;

  totalItems: number;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mode, setMode] = useState<Mode>(null);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  // 🔥 MAIN LOGIC ENGINE
  const updateItemQuantity = (
    name: string,
    price: number,
    quantity: number
  ) => {
    setItems((prev) => {
      let updated = [...prev];

      const existingIndex = updated.findIndex((i) => i.name === name);

      // If quantity is 0 → remove item
      if (quantity === 0) {
        return updated.filter((i) => i.name !== name);
      }

      // 🟢 SINGLE MODE LOGIC
      if (mode === "single") {
        // Only ONE product allowed
        updated = [
          {
            name,
            price,
            quantity,
          },
        ];
        return updated;
      }

      // 🟠 CUSTOM MODE LOGIC (27 LIMIT)
      const otherItemsTotal = updated
        .filter((i) => i.name !== name)
        .reduce((sum, i) => sum + i.quantity, 0);

      if (otherItemsTotal + quantity > 27) {
        return prev; // block update
      }

      if (existingIndex >= 0) {
        updated[existingIndex].quantity = quantity;
      } else {
        updated.push({ name, price, quantity });
      }

      return updated;
    });
  };

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        mode,
        setMode,
        updateItemQuantity,
        removeItem,
        totalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used inside CartProvider");
  return context;
}