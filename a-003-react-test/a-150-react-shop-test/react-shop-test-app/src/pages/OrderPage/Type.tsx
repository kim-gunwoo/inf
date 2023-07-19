import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";
import { useOrderContext } from "../../contexts/OrderContext";

interface IProps {
  orderType: "products" | "options";
}

interface IItem {
  name: string;
  imagePath: string;
}

function Type({ orderType }: IProps) {
  const [items, setItems] = useState<IItem[]>([]);
  const [error, setError] = useState(false);
  // const [orderDatas, updateItemCount] = useContext(OrderContext);
  const [orderDatas, updateItemCount] = useOrderContext();

  const loadItems = useCallback(async (orderType: "products" | "options") => {
    try {
      let response = await axios.get<IItem[]>(
        `http://localhost:5001/${orderType}`
      );
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    loadItems(orderType);
  }, [loadItems, orderType]);

  const ItemComponents = orderType === "products" ? Products : Options;
  const orderTypeKorean = orderType === "products" ? "상품" : "옵션";

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) => {
        updateItemCount(itemName, newItemCount, orderType);
      }}
    />
  ));

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>
        {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}
export default Type;
