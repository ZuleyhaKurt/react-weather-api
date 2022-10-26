import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
      
   <>
    <Navbar className=" d-flex justify-content-start " bg="light" variant="light">
        <Container className=" d-flex justify-content-start mx-0">
            <Nav className=" d-flex justify-content-start gap-5 " >
                <Link className='text-decoration-none text-dark'  to="/">Bella </Link>  
                <Link className='text-decoration-none text-dark'  to="/">Weather App</Link>  
               <Link className='text-decoration-none text-dark' to="/">Home</Link> 
               <Link className='text-decoration-none text-dark' to="/turkey-map">Turkey Map</Link>  
                <Link className='text-decoration-none text-dark' to="/turkey-cities">Turkey Cities</Link>  
            </Nav>
        </Container>
    </Navbar>
    <div >
            
            
    </div>
</>
  )
}

export default Header