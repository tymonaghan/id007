class Actor {
  constructor(id, name, films, imageUrl) {
    (this.id = id),
      (this.name = name),
      (this.films = films),
      (this.imageUrl = imageUrl);
  }

  listFilms() {
    this.films.forEach((film) => film.name);
  }
}

const connery = new Actor(
  1,
  'Sean Connery',
  [1, 2, 3, 4, 5, 7],
  'img/connery.png'
);
const lazenby = new Actor(2, 'George Lazenby', [6], 'img/lazenby.png');
const moore = new Actor(
  3,
  'Roger Moore',
  [8, 9, 10, 11, 12, 13, 14],
  'img/moore.png'
);
const dalton = new Actor(4, 'Timothy Dalton', [15, 16], 'img/dalton.png');
const brosnan = new Actor(
  5,
  'Pierce Brosnan',
  [17, 18, 19, 20],
  'img/brosnan.png'
);
const craig = new Actor(
  6,
  'Daniel Craig',
  [21, 22, 23, 24, 25],
  'img/craig.png'
);

export default [connery, lazenby, moore, dalton, brosnan, craig];
