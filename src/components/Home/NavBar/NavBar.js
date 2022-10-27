import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
import { Outlet,Link } from 'react-router-dom';



function NavBar() {
  return (
    <div>
    <Navbar bg="z" expand="lg">
      <Container>
      
        <Navbar.Brand as={Link} to={`/`}><img className='logo' src="https://fontmeme.com/permalink/221012/dddfc5421b281ebd65d419abd78f8ed0.png" alt="fuente-de-google" border="0"/></Navbar.Brand>
        <CartWidget/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to={`categoria/cane`}>Cañas</Nav.Link>
            <Nav.Link as={Link} to= {`categoria/reels`}>Reels</Nav.Link>
            <Nav.Link as={Link} to={`categoria/camping`}>Camping</Nav.Link> 
            <Nav.Link as={Link} to={`categoria/ropa`}>Ropa</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <section>
      <Outlet></Outlet>
    </section>
    
    </div>
  );
}

export default NavBar;

