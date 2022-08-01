import React from 'react';
//import { NavLink} from 'react-router-dom';


function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <div class="navbar-brand me-auto mb-2 mb-lg-0">
            <img
                src={require('../assets/icon-left-font-monochrome-white.png')}
                height="150"
                width="150"
                alt="Groupomania Logo"
                loading="lazy"   
            />
            </div>

            <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <i class="fas fa-bars"></i>
            </button>

            <div class="d-flex align-items-center">
                <button type="button" class="btn btn-primary px-3 me-2">
                Login
                </button>
                <button type="button" class="btn btn-primary me-3">
                Sign up 
                </button>
            </div>
            </div>
    </nav>
    
  )
}

export default Header