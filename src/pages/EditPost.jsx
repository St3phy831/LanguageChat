import { supabase } from "../client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../components/Form";

const EditPost = () => {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const { data } = await supabase.from("Post").select().eq("id", params.id);
      setPost(data[0]);
    };
    fetchPost().catch(console.error);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("Name: ", name, " value: ", value);
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const updatePost = async (event) => {
    if (post.title !== "") {
      event.preventDefault();
      const { data, error } = await supabase
        .from("Post")
        .update([
          {
            title: post.title,
            description: post.description,
            language: post.language,
            image: post.image,
          },
        ])
        .eq("id", params.id);
      window.location = "/feed";
    }
  };

  return (
    <div className="EditPostForm">
      <h1>Edit Post</h1>
      {post && <Form post={post} handleChange={handleChange} />}
      <div className="center">
        <button onClick={updatePost}>Submit</button>
      </div>
    </div>
  );
};

export default EditPost;
