import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getSortedPostsData } from "../../lib/post";
import Link from "next/link";

interface IProps {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
}

export default function Home({ allPostsData }: IProps) {
  return (
    <>
      <Head>
        <title>Nextjs App</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.headingMd}>
          <p>introduction</p>
          <p>this is a website</p>
        </section>
        <section className={`${styles.headingMd} ${styles.padding1px}`}>
          <h2 className={styles.headingLg}>Blog</h2>
          <ul className={styles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={styles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
