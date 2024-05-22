beforeEach(() => {
  // baseUrl을 기준으로 웹 페이지로 접속할 수 있도록 도와주는 함수
  cy.visit('/login');

  // alias
  cy.findByLabelText('로그인').as('loginBtn');
});

it('이메일을 입력하지 않고 로그인 버튼을 클릭할 경우 "이메일을 입력하세요" 경고 메세지가 노출된다', () => {
  // Cypress testing library -> 사용자가 앱을 사용하는 방식과 유사하게 요소 탐색 -> 신뢰성 있는 테스트 코드
  // 체이닝 형태로 테스트 코드 작성 -> 테스트의 과정 이해하기 쉬움, 코드를 간결하게 작성할 수 있음
  // cy.findByLabelText('로그인').click();
  cy.get('@loginBtn').click();

  cy.findByText('이메일을 입력하세요').should('exist');
});

it('비밀번호를 입력하지 않고 로그인 버튼을 클릭할 경우 "비밀번호를 입력하세요" 경고 메세지가 노출된다', () => {
  cy.findByLabelText('로그인').click();

  cy.findByText('비밀번호를 입력하세요').should('exist');
});

it('잘못된 양식의 이메일을 입력한 뒤 로그인 버튼을 클릭할 경우 "이메일 양식이 올바르지 않습니다" 경고 메세지가 노출된다', () => {
  /**
   * 커멘드가 실핼될때 각 subject 내부적으로 비동기 대기열에서 대기하다가 실행
   * get API나 테스트 라이브러리의 쿼리 실행이 완료되는 타이밍
   * -> subject 체이닝 형태로 연속해서 커맨드를 실행 or then() API를 사용
   *
   * then() API -> 이전 커맨드의 subject 실행 결과를 전달받아 사용
   * 체이닝 형태로만 subject 결과를 전달받아 사용 가능 -> 실행 결과 전달을 yield 라고 표현
   */
  cy.findByLabelText('이메일').type('wrongemail#mail.com');
  cy.findByLabelText('로그인').click();

  cy.findByLabelText('이메일')
    .then($email => {
      const cls = $email.attr('class');

      // ...

      cy.wrap($email).click();
    })
    .click();

  cy.findByText('이메일 양식이 올바르지 않습니다').should('exist');
});

it('회원 가입 클릭 시 회원 가입 페이지로 이동한다', () => {
  cy.findByText('회원가입').click();

  // cy.url().should('eq', `${Cypress.env('baseUrl')}/register`);
  cy.assertUrl('/register');
});

it('성공적으로 로그인 되었을 경우 메인 홈 페이지로 이동하며, 사용자 이름 "Maria"와 장바구니 아이콘이 노출된다', () => {
  const username = 'maria@mail.com';
  const password = '12345';

  cy.findByLabelText('이메일').type(username);
  cy.findByLabelText('비밀번호').type(password);
  cy.findByLabelText('로그인').click();

  cy.url().should('eq', `${Cypress.env('baseUrl')}/`);

  //   cy.login();

  //   cy.assertUrl('/');
  //   cy.findByText('Maria').should('exist');
  //   cy.findByTestId('cart-icon').should('exist');
});
