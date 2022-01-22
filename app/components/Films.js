import React from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import films from '../data/Films';
import actors from '../data/Actors';

const Films = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>Browse by Film</h1>
      {films.map((film, key) => {
        console.dir(film);
        const actor = actors.find((actor) => actor.films.includes(film.id));
        return (
          <Card
            key={key}
            className="my-3"
            style={{ maxHeight: '10rem' }}
            onClick={() => {
              navigate(`/films/${film.id}`);
            }}
          >
            <Stack direction="horizontal">
              {/* <Col className="ms-auto"> */}
              <Image
                style={{ maxHeight: '9rem' }}
                fluid
                src={`./${actor.imageUrl}`}
              />
              {/* </Col> */}
              {/* <Col className="ms-auto"> */}
              <Card.Body>
                <Card.Title>{film.name}</Card.Title>

                <Card.Text>
                  Starring {actor.name}
                  <br />
                  <strong>{film.year}</strong>
                </Card.Text>
              </Card.Body>
              {/* </Col> */}
            </Stack>
          </Card>
        );
      })}
    </Container>
  );
};

export default Films;
