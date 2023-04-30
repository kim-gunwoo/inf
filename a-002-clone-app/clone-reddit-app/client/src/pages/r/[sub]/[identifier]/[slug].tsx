import { useAuthState } from "@/context/auth";
import { Post } from "@/types";
import axios from "axios";
import dayjs from "dayjs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";

const PostPage = () => {
  const router = useRouter();
  const { authenticated, user } = useAuthState();
  const [newComment, setNewComment] = useState("");
  const { identifier, sub, slug } = router.query;

  const {
    data: post,
    error,
    mutate: postMutate,
  } = useSWR<Post>(identifier && slug ? `/posts/${identifier}/${slug}` : null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() === "") {
      return;
    }

    try {
      await axios.post(`/posts/${post?.identifier}/${post?.slug}/comments`, {
        body: newComment,
      });

      setNewComment("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex max-w-5xl px-4 pt-5 mx-auto">
      <div className="w-full md:mr-3 md:w-8/12">
        <div className="bg-white rounded">
          {post && (
            <>
              <div className="flex">
                {/* 좋아요 싫어요 기능 부분 */}
                <div className="flex-shrink-0 w-10 py-2 text-center rounded-l">
                  {/* 좋아요 */}
                  <div className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500">
                    {/* {good} */}
                  </div>
                  <p className="text-xs font-bold">{post.voteScore}</p>
                  {/* 싫어요 */}
                  <div className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-500">
                    {/* {bad} */}
                  </div>
                </div>
                <div className="py-2 pr-2">
                  <div className="flex items-center">
                    <p className="text-xs test-gray-400">
                      Posted by <i className="fas fa-abacus"></i>
                      <Link
                        className="mx-1 hover:underline"
                        href={`/u/${post.username}`}
                      >
                        /u/{post.username}
                      </Link>
                      <Link className="mx-1 hover:underline" href={post.url}>
                        {dayjs(post.createdAt).format("YYYY-MM-DD HH:mm")}
                      </Link>
                    </p>
                  </div>
                  <h1 className="my-1 text-xl font-medium">{post.title}</h1>
                  <p className="my-3 text-sm">{post.body}</p>
                  <div className="flex">
                    <button>
                      <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                      <span className="font-bold">
                        {post.commentCount} Comments
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 댓글 작성 구간 */}
              <div className="pr-6 mb-4 pl-9">
                {authenticated ? (
                  <div>
                    <p className="mb-1 text-xs">
                      <Link
                        className="font-semibold text-blue-500"
                        href={`/u/${user?.username}`}
                      >
                        {user?.username}
                      </Link>{" "}
                      으로 댓글 작성
                    </p>
                    <form onSubmit={handleSubmit}>
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                      ></textarea>
                      <div className="flex justify-end">
                        <button
                          className="px-3 py-1 text-white bg-gray-400 rounded"
                          disabled={newComment.trim() === ""}
                        >
                          댓글 작성
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="flex items-center justify-between px-2 py-4 border border-gray-200 rounded">
                    <p className="font-semibold text-gray-400">
                      댓글 작성을 위해서 로그인 해주세요.
                    </p>
                    <div>
                      <Link
                        className="px-3 py-1 text-white bg-gray-400 rounded"
                        href={`/login`}
                      >
                        로그인
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 댓글 리스트 부분 */}
              {/*  */}
              <div className="flex">
                {/* 
                    comment list 
                    */}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
