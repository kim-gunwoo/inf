import React from "react";

interface IProps {
  name: string;
  updateItemCount: (name: string, value: number) => void;
}

function Options({ name, updateItemCount }: IProps) {
  return (
    <form>
      <input
        type="checkbox"
        id={`${name} option`}
        onChange={(event) => {
          updateItemCount(name, event.target.checked ? 1 : 0);
        }}
      />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  );
}

export default Options;
