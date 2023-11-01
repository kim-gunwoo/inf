import HeaderComponent from '@/components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
