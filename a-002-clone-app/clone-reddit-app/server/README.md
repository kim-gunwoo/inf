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

### entity 생성

- bcryptjs : 비밀번호를 암호화
- class-validator : 데코레이터를 이용해서 요청에서오는 오브젝트의 프로퍼티를 검증
- class-transformer : class-transformer를 사용하면 일반 개체를 클래스의 일부 인스턴스로 또는 그 반대로 변환할 수 있음

```sh
$ npm install bcryptjs class-validator class-transformer
$ npm install @types/bcryptjs -D
```

### cors 설정

```sh
$ npm install cors -—save
$ npm i --save-dev @types/cors
```

### jsonwebtoken dotenv cookie

> 옵션 설명 (참조: https://ko.javascript.info/cookie)

httpOnly - 이 옵션은 자바스크립트 같은 클라이언트 측 스크립트가 쿠키를 사용할 수 없게함.
document.cookie를 통해 쿠키를 볼 수도 없고 조작할 수도 없으ㅁ
secure - secure 는 HTTPS 연결에서만 쿠키를 사용할 수 있게 함
samesite - 요청이 외부 사이트에서 일어날 때, 브라우저가 쿠키를 보내지 못하도록 막아줌. XSRF 공격을 막는 데 유용
expires/max-age - 쿠키의 만료 시간을 세팅. 이 옵션이 없으면 브라우저가 닫힐 때 쿠키도 같이 삭제.

```sh
$ npm install jsonwebtoken dotenv cookie --save
$ npm i --save-dev @types/jsonwebtoken @types/cookie
$ npm install cookie-parser --save
$ npm i --save-dev @types/cookie-parser
```
