import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import { Product } from "@/@types/product";

export function useCart(product: Product) {
  const { cartItems, updateLocalStorage } = useContext(CartContext);

  const handleAddToCart = (id: string) => {
    const hasProductsInCart = cartItems.length > 0;
    if (hasProductsInCart) {
      let cartItemsArray = [...cartItems];
      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === id
      );

      if (existingProductIndex != -1) {
        cartItemsArray[existingProductIndex].quantity += 1;
      } else {
        cartItemsArray.push({ ...product, quantity: 1 });
      }
      updateLocalStorage(cartItemsArray);
    } else {
      updateLocalStorage([
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };
  return { cartItems, handleAddToCart };
}
