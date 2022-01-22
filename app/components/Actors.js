import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { Link } from 'react-router-dom';

import films from '../data/Films';
import actors from '../data/Actors';

const Actors = () => {
  return (
    <Container>
      <h1>Browse by Actor</h1>
      {actors.map((actor, key) => {
        console.dir(actor);
        const thisActorsFilms = films.filter(
          (film) => film.actorId === actor.id
        );
        return (
          <Card key={key} className="my-3">
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
                <Card.Title>{actor.name}</Card.Title>

                <h3>Starred in:</h3>
                <ul>
                  {thisActorsFilms.map((film, key) => (
                    <li key={key}>
                      <Link to={`/films/${film.id}`}>{film.name}</Link>
                    </li>
                  ))}
                </ul>
              </Card.Body>
              {/* </Col> */}
            </Stack>
          </Card>
        );
      })}
    </Container>
  );
};

export default Actors;
