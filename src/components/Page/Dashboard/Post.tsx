// src/components/Post.tsx
import React from "react";
import { Post } from "./types/Post";

interface PostProps {
  post: Post;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>
        By {post.author} on {new Date(post.createdAt).toLocaleDateString()}
      </small>
    </div>
  );
};

export default PostItem;
