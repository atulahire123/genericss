import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <Navbar expand="md" bg='dark' className="navbar-dark border-2 border-bottom bg-info mt-5 text-white" >
        <Container className='justify-content-between'>
            <Navbar.Brand href='#home'>
                <h1>The Generics</h1>
            </Navbar.Brand>

            <Nav className="gap-5 justify-content-end" color='red'>
            <Nav.Item>
              <Nav.Link href="/">Youtube</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/'>Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/'>Facebook</Nav.Link>
            </Nav.Item>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Footer
