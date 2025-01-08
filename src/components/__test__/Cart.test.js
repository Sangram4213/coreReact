import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestrauruntMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from '../Cart'

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestrauruntMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );
  const foodItem = screen.getByText("Extra Choley");

  fireEvent.click(foodItem);

  const cartItem = screen.getByText("Cart- (1 items)");
   
  fireEvent.click(screen.getByText("Clear Cart"));

  expect(screen.getByText("Cart is empty. Add items to cart!")).toBeInTheDocument();

  expect(cartItem).toBeInTheDocument();
});
