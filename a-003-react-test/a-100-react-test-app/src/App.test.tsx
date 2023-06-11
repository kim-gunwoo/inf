import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const linkElement2 = screen.queryByText(/learn react/i);

  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();

  // Linkt 적용 테스트
  // const lintTest = screen.getByRole("button", {
  //   name: "lintTest",
  // });

  // expect(lintTest.textContent).toBe("lintTest");
});
