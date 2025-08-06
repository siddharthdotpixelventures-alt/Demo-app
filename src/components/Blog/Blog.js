import React, { useEffect, useState } from 'react';
import './Blog.css';
import '../../App.css';
import FooterSection from "../FooterSection/FooterSection";
import { useLocation, useNavigate } from 'react-router-dom';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch('https://www.jsonkeeper.com/b/2LXHU')
  //     .then((res) => {
  //       if (!res.ok) throw new Error('Failed to fetch');
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setPosts(json.blog_posts); // Access the `blog_posts` array
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
      setLoading(false)
    }
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
             <span className="date">
  {new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}
</span>

              {/* <span className="dot">•</span>
              <span className="read-time">{post.read_time}</span>
              <span className="details">by</span>
              <img src="./images/yoni-smolyar.webp" alt={post.author.name} className="author-image" />
              <span className="author-name">{post.author.name}</span> */}
            </div> 

            <BlogCard post={post} />


            <button className="read-more-btn" onClick={() => navigate(`/blogDetails/${post.id}`)}>
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


function BlogCard({ post }) {
  // Remove HTML tags from content
  const plainText = post.content.replace(/<[^>]+>/g, '');

  return (
    // <div className="blog-card">
      <p className="blog-card-summary">
        {plainText}
      </p>
    // </div>
  );
}


export default Blog;
