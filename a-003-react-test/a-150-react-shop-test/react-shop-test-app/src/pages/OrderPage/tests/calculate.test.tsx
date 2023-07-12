import userEvent from "@testing-library/user-event";
import Type from "../Type";
import { act, render, screen, waitFor } from "@testing-library/react";
import { OrderContextProvider } from "../../../contexts/OrderContext";

test.only("update product's total when products change", async () => {
  // render(<Type orderType="products" />);
  render(<Type orderType="products" />, { wrapper: OrderContextProvider });

  const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
  // const productsTotal = screen.getByText("총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // 아메리카 여행 상품 한개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    userEvent.clear(americaInput);
    userEvent.type(americaInput, "1");
  });

  expect(productsTotal).toHaveTextContent("1000");
});
