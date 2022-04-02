import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar} from 'react-bootstrap';
import '../style.css';
import { Link } from "react-router-dom";


const Navb = () => {
	
return (
	<>
	
	<Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
	<Navbar.Brand href="/" ><h1>My Adventures</h1></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-target="#navbarScroll" />
		<Navbar.Collapse  id="basic-navbar-nav"> 
		<Nav>  
		<Nav.Link as={Link} to="/">
		<span className="navItem">HOME</span>
		</Nav.Link>
		<Nav.Link as={Link} to="/gallery" >
		<span className="navItem">GALLERY</span>
		</Nav.Link>
		<Nav.Link as={Link} to="/about" >
		<span className="navItem">ABOUT</span>
		</Nav.Link>
		</Nav>
		</Navbar.Collapse>
	</Navbar>
	</>
);
};
export default Navb;

