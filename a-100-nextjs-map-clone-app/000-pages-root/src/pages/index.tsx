import HeaderComponent from '@/components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/components/home/MapSection';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import { useEffect } from 'react';
import useStores from '@/hooks/useStores';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

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
};

export default Home;

export async function getStaticProps() {
  const stores = (await import('../../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60, // 1 hours
  };
}
