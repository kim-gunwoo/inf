import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '@/components/home/MapSection';
import { Store } from '@/types/store';
import { NextPage } from 'next';
import { useEffect } from 'react';
import useStores from '@/hooks/useStores';
import Header from '@/components/home/Header';

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
      <Header />
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
