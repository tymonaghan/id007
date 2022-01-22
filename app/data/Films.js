class Film {
  constructor(id, name, year, actorId) {
    (this.id = id),
      (this.name = name),
      (this.year = year),
      (this.actorId = actorId);
  }
}

const drno = new Film(1, 'Dr. No', 1962, 1);
const fromrussiawithlove = new Film(2, 'From Russia With Love', 1963, 1);

const ohmss = new Film(6, "On Her Majesty's Secret Service", 1969, 2);

const liveandletdie = new Film(8, 'Live and Let Die', 1973, 3);
const moonraker = new Film(11, 'Moonraker', 1979, 3);

const thelivingdaylights = new Film(15, 'The Living Daylights', 1987, 4);
const licencetokill = new Film(16, 'Licence to Kill', 1989, 4);

const goldeneye = new Film(17, 'GoldenEye', 1995, 5);
const theworldisnotenough = new Film(19, 'The World is Not Enough', 1999, 5);

const casinoroyale = new Film(21, 'Casino Royale', 2006, 6);
const notimetodie = new Film(25, 'No Time to Die', 2021, 6);

export default [
  drno,
  fromrussiawithlove,
  ohmss,
  liveandletdie,
  moonraker,
  thelivingdaylights,
  licencetokill,
  goldeneye,
  theworldisnotenough,
  casinoroyale,
  notimetodie,
];
