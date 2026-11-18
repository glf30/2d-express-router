const { v4: uuid } = require("uuid");

let musicians = [
  {
    id: uuid(),
    name: "Carson Pace",
    age: 30,
    instrument: "vocals"
  },
  {
    id: uuid(),
    name: "Anthony Green",
    age: 44,
    instrument: "vocals"
  },
  {
    id: uuid(),
    name: "Lizzy McAlpine",
    age: 27,
    instrument: "vocals"
  },
  {
    id: uuid(),
    name: "Mike Kinesella",
    age: 49,
    instrument: "guitar"
  },
  {
    id: uuid(),
    name: "Zach Hill",
    age: 46,
    instrument: "drums"
  },
  {
    id: uuid(),
    name: "Yvette Young",
    age: 35,
    instrument: "guitar"
  },
  {
    id: uuid(),
    name: "Jose Lopez",
    age: 29,
    instrument: "bass"
  },
  {
    id: uuid(),
    name: "Adam Carson",
    age: 51,
    instrument: "drums"
  },
  {
    id: uuid(),
    name: "Jonny Greenwood",
    age: 55,
    instrument: "guitar"
  },
];

module.exports = musicians;
