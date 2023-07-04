import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import ErrorBanner from "../../components/ErrorBanner";
import Options from "./Options";

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

  const optionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) => {
        //
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
      <p>상품 총 가격: 0</p>
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
