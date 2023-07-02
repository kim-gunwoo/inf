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
        `http://localhost:5000/${orderType}`
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

  return <div>{optionItems}</div>;
}
export default Type;
