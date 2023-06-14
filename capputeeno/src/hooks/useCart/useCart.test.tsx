import { renderHook } from "@testing-library/react";
import { waitFor, act } from "@testing-library/react";
import { CartContextProvider } from "@/contexts/CartContext";
import { useCart } from "./useCart";
import { productsMock } from "@/mocks/product";

describe("useCart", () => {
  it("should get items from local storage", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    expect(result.current.cartItems).toEqual([]);
  });
  it("should add correctly product in cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    expect(result.current.cartItems).not.toHaveLength(1);

    act(() => {
      result.current.handleAddToCart(productsMock[0]);
    });
    await waitFor(() => {
      expect(result.current.cartItems[0].name).toEqual("My Product");
    });
    expect(result.current.cartItems).toHaveLength(1);
  });
  it("should update quantity when add the same product in cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    act(() => {
      result.current.handleAddToCart(productsMock[0]);
    });

    await waitFor(() => {
      expect(result.current.cartItems[0].quantity).toEqual(2);
    });
    expect(result.current.cartItems).toHaveLength(1);
  });

  it("should add another product when not include in the cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    act(() => {
      result.current.handleAddToCart(productsMock[1]);
    });

    await waitFor(() => {
      expect(result.current.cartItems[1].quantity).toEqual(1);
    });
    expect(result.current.cartItems).toHaveLength(2);
  });

  it("should update quantity in cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    const selectedQuantity = 4;
    act(() => {
      result.current.handleUpdateQuantity(
        productsMock[0].id,
        selectedQuantity
      );
    });

    await waitFor(() => {
      expect(result.current.cartItems[0].quantity).toEqual(selectedQuantity);
    });
  });
  it("should calculate total value in cart", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    act(() => {
      expect(result.current.calculateTotal(result.current.cartItems)).toBe(600);
    });
  });
  it("should delete an item", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });
    const productToRemove = result.current.cartItems[0];

    expect(result.current.cartItems).toContain(productToRemove);

    act(() => {
      result.current.handleDeleteItem(productToRemove.id);
    });
    expect(result.current.cartItems).not.toContain(productToRemove);
  });
  it("should re-calculate total value in cart after all operations", async () => {
    const { result } = renderHook(() => useCart(), {
      wrapper: CartContextProvider,
    });

    act(() => {
      expect(result.current.calculateTotal(result.current.cartItems)).toBe(200);
    });
  });
});
