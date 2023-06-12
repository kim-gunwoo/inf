import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   const linkElement2 = screen.queryByText(/learn react/i);

//   expect(linkElement).toBeInTheDocument();
//   expect(linkElement2).toBeInTheDocument();

//   // Linkt 적용 테스트
//   // const lintTest = screen.getByRole("button", {
//   //   name: "lintTest",
//   // });

//   // expect(lintTest.textContent).toBe("lintTest");
// });

test("the counter starts at 0", () => {
  render(<App />);
  //screen object를 이용해서 원하는 엘레멘트에 접근(접근할 때  ID로)
  const counterElement = screen.getByTestId("counter");
  // id가 counter인 엘레멘트의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent("0");
});
