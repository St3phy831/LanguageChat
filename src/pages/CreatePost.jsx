import { supabase } from "../client";
import { useState } from "react";
import Form from "../components/Form";

const CreatePost = () => {
  const [post, setPost] = useState({
    title: "",
    description: "",
    language: "",
    upvotes: 0,
    image: "",
  });

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

  const createPost = async (event) => {
    if (post.title !== "") {
      event.preventDefault();
      const { data, error } = await supabase.from("Post").insert([
        {
          title: post.title,
          description: post.description,
          language: post.language,
          upvotes: post.upvotes,
          image: post.image,
        },
      ]);
      window.location = "/feed";
    }
  };

  return (
    <div className="CreatePostForm">
      <h1>Create a Post</h1>
      <Form post={post} handleChange={handleChange} />
      <div className="center">
        <button onClick={createPost}>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
