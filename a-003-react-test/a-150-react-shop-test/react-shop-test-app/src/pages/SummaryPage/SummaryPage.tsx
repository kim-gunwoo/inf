import { SetStateAction, useState } from "react";

interface IProps {
  setStep: React.Dispatch<SetStateAction<number>>;
}

const SummaryPage = ({ setStep }: IProps) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setStep(2);
  };

  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: </h2>
      <ul></ul>

      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          id="confirm-checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨나요?</label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
