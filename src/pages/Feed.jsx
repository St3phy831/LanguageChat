import { supabase } from "../client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
          <Link to={"/" + post.id}>
            <div className="Post">
              <b className="title">{post.title}</b>
              <br></br>
              <p>Upvotes: {post.upvotes}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Feed;