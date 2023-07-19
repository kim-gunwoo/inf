import React from "react";

interface IProps {
  message?: string;
}

function ErrorBanner({ message }: IProps) {
  let errorMessage = message || "에러입니다.";

  return (
    <div
      data-testid="error-banner"
      style={{ backgroundColor: "red", color: "white" }}
    >
      {errorMessage}
    </div>
  );
}

export default ErrorBanner;
