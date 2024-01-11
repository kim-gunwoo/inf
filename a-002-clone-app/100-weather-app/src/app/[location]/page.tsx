import HomeButton from '@/components/HomeButton';

type Props = {
  params: {
    location: string;
  };
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const getCurrentWeather = async (location: string): Promise<Response> => {
  const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no&lang=ko`);
  console.log(res);

  if (!res.ok) {
    throw new Error('날씨 정보를 가져올 수 없습니다.');
  }

  return res.json();
};

export default async function Detail({ params }: Props) {
  const name = params.location;
  const res = await getCurrentWeather(name);
  console.log(res);

  return (
    <>
      <h1>{name} 3일 예보</h1>
      <HomeButton />
    </>
  );
}
