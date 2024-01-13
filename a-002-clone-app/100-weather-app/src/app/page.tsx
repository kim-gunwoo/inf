import Link from 'next/link';
import style from './style.module.css';
import CurrentWeatherItem from '@/components/CurrentWeatherItem';
import RevalidateButton from '@/components/RevalidateButton';

export default function Home() {
  const cities = [
    { name: '서울', code: 'seoul' },
    { name: '뉴욕', code: 'NYC' },
    { name: '런던', code: 'london' },
  ];

  return (
    <>
      <h1>날씨 앱</h1>
      <RevalidateButton tag="time" />
      <ul className={style.list}>
        {cities.map((city) => {
          return <CurrentWeatherItem key={city.code} cityCode={city.code} cityName={city.name} />;
        })}
      </ul>
    </>
  );
}
