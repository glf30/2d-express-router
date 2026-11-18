const { v4: uuid } = require("uuid");

let actors = [
  {
    id: uuid(),
    name: "Nathan Fielder",
    age: 42,
    totalFilms: 2,
  },
  {
    id: uuid(),
    name: "Emma Stone",
    age: 36,
    totalFilms: 20,
  },
  {
    id: uuid(),
    name: "Aaron Paul",
    age: 45,
    totalFilms: 12,
  },
  {
    id: uuid(),
    name: "Samuel L Jackson",
    age: 73,
    totalFilms: 65,
  },
  {
    id: uuid(),
    name: "Robert Pattinson",
    age: 39,
    totalFilms: 25,
  },
  {
    id: uuid(),
    name: "Amanda Seyfried",
    age: 40,
    totalFilms: 18,
  },
  {
    id: uuid(),
    name: "Ryan Gosling",
    age: 45,
    totalFilms: 22,
  },
  {
    id: uuid(),
    name: "Florence Pugh",
    age: 30,
    totalFilms: 15,
  },
];

module.exports = actors;
