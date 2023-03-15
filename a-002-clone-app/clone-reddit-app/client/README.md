# client

## tailwindcss

### tailwindcss init

```sh
# 모듈 설치
$ npm i -D postcss-preset-env tailwindcss
# Tailwind 설정 파일 생성
$ npx tailwind init
# PostCSS 빌드 적용을 위한 postcss 설정 파일 생성
$ touch postcss.config.js

```

### tailwind 와 postcss webpack preset을 plugins 에 넣어줍니다.

```
# PostCSS란?
- POST CSS는 우리의 CSS를 조금 더 현대적으로 바꿔주는 플러그인
좀 더 풀어 설명하자면 POST CSS는 JS 플러그인을 사용하여 CSS를 변환시키는 툴
- POST CSS는 언어가 아니라 자동으로 현대적인 CSS를 호환 가능하도록 변환시켜주는 플러그인일 뿐임
- POST CSS는 CSS에 문제가 없는지 미리 확인해서 에러 로그를 준다.
- PostCSS 자체는 아무 일도 하지 않음. 다만 다양한 플러그인과, 플러그인을 추가할 수 있음
```
