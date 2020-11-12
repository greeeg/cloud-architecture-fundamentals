import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import { server } from "../test-utils/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  expect(await screen.findByText(/bitcoin/i)).toBeInTheDocument();
});
