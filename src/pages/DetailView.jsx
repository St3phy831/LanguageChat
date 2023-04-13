import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import { FiThumbsUp } from "react-icons/fi";
import "./DetailView.css";

const DetailView = () => {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Post").select().eq("id", params.id);
      console.log(data[0]);
      setPost(data[0]);
    };
    fetchPost().catch(console.error);
  }, []);

  return (
    <div className="DetailView">
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p className="center">
            <span id="language">
              <b>{post.language}</b>
            </span>
          </p>
          {post.image && (
            <div className="center">
              <br></br>
              <img src={post.image}></img>
            </div>
          )}
          {post.description && (
            <p>
              <br></br>
              <b>Description:</b> {post.description}
            </p>
          )}
          <br></br>
          <p>
            <FiThumbsUp size={22} /> <b>Upvotes:</b> {post.upvotes}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailView;
