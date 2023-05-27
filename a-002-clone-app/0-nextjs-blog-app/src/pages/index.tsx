import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <ul className={styles.list}></ul>
        </section>
      </main>
    </>
  );
}
