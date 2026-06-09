"use client";

import { createContext, useContext, useState } from "react";

export type CartItem = {
  name: string;
  price: number;
  packs: number;
  pieces: number;
};

type Mode = "single" | "custom" | null;

type CartContextType = {
  items: CartItem[];
  mode: Mode;
  setMode: (mode: Mode) => void;

  updateSinglePack: (
    name: string,
    price: number,
    packs: number
  ) => void;

  updateCustomPieces: (
    name: string,
    price: number,
    pieces: number
  ) => void;

  removeItem: (name: string) => void;
  clearCart: () => void;

  totalPieces: number;
  totalItems: number;

  getSingleTotal: () => number;
  getCustomTotal: () => number;
  getDeliveryFee: (isAccra: boolean) => number;
  getGrandTotal: (isAccra: boolean) => number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mode, setMode] = useState<Mode>(null);

  // 🔵 TOTAL PIECES (CUSTOM MODE)
  const totalPieces = items.reduce(
    (sum, item) => sum + item.pieces,
    0
  );

  // 🟢 SINGLE MODE TOTAL
  const getSingleTotal = () => {
    return items.reduce((sum, item) => {
      return sum + item.packs * 27 * item.price;
    }, 0);
  };


  // 🟠 CUSTOM MODE TOTAL
  const getCustomTotal = () => {
    return items.reduce((sum, item) => {
      return sum + item.pieces * item.price;
    }, 0);
  };

  // 🚚 DELIVERY
  const getDeliveryFee = (isAccra: boolean) => {
    return isAccra ? 40 : 50;
  };

  // 💰 GRAND TOTAL
  const getGrandTotal = (isAccra: boolean) => {
    if (mode === "single") {
      return getSingleTotal() + getDeliveryFee(isAccra);
    }

    if (mode === "custom") {
      return getCustomTotal() + getDeliveryFee(isAccra);
    }

    return 0;
  };

  // 🟢 SINGLE MODE UPDATE
  const updateSinglePack = (
    name: string,
    price: number,
    packs: number
  ) => {
    setItems((prev) => {
      if (packs === 0) {
        return prev.filter((i) => i.name !== name);
      }

      return [
        {
          name,
          price,
          packs,
          pieces: 0,
        },
      ];
    });
  };

  // 🟠 CUSTOM MODE UPDATE
  const updateCustomPieces = (
    name: string,
    price: number,
    pieces: number
  ) => {
    setItems((prev) => {
      const otherPieces = prev
        .filter((i) => i.name !== name)
        .reduce((sum, i) => sum + i.pieces, 0);

      if (otherPieces + pieces > 27) {
        return prev;
      }

      if (pieces === 0) {
        return prev.filter((i) => i.name !== name);
      }

      const exists = prev.find((i) => i.name === name);

      if (exists) {
        return prev.map((i) =>
          i.name === name ? { ...i, pieces } : i
        );
      }

      return [
        ...prev,
        {
          name,
          price,
          packs: 0,
          pieces,
        },
      ];
    });
  };

  const removeItem = (name: string) => {
    setItems((prev) =>
      prev.filter((i) => i.name !== name)
    );
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        mode,
        setMode,
        updateSinglePack,
        updateCustomPieces,
        removeItem,
        clearCart,
        totalPieces,
        getSingleTotal,
        getCustomTotal,
        getDeliveryFee,
        getGrandTotal,
        totalItems: items.reduce(
          (sum, item) => sum + item.packs * 27 + item.pieces,
          0
        ),
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  return context;
}