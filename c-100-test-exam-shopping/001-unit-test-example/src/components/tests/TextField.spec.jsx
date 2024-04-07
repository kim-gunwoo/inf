import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

/**
 * setup : beforeEach, beforeAll
 * teardown : afterEach, afterAll
 */
// beforeEach(() => {
//   console.log('root beforeEach');
// });

// beforeAll(() => {
//   console.log('root beforAll');
// });

// afterEach(() => {
//   console.log('root afterEach');
// });

// afterAll(() => {
//   console.log('root afterAll');
// });

/**
 * AAA 패턴
 * Arrange - 테스트 환경 세팅
 * Act - 테스트 동작 발생
 * Assert - 올바른 동작 실행되었는지 검증
 */

it('className prop으로 설정한 css class가 적용된다.', async () => {
  await render(<TextField className="my-class" />);

  const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

  // screen.debug();

  expect(textInput).toHaveClass('my-class');
});

/**
 * it -> test alias
 * it('should ~~~ ');
 * test('if ~~~~');
 *
 * describe = 독립된 테스트 그룹
 */

describe('placeholder', () => {
  // beforeEach(() => {
  //   console.log('placeholder beforeEach');
  // });

  // 기대 결과 === 실제 결과 -> 성공
  // 기대 결과 !== 실제 결과 -> 실패
  it('기본 placeholder "텍스트를 입력해 주세요."가 노출된다.', async () => {
    await render(<TextField />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
    // 단언 (assertion) -> 테스트 통과하기 위한 조건 -> 검증 실행
  });

  it('placeholder prop에 따라 placeholder가 변경된다.', async () => {
    await render(<TextField placeholder="상품명을 입력해 주세요." />);

    const textInput = screen.getByPlaceholderText('상품명을 입력해 주세요.');

    expect(textInput).toBeInTheDocument();
  });

  it('텍스트를 입력하면 onChange prop으로 등록한 함수가 호출된다.', async () => {
    const spy = vi.fn(); // 스파이 함수
    /**
     * 스파이 함수
     * 테스트 코드에서 특정 함수가 호출되었는지,
     * 함수의 인자로 어떤 것이 넘어왔는지 어떤 값을 반환하는지 등 다양한 값들을 저장
     */

    const { user } = await render(<TextField onChange={spy} />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(textInput, 'test');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('엔터키를 입력하면 onEnter prop으로 등록한 함수가 호출된다.', async () => {
    const spy = vi.fn();

    const { user } = await render(<TextField onEnter={spy} />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.type(textInput, 'test{Enter}');

    expect(spy).toHaveBeenCalledWith('test');
  });

  it('포커스가 활성화되면 onFocus prop으로 등록한 함수가 호출된다.', async () => {
    /**
     * 포커스 활성화
     * 탭 키로 인풋 요소로 포커스 이동
     * 인풋 요소 클릭
     * textInput.focus()로 실행
     */
    const spy = vi.fn();

    const { user } = await render(<TextField onFocus={spy} />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(textInput);

    // await textInput.focus();

    expect(spy).toHaveBeenCalled();
  });

  it('포커스가 활성화되면 border 스타일이 추가된다.', async () => {
    const { user } = await render(<TextField />);

    const textInput = screen.getByPlaceholderText('텍스트를 입력해 주세요.');

    await user.click(textInput);

    expect(textInput).toHaveStyle({
      borderWidth: '2px',
      borderColor: 'rgb(25, 118, 210)',
    });
  });
});
