import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    const date = new Date()
    console.log(date)
    const day = new Date().getDate()
    const year=new Date().getFullYear()
    const month=new Date().getUTCMonth()
    return (
      
   <>
    <Navbar className=" d-flex justify-content-between navlist "  variant="light">
        <Container className=" mx-0 ">
            <Nav className=" d-flex justify-content-start gap-3 " >
                        <Link className='list-item bella text-decoration-none text-white'  to="/">
                            <b>Bella Swan</b> </Link>  
                <Link className='list-item text-decoration-none text-white' to="/">Home</Link> 
               <Link className='list-item text-decoration-none text-white' to="/turkey-map">Turkey Map</Link>  
                <Link className='list-item text-decoration-none text-white' to="/turkey-cities">Turkey Cities</Link>  
            </Nav>
                </Container>
                <div className='text-white mx-2'>{day}/{month}/{year}</div>
                    
               
    </Navbar>
    <div >
            
            
    </div>
</>
  )
}

export default Header