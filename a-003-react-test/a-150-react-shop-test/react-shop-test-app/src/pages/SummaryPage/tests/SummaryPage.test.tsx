import { render, screen } from "../../../test-utils";
import SummaryPage from "../SummaryPage";
// import { render, screen } from "@testing-library/react";

test("checkbox and button", () => {
  const setState = jest.fn();
  render(<SummaryPage setStep={setState} />);

  const checkbox = screen.getByRole("checkbox", {
    name: "주문하려는 것을 확인하셨나요?",
  });

  //   expect(checkbox.checked).toEqual(false);
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: "주문 확인" });

  //   expect(confirmButton.disabled).toBeTruthy();
  expect(confirmButton).toBeDisabled();
});
