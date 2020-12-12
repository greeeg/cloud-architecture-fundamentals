import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import { server } from "../test-utils/server";

describe("Home", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("renders the title", async () => {
    render(<App />);
    expect(await screen.findByText("House of Coins")).toBeInTheDocument();
  });

  test("renders assets list", async () => {
    render(<App />);
    expect(await screen.findByText(/bitcoin/i)).toBeInTheDocument();
  });
});
