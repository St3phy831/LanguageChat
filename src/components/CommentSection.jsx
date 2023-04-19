import { useEffect, useState } from "react";
import { supabase } from "../client";
import "./CommentSection.css";

const CommentSection = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    setComments(props.comments);
  }, []);

  const updateComment = (comment) => {
    setComment(comment);
  };

  const updateComments = async (event) => {
    event.preventDefault();
    if (comment !== "" && event.keyCode == 13) {
      const newComments = comments ? [...comments, comment] : [comment];
      setComments(newComments);
      const { data, error } = await supabase
        .from("Post")
        .update([{ comments: newComments }])
        .eq("id", props.id);
      setComment("");
    }
  };

  return (
    <div className="CommentSection">
      {comments && comments.map((comment) => <p>- {comment}</p>)}
      <input
        type="text"
        id="commentInput"
        placeholder="Leave a comment..."
        onKeyUp={updateComments}
        onChange={(event) => updateComment(event.target.value)}
        value={comment}
      />
    </div>
  );
};
export default CommentSection;
