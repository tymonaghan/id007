import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Routes, Route } from 'react-router-dom';
import { Home, Films } from '.';

const AppWrapper = () => {
  return (
    <div>
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </div>
  );
};

export default AppWrapper;
