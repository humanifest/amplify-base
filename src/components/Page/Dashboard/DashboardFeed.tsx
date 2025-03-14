import React, { useState, useEffect } from "react";
import { Post } from "./types/Post";
import PostItem from "./Post";

// const actions = [
//   "commented",
//   "rated",
//   "uploaded",
//   "followed",
//   "unfollowed",
//   "reacted",
// ];

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // State to hold posts

  // Fetch posts (static data for this example)
  useEffect(() => {
    const fetchPosts = async () => {
      // Simulating a fetch call to an API
      const data: Post[] = [
        {
          id: 1,
          title: "First Post",
          content: "follows Jane Smith",
          author: "John Doe",
          createdAt: "2024-09-26T10:30:00Z",
        },
        {
          id: 2,
          title: "Second Post",
          content: "rated {John's comment} 5 starts",
          author: "Jane Smith",
          createdAt: "2024-09-25T08:15:00Z",
        },
      ];
      setPosts(data); // Set the posts into state
    };

    fetchPosts();
  }, []);

  return (
    <div className="">
      {posts.length > 0 ? (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <p>No posts to display</p>
      )}
    </div>
  );
};

export default Feed;
