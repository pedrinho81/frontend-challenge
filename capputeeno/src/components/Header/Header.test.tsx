import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";
import { CartContextProvider } from "@/contexts/CartContext";
import { SearchInput } from "@/components/Header/components/SearchInput";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Header", () => {
  it("should render correctly", () => {
    const { getByText, getByRole } = render(<Header />, {
      wrapper: CartContextProvider,
    });

    const Logo = getByText("Capputeeno");
    const inputElement = getByRole("textbox");
    const cartIcon = getByRole("button");

    expect(Logo).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
  });

  it("should redirect to / when click in the logo", () => {
    const { getByText } = render(<Header />, {
      wrapper: CartContextProvider,
    });
    const Logo = getByText("Capputeeno");
    expect(Logo).toBeInTheDocument();
    fireEvent.click(Logo);
    expect(global.window.location.pathname).toEqual("/");
  });

  it("input should be filled with correctly props passed", async () => {
    const handleChange = jest.fn();
    let initialValue = "";
    render(
      <SearchInput
        handleChangeSearch={handleChange}
        placeholder="Some text"
        value={initialValue}
      />
    );

    const inputElement = screen.getByPlaceholderText("Some text");

    expect(inputElement).toBeInTheDocument();

  });

  it("should redirect to /cart page when click", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));
    const { getByRole } = render(<Header />, {
      wrapper: CartContextProvider,
    });
    const cartLink = getByRole("button");
    expect(cartLink).toBeInTheDocument();
    fireEvent.click(cartLink);
    expect(push).toHaveBeenCalled();
    expect(push).toHaveBeenCalledWith("/cart");
  });
});
