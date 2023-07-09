import { createContext, useMemo, useState } from "react";

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
    newItemCount: number,
    orderType: "products" | "options"
  ) => void,
  () => void
];

interface IOrderCounts {
  products: Map<string, number>;
  options: Map<string, number>;
}

// export const OrderContext = createContext<IState | null>(null);
export const OrderContext = createContext<
  | readonly [
      IOrderCounts,
      (
        itemName: string,
        newItemCount: number,
        orderType: "products" | "options"
      ) => void
    ]
  | null
>(null);

interface IProps {
  children: React.ReactNode;
}

export function OrderContextProvider({ children }: IProps) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const value = useMemo(() => {
    function updateItemCount(
      itemName: string,
      newItemCount: number,
      orderType: "products" | "options"
    ) {
      const newOrderCounts = { ...orderCounts };

      const orderCountsMap = orderCounts[orderType];
      // orderCountsMap.set(itemName, parseInt(newItemCount));
      orderCountsMap.set(itemName, Number(newItemCount));

      setOrderCounts(newOrderCounts);
    }

    return [{ ...orderCounts }, updateItemCount] as const;
  }, [orderCounts]);

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}
