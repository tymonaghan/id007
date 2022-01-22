import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import films from '../data/Films';

const Films = () => {
  return (
    <Container>
      hey what up fam
      {films.forEach((film) => {
        return (
          <Card>
            <Card.Title>{film.name}</Card.Title>
          </Card>
        );
      })}
    </Container>
  );
};

export default Films;
