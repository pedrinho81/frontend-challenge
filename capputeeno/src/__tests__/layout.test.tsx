import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../components/header";
import { CartContext } from "@/contexts/CartContext";
import {SearchInput  } from "@/components/header/components/SearchInput";
import { useRouter } from "next/navigation";
import { productsInCartMock } from "../mock/cart-product";
function renderHeader(cartInitial = productsInCartMock) {
  let cartItems = cartInitial;
  const updateLocalStorage = () => {};
  return render(
    <CartContext.Provider value={{ cartItems, updateLocalStorage }}>
      <Header />
    </CartContext.Provider>
  );
}
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  it("shoul render correctly", () => {
    const { getByText, getByRole } = renderHeader();

    const Logo = getByText("Capputeeno");
    const inputElement = getByRole("textbox");
    const cartIcon = getByRole('button')

    expect(Logo).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
    expect(cartIcon).toBeInTheDocument()
  })

  it("should redirect to / when click in the logo", () => {
    const { getByText } = renderHeader();
    const Logo = getByText("Capputeeno");
    expect(Logo).toBeInTheDocument();
    fireEvent.click(Logo)
    expect(global.window.location.pathname).toEqual('/');
  })


  it("type and search into an input field", async () => {
    const typedValue = "Exemplo de valor";
    render(
      <SearchInput handleChange={() => ""} value={typedValue} />
    );
    
    const inputElement = screen.getByRole("textbox");
    
    userEvent.type(inputElement, typedValue);
    
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(typedValue);
  });

  it("should redirect to /cart page when click", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));
    const { getByTestId } = renderHeader();
    const cartLink = getByTestId("cart-count");
    expect(cartLink).toBeInTheDocument();
    fireEvent.click(cartLink);
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith("/cart");   
  });

});
