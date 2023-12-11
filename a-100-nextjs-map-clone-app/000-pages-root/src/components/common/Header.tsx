import React, { ComponentPropsWithoutRef, ForwardedRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/header.module.scss';

interface Props {
  onClickLogo?: () => void;
  rightElements?: React.ReactElement[];
}

const HeaderComponent = ({ onClickLogo, rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link
          href="/"
          // v 13 사용시
          // onClick={onClickLogo}
          // className={styles.box}
          // aria-label="홈으로 이동"
          // 내부 링크 사용시
          legacyBehavior
          passHref
        >
          {/* <Image
            src="/logo.png"
            width={20}
            height={20}
            alt="로고"
            style={{ objectFit: 'contain' }}
          /> */}
          <CustomAnchor
            // v 12
            onClick={onClickLogo}
            className={styles.box}
            aria-label="홈으로 이동"
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default HeaderComponent;

/**
 * https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag
 * https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-functional-component
 *  */
// `onClick`, `href`, and `ref` need to be passed to the DOM element
// for proper handling
const CustomAnchor = React.forwardRef(function CustomAnchor(
  props: ComponentPropsWithoutRef<'a'>,
  ref: ForwardedRef<HTMLAnchorElement>
) {
  return (
    <a {...props} ref={ref}>
      <Image
        src="/logo.png"
        width={20}
        height={20}
        alt="로고"
        style={{ objectFit: 'contain' }}
      />
    </a>
  );
});
