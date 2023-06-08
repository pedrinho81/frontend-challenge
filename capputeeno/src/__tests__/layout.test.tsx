import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../components/header";
import { CartContext } from "@/contexts/CartContext";
import { ProductInCart } from "@/types/product";
import {SearchInput  } from "@/components/header/components/SearchInput";

function renderHeader(cartInitial: ProductInCart[] | []) {
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
  it("should render the logo", () => {
    const { getByText } = renderHeader([]);
    const Logo = getByText("Capputeeno");
    expect(Logo).toBeInTheDocument();
  });

  it("should render the search input", () => {
    const { getByRole } = renderHeader([]);
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

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

  it("should display count cart when has value", async () => {
    const { getByTestId } = renderHeader([
      {
        id: "1",
        image_url: "",
        name: "Product one",
        price_in_cents: 10,
        quantity: 1,
      },
    ]);
    const countCart = getByTestId("cart-count");
    expect(countCart).toBeInTheDocument();
  });

  it("should not display count cart when hasn't value", async () => {
    const { queryByTestId } = renderHeader([]);
    const countCart = queryByTestId("cart-count");
    expect(countCart).not.toBeInTheDocument();
  });
});
