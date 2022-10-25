import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
   <>
    <Navbar bg="light" variant="light">
        <Container>
            
                  
            <Nav className="me-auto">
                <Nav.Link className=""  href="#home">Weather App</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#Map">Turkey Map</Nav.Link>
                <Nav.Link href="#List">Turkey Cities</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    <div >
            <Button variant="warning" className='m-1 w-20'>
            Turkey Map
            </Button>
            <Button variant="warning" className='m-1 w-20'>
            List of Countries
            </Button>
            
    </div>
</>
  )
}

export default Header