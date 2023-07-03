import React, { useCallback } from "react";

interface IProps {
  name: string;
  imagePath: string;
}

function Products({ name, imagePath }: IProps) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {},
    []
  );

  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://localhost:5001/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: "10px" }}>
        <label htmlFor={name} style={{ textAlign: "right" }}>
          {name}
        </label>
        <input
          id={name}
          style={{ marginLeft: 7 }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Products;
