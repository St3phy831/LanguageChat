import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import { FiThumbsUp } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import "./DetailView.css";

const DetailView = () => {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Post").select().eq("id", params.id);
      setPost(data[0]);
    };
    fetchPost().catch(console.error);
  }, []);

  const updateUpvotes = async (event) => {
    event.preventDefault();
    const newCount = post.upvotes + 1;
    if (post.upvotes !== newCount) {
      setPost((prev) => {
        return {
          ...prev,
          upvotes: newCount,
        };
      });
      const { data, error } = await supabase
        .from("Post")
        .update([{ upvotes: newCount }])
        .eq("id", params.id);
    }
  };

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
          <div id="actions">
            <div>
              <FiThumbsUp size={26} onClick={updateUpvotes} id="thumbsUp" />{" "}
              <b>Upvotes:</b> {post.upvotes}
            </div>
            <div>
              <Link to={"/edit/" + post.id}>
                <BiEdit size={30} />
              </Link>
              <MdDelete size={30} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailView;
