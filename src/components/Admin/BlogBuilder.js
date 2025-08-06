import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './BlogBuilder.css'; // We'll define image style here

const imageHandler = function () {
  const quill = this.quill;
  const range = quill.getSelection();

  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');

  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        quill.insertEmbed(range.index, 'image', base64, 'user');
      };
      reader.readAsDataURL(file);
    }
  };
};

const insertImageByUrl = (quill) => {
  const url = prompt('Enter image URL');
  if (url) {
    const range = quill.getSelection();
    quill.insertEmbed(range.index, 'image', url, 'user');
  }
};

// Custom toolbar with image upload and alignment buttons
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue="">
      <option value="1" />
      <option value="2" />
      <option value="" />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" />
    <button className="ql-strike" />
    <button className="ql-list" value="ordered" />
    <button className="ql-list" value="bullet" />
    <button className="ql-align" value="" />
    <button className="ql-align" value="center" />
    <button className="ql-align" value="right" />
    <button className="ql-align" value="justify" />
    <button className="ql-link" />
    <button className="ql-image" />
    <button className="ql-insertImageByUrl">🌐</button>
    <button className="ql-clean" />
  </div>
);

const BlogBuilder = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const quillRef = useRef(null);

  const savePost = () => {
    if (!title.trim() || !content.trim()) {
      alert('Please enter both title and content.');
      return;
    }

    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem('blogPosts', JSON.stringify([...posts, newPost]));
    alert('Post saved!');
    setTitle('');
    setContent('');
  };

  const handleEditorChange = (value) => {
    setContent(value);
  };

  const handleImageByUrl = () => {
    const editor = quillRef.current.getEditor();
    insertImageByUrl(editor);
  };

  // Register custom handler for URL button
  React.useEffect(() => {
    const toolbar = quillRef.current?.getEditor()?.getModule('toolbar');
    if (toolbar) {
      toolbar.addHandler('image', imageHandler);
      const urlButton = document.querySelector('.ql-insertImageByUrl');
      if (urlButton) {
        urlButton.addEventListener('click', handleImageByUrl);
      }
    }
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create Blog Post</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: '100%',
          padding: '0.5rem',
          marginBottom: '1rem',
          fontSize: '1.2rem',
        }}
      />

      <CustomToolbar />

      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={content}
        onChange={handleEditorChange}
        modules={{
          toolbar: {
            container: '#toolbar',
            handlers: {
              image: imageHandler,
            },
          },
        }}
        formats={[
          'header',
          'bold',
          'italic',
          'underline',
          'strike',
          'list',
          'bullet',
          'align',
          'link',
          'image',
        ]}
        style={{ height: '300px', marginBottom: '2rem' }}
        placeholder="Write your content here..."
      />

      <button
        onClick={savePost}
        style={{
          padding: '0.5rem 1rem',
          fontSize: '1rem',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Save Post
      </button>
    </div>
  );
};

export default BlogBuilder;
