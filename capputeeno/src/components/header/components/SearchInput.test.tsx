import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import { FilterContextProvider } from "@/contexts/FilterContext";
import { useFilter } from "@/hooks/useFilter";
import userEvent from "@testing-library/user-event";

describe("Search Input", () => {
  it("callback function is called on user interactions", async () => {
    const { result } = renderHook(() => useFilter(), {
      wrapper: FilterContextProvider,
    });
    const mockedOnChange = jest.fn();
    let value = "Initial";
    const { getByRole } = render(
      <SearchInput value={value} handleChangeSearch={mockedOnChange} />
    );
    const typedSearch = "Mug";
    const inputElement = getByRole("textbox");
    await waitFor(() => {
      act(() => {
        userEvent.clear(inputElement);
        result.current.setSearch(typedSearch);
      });
      expect(mockedOnChange).toHaveBeenCalled();
      expect(result.current.search).toBe(typedSearch);
    });
  });
});
