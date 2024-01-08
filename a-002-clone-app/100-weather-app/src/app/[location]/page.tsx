import HomeButton from '@/components/HomeButton';

type Props = {
  params: {
    location: string;
  };
};

export default function Detail({ params }: Props) {
  const name = params.location;

  return (
    <>
      <h1>{name} 3일 예보</h1>
      <HomeButton />
    </>
  );
}
