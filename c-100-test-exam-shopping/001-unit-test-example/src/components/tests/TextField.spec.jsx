import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

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
});
