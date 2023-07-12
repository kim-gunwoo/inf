import { RenderOptions, render } from "@testing-library/react";
import { OrderContextProvider } from "./contexts/OrderContext";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: OrderContextProvider, ...options });

export * from "@testing-library/react";

export { customRender as render };
