import HeaderComponent from '@/components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/components/home/MapSection';

export default function Home() {
  return (
    <>
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
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </>
  );
}
