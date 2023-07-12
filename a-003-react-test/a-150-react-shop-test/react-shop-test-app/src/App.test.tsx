import React from "react";
// import { render, screen } from "@testing-library/react";
import App from "./App";
import { render, screen } from "./test-utils";

test("render App", async () => {
  render(<App />);

  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  expect(americaInput).toBeInTheDocument();
});

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();

//   const lintTest = screen.getByRole("button", { name: "lintTest" });
//   // expect(lintTest.textContent).toBe("lintTest");
//   expect(lintTest).toHaveTextContent("lintTest");
// });
