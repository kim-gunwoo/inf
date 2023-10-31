import React from 'react';
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
          onClick={onClickLogo}
          className={styles.box}
          aria-label="홈으로 이동"
        >
          <Image
            src="/logo.png"
            width={20}
            height={20}
            alt="로고"
            style={{ objectFit: 'contain' }}
          />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};

export default HeaderComponent;
