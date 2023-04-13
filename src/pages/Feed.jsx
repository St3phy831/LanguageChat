import { supabase } from "../client";
import { useState, useEffect } from "react";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase.from("Post").select().order("created_at");

      setPosts(data);
    };
    fetchPosts().catch(console.error);
  }, []);

  return (
    <div className="Feed">
      <h1>Feed</h1>
      {posts &&
        posts.map((post) => (
          <div className="Post">
            <b className="title">{post.title}</b>
            <br></br>
            <p>Upvotes: {post.upvotes}</p>
          </div>
        ))}
    </div>
  );
};

export default Feed;
