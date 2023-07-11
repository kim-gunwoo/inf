import { createContext, useContext, useEffect, useMemo, useState } from "react";

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

interface IOrderTotals extends IOrderCounts {
  totals: { products: number; options: number; total: number };
}

// export const OrderContext = createContext<IState | null>(null);
export type TState = readonly [
  IOrderTotals,
  (
    itemName: string,
    newItemCount: number,
    orderType: "products" | "options"
  ) => void
];

export const OrderContext = createContext<TState | null>(null);

interface IProps {
  children: React.ReactNode;
}

const pricePerItem = {
  products: 1000,
  options: 500,
};

function calculateSubtotal(
  orderType: "products" | "options",
  orderCounts: IOrderCounts
) {
  let optionCount = 0;
  for (const count of orderCounts[orderType].values()) {
    optionCount += count;
  }
  return optionCount * pricePerItem[orderType];
}

export function OrderContextProvider({ children }: IProps) {
  const [orderCounts, setOrderCounts] = useState({
    products: new Map(),
    options: new Map(),
  });

  const [totals, setTotals] = useState({
    products: 0,
    options: 0,
    total: 0,
  });

  useEffect(() => {
    const productsTotal = calculateSubtotal("products", orderCounts);
    const optionsTotal = calculateSubtotal("options", orderCounts);
    const total = productsTotal + optionsTotal;
    setTotals({
      products: productsTotal,
      options: optionsTotal,
      total,
    });
  }, [orderCounts]);

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

    return [{ ...orderCounts, totals }, updateItemCount] as const;
  }, [orderCounts, totals]);

  return (
    <OrderContext.Provider value={value!}>{children}</OrderContext.Provider>
  );
}

export const useOrderContext = () => {
  const orderContext = useContext(OrderContext);

  if (!orderContext) {
    throw new Error(
      "orderContext has to be used within <OrderContext.Provider>"
    );
  }
  return orderContext;
};
