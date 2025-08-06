import React, { useEffect, useState } from 'react';
import './Blog.css';
import '../../App.css';
import FooterSection from "../FooterSection/FooterSection";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.jsonkeeper.com/b/2LXHU')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((json) => {
        setPosts(json.blog_posts); // Access the `blog_posts` array
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

if (loading) return <div className="loader"></div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <p className='blog-title'>Blog</p>
        <p className="blog-subtitle">
            Insights on digital wellness and breaking free from endless scrolling Brain
        </p>

<div className="blog-container">
  {posts.map((post) => (
    <div className="blog-card" key={post.id}>
      <h3 className="blog-card-title">{post.title}</h3>

      <div className="blog-card-meta">
        <span className="date">{post.date}</span>
        <span className="dot">•</span>
        <span className="read-time">{post.read_time}</span>
        <span className="details">by</span>
        <img src="./images/yoni-smolyar.webp" alt={post.author.name} className="author-image" />
        <span className="author-name">{post.author.name}</span>
      </div>

      <p className="blog-card-summary">
        {post.content.introduction}
      </p>
      <button className="read-more-btn">
  Read More →
</button>

    </div>
  ))}
</div>

<div className="horizontal-line"></div>

<FooterSection />
    </div>
  );
};

export default Blog;
