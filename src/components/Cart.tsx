import React, { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  totalTickets: number;
  totalPrice: number;
  addToCart: (price: number) => void;
  removeFromCart: (price: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (price: number) => {
    setTotalTickets((prev) => prev + 1);
    setTotalPrice((prev) => prev + price);
  };

  const removeFromCart = (price: number) => {
    setTotalTickets((prev) => prev - 1);
    setTotalPrice((prev) => prev - price);
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
