export interface User {
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface Sub {
  name: string;
  title: string;
  description: string;
  imageUrn: string;
  bannerUrn: string;
  username: string;
  posts: Post[];
  postCount?: string;
  imageUrl: string;
  bannerUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  identifier: string;
  title: string;
  slug: string;
  body: string;
  subName: string;
  username: string;
  sub?: Sub;
  url: string;
  userVote?: number;
  voteScore?: number;
  commentCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  identifier: string;
  body: string;
  username: string;
  post?: Post;
  userVote: number;
  voteScore: number;
  createdAt: string;
  updatedAt: string;
}
