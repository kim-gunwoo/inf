# React Shop Test App

## npm

```
npm install eslint-plugin-testing-library eslint-plugin-jest-dom -D
```

## mock service worker

> https://mswjs.io/docs/getting-started/mocks/rest-api

```
npm install msw
```

## axios module error 처리 방법

```json
// package.json
{
    ...
    "jest": {
        "transformIgnorePatterns": [
        "/node_modules/(?!(axios)/)"
        ]
    },
    or
    "jest": { "moduleNameMapper": { "axios": "axios/dist/node/axios.cjs" } },
    ...
}
// 또는 아래와 같이 스크립트를 수정해준다.
{
    ...
    "scripts": {
        ...
        "test:origin": "react-scripts test",
        "test": "react-scripts test --transformIgnorePatterns \"node_modules/(?!axios)/\"",
        ...
    },
    ...
}
```
