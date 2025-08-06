import React, { useEffect, useState } from 'react';
import './Blog.css';
import '../../App.css';

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
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc', marginBottom: 20, paddingBottom: 10 }}>
          <h2>{post.title}</h2>
          <p>
            <strong>{post.date}</strong> · {post.read_time} · By{' '}
            <a href={post.author.url} target="_blank" rel="noreferrer">
              {post.author.name}
            </a>
          </p>
          <p><strong>Intro:</strong> {post.content.introduction}</p>
          <div>
            {post.content.main_sections.map((section, i) => (
              <div key={i}>
                <h4>{section.heading}</h4>
                <p>{section.content}</p>
              </div>
            ))}
          </div>
          <p><strong>Conclusion:</strong> {post.content.conclusion}</p>
          <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
