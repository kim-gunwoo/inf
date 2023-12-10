import FeedbackSection from '@/components/feedback/FeedbackSection';
import HomeHeader from '@/components/home/Header';
import { getFeedbackListFromFirestore } from '@/firebase/feedback';
import { Feedback } from '@/types/feedback';
import { GetServerSideProps } from 'next';

import { NextSeo } from 'next-seo';

interface Props {
  initialFeedbackList: Feedback[];
}

export default function Feedback({ initialFeedbackList }: Props) {
  return (
    <>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="my domain address /feedback"
      />
      <HomeHeader />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      >
        <FeedbackSection initialFeedbackList={initialFeedbackList} />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initialFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};
