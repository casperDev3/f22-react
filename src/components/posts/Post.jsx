import React from "react";

const Post = ({ post, ...props }) => {
  const { title, body, id } = post;

  return (
    <>
      <div
        id={id}
        style={{
          fontSize: "18px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          width: "25%",
          marginBottom: "20px",
        }}
      >
        <h1>{title}</h1>
        <p>{body}</p>
        <button
          onClick={() => props.delete(id)}
          style={{
            cursor: "pointer",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "red",
            color: "#fff",
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Post;
