import { supabase } from "../client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import "./Feed.css";

const Feed = () => {
  const [filteredResults, setFilteredResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const updatePosts = (sortedPosts) => {
    setPosts(sortedPosts);
  };

  const searchByTitle = (searchValue) => {
    setSearchTitle(searchValue);
    if (searchValue !== "") {
      const filteredData = posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(posts);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("Post")
        .select()
        .order("created_at", { ascending: false });

      setPosts(data);
    };
    fetchPosts().catch(console.error);
  }, []);

  return (
    <div className="Feed">
      <div id="feedTitle">
        <h1>Feed</h1>
      </div>
      {posts && (
        <Filters
          posts={posts}
          setPosts={updatePosts}
          searchByTitle={searchByTitle}
        />
      )}
      {searchTitle !== ""
        ? filteredResults.map((post) => (
            <Link to={"/" + post.id}>
              <div className="Post">
                <b className="title">{post.title}</b>
                <br></br>
                <p>Upvotes: {post.upvotes}</p>
              </div>
            </Link>
          ))
        : posts &&
          posts.map((post) => (
            <Link to={"/" + post.id}>
              <div className="Post">
                <p>{new Date(post.created_at).toLocaleDateString()}</p>
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
