import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { Store } from '../types/store';
import { useRouter } from 'next/router';

interface Props {
  store: Store;
}

const StoreDetail: NextPage<Props> = ({ store }) => {
  const router = useRouter();

  // fallback : true 일 경우
  // if (router.isFallback) {
  //   return <div>loading...</div>;
  // }

  return <div>{store.name}</div>;
};
export default StoreDetail;

/** https://nextjs.org/docs/basic-features/data-fetching/get-static-paths */
export const getStaticPaths: GetStaticPaths = async () => {
  const stores = (await import('../../public/stores.json')).default;
  const paths = stores.map((store) => ({ params: { name: store.name } }));

  // fallback : true, false, 'blocking'
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = (await import('../../public/stores.json')).default;
  const store = stores.find((store) => store.name === params?.name);

  // fallback : true 일 경우 바로 404를 띄우지 않는다.
  // if (!store) {
  //   return { notFound: true };
  // }

  return { props: { store } };
};
