import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useAuthState } from "../context/auth";
import { Post } from "../types";

interface PostCardProps {
  post: Post;
  subMutate?: () => void;
  mutate?: () => void;
}

const PostCard = ({
  post: {
    identifier,
    slug,
    title,
    body,
    subName,
    createdAt,
    voteScore,
    userVote,
    commentCount,
    url,
    username,
    sub,
  },
  mutate,
  subMutate,
}: PostCardProps) => {
  const router = useRouter();

  const { authenticated } = useAuthState();

  const vote = async (value: number) => {
    if (!authenticated) router.push("/login");

    if (value === userVote) value = 0;

    try {
      await axios.post("/votes", { identifier, slug, value });
      if (mutate) mutate();
      if (subMutate) subMutate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex mb-4 bg-white rounded" id={identifier}>
      {/* 좋아요 싫어요 기능 부분 */}
      <div className="flex-shrink-0 w-10 py-2 text-center rounded-l">
        {/* 좋아요 */}
        <div
          className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-red-500"
          onClick={() => vote(1)}
        >
          {userVote === 1 ? (
            <FaArrowUp className="text-red-500" />
          ) : (
            <FaArrowUp />
          )}
        </div>
        <p className="text-xs font-bold">{voteScore}</p>
        {/* 싫어요 */}
        <div
          className="flex justify-center w-6 mx-auto text-gray-400 rounded cursor-pointer hover:bg-gray-300 hover:text-blue-500"
          onClick={() => vote(-1)}
        >
          {userVote === -1 ? (
            <FaArrowDown className="text-blue-500" />
          ) : (
            <FaArrowDown />
          )}
        </div>
      </div>

      {/* 포스트 데이터 부분 */}
      <div className="w-full p-2">
        <div className="flex items-center">
          <p className="text-xs text-gray-400">
            Posted by
            <Link className="mx-1 hover:underline" href={`/u/${username}`}>
              /u/{username}
            </Link>
            <Link className="mx-1 hover:underline" href={url}>
              {dayjs(createdAt).format("YYYY-MM-DD HH:mm")}
            </Link>
          </p>
        </div>
        <Link className="my-1 text-lg font-medium" href={url}>
          {title}
        </Link>
        {body && <p className="my-1 text-sm">{body}</p>}
        <div className="flex">
          <Link href={url}>
            <i className="mr-1 fas fa-comment-alt fa-xs"></i>
            <span>{commentCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
