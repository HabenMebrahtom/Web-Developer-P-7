import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import "./Header.css"


const Header = () => {

    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
            <Navbar.Brand >
                <Image
                    src={require('../assets/icon-left-font-monochrome-white.png')}
                    height="200"
                    width="200"
                    alt="Groupomania Logo"
                    loading="lazy"  ></Image>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav >
            {
                !user ? 
                    <>
                        <Nav.Link as={Link} to="/register" className="fs-6 fw-bold text-light mr-3">Sign up</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="fs-6 fw-bold text-light">Log in</Nav.Link>
                    </>  
                    : 
                    <>
                        <Nav.Link onClick={logOut} className="link-item fs-6 fw-bold text-light">
                            Log out
                        </Nav.Link>  
                    </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header