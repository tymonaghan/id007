import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import films from '../data/Films';
import actors from '../data/Actors';

const SingleFilm = () => {
  const params = useParams();
  const filmId = params.filmId;

  const currentFilm = films.find((film) => +film.id === +filmId);
  const currentActor = actors.find((actor) =>
    actor.films.includes(currentFilm.id)
  );

  const navigate = useNavigate();
  return (
    <Container>
      <Button
        className="m-2"
        onClick={() => {
          navigate(`/films`);
        }}
      >
        {'<< Back to browse movies'}
      </Button>
      <Card bg="light" text="dark" className="my-2">
        <Stack direction="horizontal">
          {/* <Col className="ms-auto"> */}
          <Image
            style={{ maxHeight: '9rem' }}
            fluid
            src={`../${currentActor.imageUrl}`}
            onClick={() => {
              navigate(`/actors`);
            }}
          />
          {/* </Col> */}
          {/* <Col className="ms-auto"> */}
          <Card.Body>
            <Card.Title>{currentFilm.name}</Card.Title>

            <Card.Text>
              Starring <Link to="/actors">{currentActor.name}</Link>
              <br />
              <strong>{currentFilm.year}</strong>
              <br />
              <strong>villain: </strong>
              {currentFilm.villain}
              <br />
              <strong>women: </strong>
              {currentFilm.women}
              <br />
              <strong>other notes: </strong>
              {currentFilm.notes}
            </Card.Text>
          </Card.Body>
          {/* </Col> */}
        </Stack>
      </Card>
    </Container>
  );
};

export default SingleFilm;
