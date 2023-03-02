# express server

## start project

### init

```sh
# project 생성
$ npm init
```

### 필요한 dependencies

```sh
$ npm install morgan nodemon express
$ npm install -D typescript ts-node @types/node @types/express @types/morgan
$ npm install pg typeorm reflect-meta
```

nodemon - 코드 변경시 서버 자동 재시작

ts-node - 컴파일하지 않고 바로 typescript 실행

morgan - log 관리 미들웨어

@types/express @types/node - type 정의 도움

pg - PostgreSQL 데이터베이스와 인터페이스하기 위한 NodeJS 모듈

typeorm - TypeScript 및 JavaScript(ES5, ES6, ES7, ES8)와 함께 사용할 수 있는 Node JS에서 실행되는 ORM

reflect-metadata - 메서드(defineMetadata)나 데코레이터(@Refelct.metadata)를 제공(데코레이터 지원)

### tsconfig.json 파일 생성

typescript로 짜여진 코드 js 컴파일하는 옵션을 설정 : https://www.typescriptlang.org/tsconfig

```sh
$ npx tsc --init
```

### package.json 파일 수정

```json
{
  ...
  "scripts": {
    ...
    "start": "ts-node ./src/server.ts",
    "dev": "nodemon --exec ts-node ./src/server.ts"
  }
  ...
}
```

### typeorm

```sh
$ npx typeorm init
```
