import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  totalTickets: number;
  totalPrice: number;
  addToCart: (price: number) => void;
  removeFromCart: () => void; // Changed the signature to not accept a price
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [lastPriceAdded, setLastPriceAdded] = useState<number | null>(null); // Track the last price added

  const addToCart = (price: number) => {
    setTotalTickets((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
    setLastPriceAdded(price); // Update the last price added
  };

  const removeFromCart = () => {
    if (totalTickets > 0 && lastPriceAdded !== null) {
      setTotalTickets((prev) => prev - 1);
      setTotalPrice((prev) => prev - lastPriceAdded);
      setLastPriceAdded(null); // Reset the last price added after removal
    }
  };

  return (
    <CartContext.Provider
      value={{ totalTickets, totalPrice, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
