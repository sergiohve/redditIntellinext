import React from "react";
import "./CreatedPost.scss"

const CreatedPost = () => {
  return (
    <div className="cont-inputpost">
      {" "}
      <input
        type="text"
        className="form-control inputPost"
        placeholder="Create post"
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
    </div>
  );
};

export default CreatedPost;
