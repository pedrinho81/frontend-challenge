import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import { Product } from "@/@types/product";
import { ProductInCart } from "@/types/product";

export function useCart() {
  const { cartItems, updateLocalStorage } = useContext(CartContext);

  const handleAddToCart = (product: Product) => {
    const hasProductsInCart = cartItems.length > 0;
    if (hasProductsInCart) {
      let cartItemsArray = [...cartItems];
      let existingProductIndex = cartItemsArray.findIndex(
        (item: { id: string }) => item.id === product.id
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
  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = cartItems.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };
  const calculateTotal = (cartItems: ProductInCart[]): number => {
    return cartItems.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0
    );
  };

  const handleDeleteItem = (id: string) => {
    const newValue = cartItems.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };
  return { cartItems, handleAddToCart, handleUpdateQuantity, calculateTotal, handleDeleteItem };
}
