import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
      
   <>
    <Navbar className=" d-flex justify-content-start navlist "  variant="light">
        <Container className=" d-flex justify-content-start mx-0 ">
            <Nav className=" d-flex justify-content-start gap-5 " >
                        <Link className='list-item text-decoration-none text-white'  to="/">
                            <b>Bella Swan</b> </Link>  
                <Link className='list-item text-decoration-none text-white' to="/">Home</Link> 
               <Link className='list-item text-decoration-none text-white' to="/turkey-map">Turkey Map</Link>  
                <Link className='list-item text-decoration-none text-white' to="/turkey-cities">Turkey Cities</Link>  
            </Nav>
        </Container>
    </Navbar>
    <div >
            
            
    </div>
</>
  )
}

export default Header