import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterPageContainer from "../components/organisms/filterPageContainer";
import { Provider } from "react-redux";
import store from "../store";

const server = setupServer(
  rest.get('https://634e71874af5fdff3a5c61ba.mockapi.io/api/v1/pets', (req, res, ctx) => {
    return res(ctx.json({
      id: 1,
      name: "Daamin",
      species: "Cat",
      available: false,
      birthYear: 2012,
      dateAdded: "19-06-2021",
      photoUrl: "https://i.imgur.com/wpfirW7l.jpg"
    }))
  }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test.skip('loads and displays results', async () => {
  render(
    <Provider store={store}>
      <FilterPageContainer />
    </Provider>)

  fireEvent.load(screen.getByText('Results'))
})
