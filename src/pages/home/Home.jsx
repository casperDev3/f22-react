import React, { useState, useEffect, useMemo } from "react";
import s from "./Home.module.scss";
// components
import First from "../../components/first/First";
import Post from "../../components/posts/Post";
import Counter from "../../components/counter/Counter";

const Home = () => {
  // reactive variables
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  // on load
  useEffect(() => {
    getPosts();
  }, []);
  // search posts
  const searchPosts = useMemo(() => {
    return posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });
  }, [search, posts]);
  // functions
  function getPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        return setPosts(data);
      });
  }
  function deletePost(id) {
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  }
  return (
    <>
      <div className={s.home}>
        <First />
        {/* Counter */}
        <div>
          <Counter />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {/* Search */}
          <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} />
          </div>
          {/* Posts */}
          {/* if legth serch > 0 */}
          {search.length >= 0
            ? searchPosts.map((post) => {
                return <Post delete={deletePost} key={post.id} post={post} />;
              })
            : posts.map((post) => {
                return <Post delete={deletePost} key={post.id} post={post} />;
              })}
        </div>
      </div>
    </>
  );
};

export default Home;
