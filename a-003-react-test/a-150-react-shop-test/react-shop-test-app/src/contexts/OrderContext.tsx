import { createContext } from "react";

type IState = readonly [
  {
    totals: {
      products: number;
      options: number;
      total: number;
    };
    products: Map<string, number>;
    options: Map<string, number>;
  },
  (
    itemName: string,
    newItemCount: string,
    orderType: "products" | "options"
  ) => void,
  () => void
];

interface IOrderCounts {
  products: Map<string, number>;
  options: Map<string, number>;
}

export const OrderContext = createContext<IState | null>(null);
