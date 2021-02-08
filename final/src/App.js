import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Page/css/footer.css'
import './Page/css/form.css';
import './Page/css/img.css';
import './Page/css/style.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-slideshow-image/dist/styles.css'
import { Alert } from 'react-st-modal';

import Home from './animate/animatehome'; 
import About from './animate/animateAbout'; 
import Contact from './animate/animatecontact';
import Blog from './animate/animateblog';
import Footer from './Page/footer';
import Loginform from './Page/Createaccount';



class App extends Component { 
  render() { 
    return ( 

		<Router>
			<Container fluid>
				<Navbar className='bg-dark' variant='dark' expand="lg" fixed="top">

				<Navbar.Brand href="#home">The Snecker</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />

				<Navbar.Collapse id="basic-navbar-nav">

					<Nav className="mr-auto">

						<Nav.Link ><Link to="/">Home</Link> </Nav.Link>
						<Nav.Link ><Link to="/about">About Us</Link></Nav.Link>
						<Nav.Link ><Link to="/contact">Contact us</Link></Nav.Link>
						<Nav.Link ><Link to="/blog">Blog</Link></Nav.Link>					

						<NavDropdown title="SHOP" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Men</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Women</NavDropdown.Item>       					
						</NavDropdown> 

						<Nav.Link onClick={async () => {await Alert(<Loginform/>);}}>
							Create Account
						</Nav.Link>
					</Nav>

					<Form inline>
						<FormControl type="text" placeholder="Search" className="mr-sm-2" />
						<Button variant="outline-success">Search</Button>
					</Form>

				</Navbar.Collapse>
				</Navbar>
			</Container>
			
			

			<Switch> 
			
				<Route exact path='/' component={Home}></Route> 
				<Route exact path='/about' component={About}></Route> 
				<Route exact path='/contact' component={Contact}></Route> 
				<Route exact path='/blog' component={Blog}></Route> 
				
			</Switch>
			
			
			<Footer/>

		</Router>
      
   ); 
  } 
} 
  
export default App; 

