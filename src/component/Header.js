import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar} from 'react-bootstrap';
import '../style.css';


const Navb = () => {
	
return (
	<>
	
	<Navbar  collapseOnSelect expand="lg" variant="pills" bg="dark" className="navBar">
	<Navbar.Brand href="#home" > <span className="navItem">My Adventures</span></Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" data-bs-target="#navbarScroll" />
		<Navbar.Collapse  id="basic-navbar-nav"> 
		<Nav>  
		<Nav.Link href="/">
		<span className="navItem">Home</span>
		</Nav.Link>
		<Nav.Link href="/gallery" >
		<span className="navItem">Gallery</span>
		</Nav.Link>
		<Nav.Link href="/about" >
		<span className="navItem">About</span>
		</Nav.Link>
		</Nav>
		</Navbar.Collapse>
	</Navbar>
	</>
);
};

export default Navb;

