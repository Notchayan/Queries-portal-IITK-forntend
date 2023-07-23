import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import questionsData from "../data/question.json"; // Import your JSON data
import Buttons from "./Buttons";
import commentsData from "../data/comments.json";
// import { BrowserRouter as Router } from 'react-router-dom';

function Home() {
  const [question, setQuestion] = useState("");
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]); 
  const [activePostId, setActivePostId] = useState(null);

  useEffect(() => {
    // Convert JSON data to match the format of your posts state
    const initialPosts = questionsData.map((question, index) => ({
      id: index + 1,
      text: question.Question,
      author: "Anonymous",
      votes: question.Upvote - question.Downvote,
    }));

    setPosts(initialPosts);
  }, []);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleQuestionSubmit = (event) => {
    event.preventDefault();
    setPosts((prevPosts) => [
      ...prevPosts,
      { id: prevPosts.length + 1, text: question, author: "Anonymous", votes: 0 },
    ]);
    setQuestion("");
  };

  const handleUpvote = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, votes: post.votes + 1 } : post));
  };

  const handleDownvote = (postId) => {
    setPosts(posts.map(post => post.id === postId ? { ...post, votes: post.votes - 1 } : post));
  };

  const handleCommentClick = (postId) => {
    if (postId === activePostId) { // If the comment button of the same post is clicked again
      setComments([]); // Clear the comments
      setActivePostId(null); // Clear active post ID
    } else {
      const postComments = commentsData.filter(comment => comment.postId === postId); // Filter comments for the post
      setComments(postComments); // Set the comments
      setActivePostId(postId); // Set active post ID
    }
  };


  return (
    <div className={styles.home}>
      <div className={styles.postsContainer}>
        <Buttons />
        <form onSubmit={handleQuestionSubmit} className={styles.questionForm}>
          <input
            type="text"
            value={question}
            onChange={handleQuestionChange}
            placeholder="What's on your mind?"
            className={styles.questionInput}
          />
          <button type="submit" className={styles.questionSubmit}>
            Post
          </button>
        </form>
        <div className={styles.posts}>
          {posts.map((post) => (
            <div key={post.id} className={styles.post}>
            <h2 className={styles.postText}>{post.text}</h2>
            <p className={styles.postAuthor}>Posted by {post.author}</p>
            <p className={styles.postVotes}>Votes: {post.votes}</p>
            <div className={styles.postActions}>
              <button onClick={() => handleUpvote(post.id)} className={styles.postActionButton}>👍 Upvote</button>
              <button onClick={() => handleDownvote(post.id)} className={styles.postActionButton}>👎 Downvote</button>
              <button className={styles.postActionButton} onClick={() => handleCommentClick(post.id)}>💬 Comment</button>
            </div>
            <div className={styles.postFooter}>
              <p>Posted on: {new Date().toLocaleDateString()}</p> {/* Add a date */}
              <p>Number of comments: {Math.floor(Math.random() * 100)}</p> {/* Add a random number of comments */}
            </div>
          </div>
          ))}
        </div>
      </div>
      <div className={styles.comments}>
    {comments.map((comment) => (
       <div className={styles["comment-card"]} key={comment.id}>
       <div className={styles["comment-header"]}>
         <span className={styles["comment-author"]}>{comment.author}</span>
         <span className={styles["comment-date"]}>Posted on {new Date(comment.datePosted).toLocaleDateString()}</span>
       </div>
       <div className={styles["comment-content"]}>
         {comment.text}
       </div>
     </div>
    ))}
</div>
    </div>
  );
}

export default Home;