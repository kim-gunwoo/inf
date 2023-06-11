# test basic & initial

## test start

```sh
$ npm test
```

## react test

```ts
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

### 쿼리함수

> 참고 : https://testing-library.com/docs/queries/about/

```
쿼리 함수란 ?
쿼리는 페이지에서 요소를 찾기 위해 테스트 라이브러리가 제공하는 방법입니다.
여러 유형의 쿼리("get", "find", "query")가 있습니다.
이들 간의 차이점은 요소가 발견되지 않으면 쿼리에서 오류가 발생하는지 또는 Promise를 반환하고 다시 시도하는지 여부입니다.
선택하는 페이지 콘 텐츠에 따라 다른 쿼리가 다소 적절할 수 있습니다.
```

### eslint & prettier

testing-library render로 Dom 그리는 부분
jest-dom expect-matcher로 테스트

```
$ npm install eslint-plugin-testing-library eslint-plugin-jest-dom


```

```js
// App.test.tsx
const lintTest = screen.getByRole("button", {
  name: "lintTest",
});

expect(lintTest.textContent).toBe("lintTest");
```
