import { useCallback } from 'react';
import Link from 'next/link';

import styles from '../../styles/header.module.scss';

import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import HeaderComponent from '../common/Header';

const HomeHeader = () => {
  return (
    <HeaderComponent
      rightElements={[
        <button
          key={'copy'}
          className={styles.box}
          style={{ marginRight: 8 }}
          onClick={() => {
            alert('copy');
          }}
        >
          <AiOutlineShareAlt size={20} color="#444444" />
        </button>,
        <Link
          key="link"
          className={styles.box}
          href="/feedback"
          aria-label="피드백 페이지로 이동"
        >
          <VscFeedback size={20} color="#444444" />
        </Link>,
      ]}
    />
  );
};
export default HomeHeader;
