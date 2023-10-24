import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);

  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps - prefetch
      </button>
      <br />
      <br />

      {/* <div style={{ height: '200vh' }} /> */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a href="/section1/getStaticProps">/getStaticProps - a tag</a>
      <br />
      <br />

      {/* 
        next/link가 화면에 보여질때 prefetch 하여 가져오도록 동작하여 불필요한 네트워크 요청 방지 
      */}
      <Link
        href="/section1/getStaticProps"
        // legacyBehavior // v12 처럼 동작함
      >
        {/* <a>/getStaticProps - next/link v12</a> legacyBehavior */}
        /getStaticProps - next/link
      </Link>
      {/* * https://github.com/vercel/next.js/blob/canary/packages/next/client/link.tsx#L487 */}
      <br />
      <br />
    </main>
  );
}
