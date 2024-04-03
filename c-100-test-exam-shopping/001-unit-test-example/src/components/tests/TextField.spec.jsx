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

  expect(textInput).toHaveClass('my-class');
});
