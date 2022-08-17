import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { Container, Nav, Navbar, Image, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import axios from 'axios'


const Header = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
  }
  
  
    const deleteAccount = async() => {
      const user = JSON.parse(localStorage.getItem('user'));
       await axios.delete(`http://localhost:4000/api/auth/${user.id}`, {
                  headers: {
                    'Authorization': `Bearer ${user.token}`
                  }
       });
      localStorage.clear();
      navigate('/register');
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
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={user.name}
                            menuVariant="dark"
                          >
                            <NavDropdown.Item className='fs-6 fw-bold text-light' onClick={logOut}>Log Out</NavDropdown.Item>
                            <NavDropdown.Item className='fs-6 fw-bold text-light' onClick={deleteAccount} >
                              Delete Account
                            </NavDropdown.Item>
                          </NavDropdown>
                    </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header