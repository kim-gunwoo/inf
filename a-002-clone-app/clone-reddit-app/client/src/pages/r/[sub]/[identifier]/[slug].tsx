import { Post } from "@/types";
import { useRouter } from "next/router";
import useSWR from "swr";

const PostPage = () => {
  const router = useRouter();
  const { identifier, sub, slug } = router.query;

  const {
    data: post,
    error,
    mutate: postMutate,
  } = useSWR<Post>(identifier && slug ? `/posts/${identifier}/${slug}` : null);

  return <div></div>;
};
