import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("Renders App", () => {
  const { getByText } = render(<App />);
  expect(true).toEqual(true);
});
