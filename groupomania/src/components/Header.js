import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
            <img
                src={require('../assets/icon-left-font-monochrome-black.png')}
                height="200"
                width="200"
                alt="Groupomania Logo"
                loading="lazy"   
            />
            </div>

            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarLinks"
                aria-controls="navbarLinks"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
            </button> 
                <div class="d-flex align-items-center">
                    <Link to="/login" type="button" className="btn btn-primary px-3 me-2">
                    Login
                    </Link>
                    <Link  to="/register" type="button" className="btn btn-primary me-3">
                    Sign up 
                    </Link>
                </div>
        </div>
    </nav>
    
  )
}

export default Header