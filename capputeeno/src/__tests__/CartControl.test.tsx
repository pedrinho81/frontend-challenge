import { fireEvent, render, screen } from "@testing-library/react";
import { CartControl } from "../components/header/components/CartControl";
import { CartContext } from "@/contexts/CartContext";
import { useRouter } from "next/navigation";
import { productsInCartMock } from "../mock/cart-product";
function renderCartControl(
  cartInitial = productsInCartMock
) {
  let cartItems = cartInitial;
  const updateLocalStorage = () => {};
  return render(
    <CartContext.Provider value={{ cartItems, updateLocalStorage }}>
      <CartControl />
    </CartContext.Provider>
  );
}



jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));


describe("Cart Control", () => {
  it("should redirect to /cart page when click", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));
    const { getByTestId } = renderCartControl();
    const cartLink = getByTestId("cart-count");
    expect(cartLink).toBeInTheDocument();
    fireEvent.click(cartLink);
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith("/cart");   
  });
  it("should display count cart when has value", async () => {
    const { getByTestId } = renderCartControl();
    const countCart = getByTestId("cart-count");
    expect(countCart).toBeInTheDocument();
  });

  it("should not display count cart when hasn't value", async () => {
    const { queryByTestId } = renderCartControl([]);
    const countCart = queryByTestId("cart-count");
    expect(countCart).not.toBeInTheDocument();
  });
});
