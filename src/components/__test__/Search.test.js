import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Body Component with Search also add Search case for Rawat", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeSearch = screen.getAllByTestId("res-card");
  expect(cardBeforeSearch.length).toBe(14);

  const searchBtn= screen.getByRole('button',{name:"Search"});

  const searchInput = screen.getByTestId("search-input");

  fireEvent.change(searchInput,{target:{value:"Rawat"}});

  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("res-card");
  
  expect(cards.length).toBe(1);
});
