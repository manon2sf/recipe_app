/**
 *  components/Homepage/Homepage.js - Homepage Component
 */

/* Modules and components imports */
import React, { useState, useEffect } from "react";
import fetchFromApi from "../../assets/lib/fetch";
/* Style import */
import "./style.scss";

/* App component */
function Homepage(props) {
  /*
   * State
   */
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({});

  /*
   * Effects
   */
  useEffect(() => {
    getPosts();
  }, []);

  /*
   * Methods
   */

  /* Handle text inputs for new post */
  const handlePostInput = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  /* Display Posts */
  const displayPosts = () =>
    posts.map((post, key) => (
      <li key={key}>
        <p className="author-name">{post.author}</p>
        <p className="content">{post.content}</p>
      </li>
    ));

  /* GET posts */
  const getPosts = () => {
    fetchFromApi("GET", "/posts").then(
      (data) => {
        if (Array.isArray(data)) {
          setNewPost(data);
        }
      },
      (error) => {
        console.error("An error as occured while fetching posts");
      }
    );
  };

  /* Add posts */
  const addPost = () => {
    if (!newPost.author || !newPost.content) {
      return;
    }

    fetchFromApi("POST", "/post", newPost).then(
      (data) => {
        if (data.success) {
          setPosts([...posts, newPost]);
          setNewPost({});
        }
      },
      (error) => {
        console.error("An error as occured while submitting post");
      }
    );
  };

  return (
    <div className="page-container">
      <h2>Home</h2>
      <ul>{displayPosts()}</ul>
      <div className="input-group">
        <input
          type="text"
          name="author"
          value={newPost.author}
          onChange={handlePostInput}
        />
        <textarea
          name="content"
          value={newPost.content}
          onChange={handlePostInput}
        />
        <button onClick={addPost}>Envoyer</button>
      </div>
    </div>
  );
}

export default Homepage;
