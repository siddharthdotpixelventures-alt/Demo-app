import React from 'react';
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
  const navigate = useNavigate();

  const handleReload = () => {
    if (location.pathname === '/') {
      // Already on home, reload page
      window.location.reload();
    } else {
      // Navigate to home (no reload)
      navigate('/');
    }
  };
  return (
    <nav className="navbar navbar-expand-sm bg-transparent" onClick={handleReload}>
      <div className="container-fluid">
        <div className="d-flex align-items-center logo-title">
          <div className="avatar-wrapper">
            <img
              src="/images/apple-touch-icon.png"
              alt="Avatar Logo"
              className="avatar-img"
            />
          </div>
          <h5 className="app-title">brainrot</h5>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
