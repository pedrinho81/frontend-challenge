import React, { createContext, useState, useEffect } from "react";
import { ProductInCart } from "@/types/product";

interface CartContextPros {
    cartItems: ProductInCart[] | [],
    updateLocalStorage: (newValue: ProductInCart[] | []) => void,
}
export const CartContext = createContext({} as CartContextPros);

interface ProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: ProviderProps) {
  const key = '@capputeeno: cart-items'
  const [cartItems, setCartItems] = useState<ProductInCart[] | []>([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    let value = localStorage.getItem(key);
    if (value) setCartItems(JSON.parse(value));
  }, []);

  const updateLocalStorage = (newValue:ProductInCart[] | []) => {

    setCartItems(newValue);

    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return(
    <CartContext.Provider
      value={{
        cartItems,
        updateLocalStorage
      }}
    >
      {children}
    </CartContext.Provider>
  )
};
