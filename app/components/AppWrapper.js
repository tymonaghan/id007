import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const AppWrapper = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="me-auto">
            id007
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#browse">Browse</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      Sup fam
    </>
  );
};

export default AppWrapper;
