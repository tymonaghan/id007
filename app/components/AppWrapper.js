import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Routes, Route, Link } from 'react-router-dom';
import { Home, Films, Actors, SingleFilm } from '.';

const AppWrapper = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="me-auto">
            <Stack direction="horizontal">
              <Image src={`favicon.ico`} />
              <Link to="/">
                <h1>id007</h1>
              </Link>
            </Stack>
          </Navbar.Brand>
          <Nav>
            <Nav.Link disabled href="#browse">
              Browse
            </Nav.Link>
            <Nav.Link disabled href="#search">
              Search
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/films" element={<Films />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/films/:filmId" element={<SingleFilm />} />
      </Routes>
    </div>
  );
};

export default AppWrapper;
