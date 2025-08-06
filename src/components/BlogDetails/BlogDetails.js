import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
import './BlogDetails.css';
import FooterSection from '../FooterSection/FooterSection';

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const foundPost = storedPosts.find((p) => String(p.id) === id);
    if (foundPost) {
      // Clean image sizes and sanitize links
      const parser = new DOMParser();
      const doc = parser.parseFromString(foundPost.content, 'text/html');

      // Fix image sizes
      doc.querySelectorAll('img').forEach((img) => {
        img.style.width = '100%';
        img.style.maxWidth = '600px';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '20px 0';
      });

      // Open links in new tab & remove localhost
      doc.querySelectorAll('a').forEach((a) => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('http')) {
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
        } else {
          // remove localhost or relative link issues
          a.setAttribute('href', '#');
        }
      });

      foundPost.cleanedContent = doc.body.innerHTML;
    }
    setPost(foundPost);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
      <div className="blog-details-container">

        <div className="blog-header">
          <h2 className="blog-title">{post.title}</h2>
          <h2 className="date">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
        </div>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.cleanedContent || post.content }}
        ></div>

        <div className="horizontal-line"></div>

        <FooterSection />
        
      </div>
  );
};

export default BlogDetails;
