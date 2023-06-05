import Link from "next/link";
import CreatePost from "./CreatePost";

async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.items;
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div>
      <h1>Posts</h1>
      {posts?.map((post: any) => (
        <PostItem key={post.id} post={post} />
      ))}
      <CreatePost />
    </div>
  );
}

const PostItem = ({ post }: { post: any }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <h2>{post.title}</h2>
      <p>{post.created}</p>
    </Link>
  );
};
