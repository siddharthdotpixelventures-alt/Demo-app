import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import BlogDetails from './components/BlogDetails/BlogDetails';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AdminLogin from './components/Admin/AdminLogin';
import BlogBuilder from './components/Admin/BlogBuilder';
import PrivateRoute from './components/Admin/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router> */}
      <Router>
        <Navbar />
      <Routes>
        
        {/* Public Home */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogDetails/:id" element={<BlogDetails />} />
        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Blog Builder */}
        <Route
          path="/admin/blog-builder"
          element={
            <PrivateRoute>
              <BlogBuilder />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
