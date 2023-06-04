import { GetStaticPaths } from "next";
import { getAllPostIds, getPostData } from "../../../lib/post";
import Head from "next/head";
import styles from "@/styles/Post.module.css";

interface IProps {
  postData: {
    title: string;
    id: string;
    date: string;
    contentHtml: string;
  };
}

export default function Post({ postData }: IProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
