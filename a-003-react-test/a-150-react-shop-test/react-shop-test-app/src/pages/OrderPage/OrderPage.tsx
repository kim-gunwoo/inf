import { SetStateAction } from "react";
import { useOrderContext } from "../../contexts/OrderContext";
import Type from "./Type";

interface IProps {
  setStep: React.Dispatch<SetStateAction<number>>;
}

export default function OrderPage({ setStep }: IProps) {
  const [orderDatas] = useOrderContext();

  return (
    <div>
      <h1>Travel Products</h1>
      <div>
        <Type orderType="products" />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div>
          <h2>Total Price: {orderDatas.totals.total}</h2>
          <br />
          <button onClick={() => setStep(1)}>주문하기</button>
        </div>
      </div>
    </div>
  );
}
