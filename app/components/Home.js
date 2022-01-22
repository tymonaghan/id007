import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Stack gap={3} sm="auto" className="m-5">
        <Row>
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/films`);
            }}
          >
            Browse by Movie
          </Button>
        </Row>
        <Row>
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/actors`);
            }}
          >
            Browse by Actor
          </Button>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row className="mt-auto">
          <Button disabled variant="outline-secondary">
            Search
          </Button>
        </Row>
      </Stack>
    </Container>
  );
}

export default Home;
