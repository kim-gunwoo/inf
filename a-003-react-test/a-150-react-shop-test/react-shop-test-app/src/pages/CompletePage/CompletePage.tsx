import axios from "axios";
import { useEffect, useState, SetStateAction, useCallback } from "react";
import ErrorBanner from "../../components/ErrorBanner";
import { IOrderTotals, useOrderContext } from "../../contexts/OrderContext";

interface IProps {
  setStep: React.Dispatch<SetStateAction<number>>;
}

function CompletePage({ setStep }: IProps) {
  const [OrderDatas, , resetOrderDatas] = useOrderContext();
  const [orderHistory, setOrderHistory] = useState<
    { orderNumber: number; price: number }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const orderCompleted = useCallback(async (OrderDatas: IOrderTotals) => {
    try {
      let response = await axios.post(
        "http://localhost:5001/order",
        OrderDatas
      );
      setOrderHistory(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    orderCompleted(OrderDatas);
  }, [OrderDatas, orderCompleted]);

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  const handleClick = () => {
    resetOrderDatas();
    setStep(0);
  };

  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>
        <table style={{ margin: "auto" }}>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <th>주문 가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <button onClick={handleClick}>첫페이지로</button>
      </div>
    );
  }
}

export default CompletePage;
