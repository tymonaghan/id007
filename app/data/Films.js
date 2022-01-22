class Film {
  constructor(
    id,
    name,
    year,
    actorId,
    villain = 'to be added',
    women = 'to be added',
    notes = 'to be added'
  ) {
    (this.id = id),
      (this.name = name),
      (this.year = year),
      (this.actorId = actorId);
    this.villain = villain;
    this.women = women;
    this.notes = notes;
  }
}

const drno = new Film(
  1,
  'Dr. No',
  1962,
  1,
  'Dr. No was trying to disrupt satellite launches or something from an offshore platform.',
  "Honey Ryder, the chick in the bikini with the knife singing 'underneath the mango tree' constantly",
  "Quarrel was Bond's buddy who sailed Bond to Crab Key. Quarrel got killed by a flamethrower tank ('dragon')"
);
const fromrussiawithlove = new Film(2, 'From Russia With Love', 1963, 1);
const goldfinger = new Film(3, 'Goldfinger', 1964, 1);
const thunderball = new Film(4, 'Thunderball', 1965, 1);
const yoltwice = new Film(5, 'You Only Live Twice', 1967, 1);
const diamonds = new Film(7, 'Diamonds are Forever', 1971, 1);

const ohmss = new Film(6, "On Her Majesty's Secret Service", 1969, 2);

const liveandletdie = new Film(8, 'Live and Let Die', 1973, 3);
const manwiththegoldengun = new Film(9, 'The Man with the Golden Gun', 1974, 3);
const spywholovedme = new Film(10, 'The Spy Who Loved Me', 1977, 3);
const moonraker = new Film(11, 'Moonraker', 1979, 3);
const fyeo = new Film(13, 'For Your Eyes Only', 1981, 3);
const octopussy = new Film(14, 'Octopussy', 1983, 3);
const viewtoakill = new Film(15, 'A View to a Kill', 1985, 3);

const thelivingdaylights = new Film(15, 'The Living Daylights', 1987, 4);
const licencetokill = new Film(16, 'Licence to Kill', 1989, 4);

const goldeneye = new Film(17, 'GoldenEye', 1995, 5);
const tomorrowneverdies = new Film(18, 'Tomorrow Never Dies', 1997, 5);
const theworldisnotenough = new Film(19, 'The World is Not Enough', 1999, 5);
const dieanotherday = new Film(20, 'Die Another Day', 2002, 5);

const casinoroyale = new Film(21, 'Casino Royale', 2006, 6);
const quantum = new Film(22, 'Quantum of Solace', 2008, 6);
const skyfall = new Film(23, 'Skyfall', 2012, 6);
const spectre = new Film(24, 'Spectre', 2015, 6);
const notimetodie = new Film(25, 'No Time to Die', 2021, 6);

export default [
  drno,
  fromrussiawithlove,
  goldfinger,
  thunderball,
  yoltwice,
  ohmss,
  diamonds,
  liveandletdie,
  manwiththegoldengun,
  spywholovedme,
  moonraker,
  fyeo,
  octopussy,
  viewtoakill,
  thelivingdaylights,
  licencetokill,
  goldeneye,
  tomorrowneverdies,
  theworldisnotenough,
  dieanotherday,
  casinoroyale,
  quantum,
  skyfall,
  spectre,
  notimetodie,
];
