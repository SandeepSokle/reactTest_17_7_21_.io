let express = require("express");

let data = require("./data.json");

let server = express();

server.get("/animals", function (req, res) {
  res.json(data);
});


server.get("/city", function (req, res) {
  let allAnimals = data.map(function (el) {
    return el.city;
  });

let uniqueAnimalsBreads = [];

for (let i = 0; i < allAnimals.length; i++) {
let animalCity = allAnimals[i];
let index = uniqueAnimalsBreads.findIndex(function (el) {
  return el == animalCity;
});

if (index == -1) {
  uniqueAnimalsBreads.push(allAnimals[i]);
}
}

res.json(uniqueAnimalsBreads);
});


server.get("/animal", function (req, res) {
  let allAnimals = data.map(function (el) {
    return el.animal;
  });

let uniqueAnimalsBreads = [];

for (let i = 0; i < allAnimals.length; i++) {
let animalType = allAnimals[i];
let index = uniqueAnimalsBreads.findIndex(function (el) {
  return el == animalType;
});

if (index == -1) {
  uniqueAnimalsBreads.push(allAnimals[i]);
}
}

res.json(uniqueAnimalsBreads);
});



server.get("/breed", function (req, res) {
  let allAnimals = data.map(function (el) {
    return el.breed;
  });

let uniqueAnimalsBreads = [];

for (let i = 0; i < allAnimals.length; i++) {
let animalBreedType = allAnimals[i];
let index = uniqueAnimalsBreads.findIndex(function (el) {
  return el == animalBreedType;
});

if (index == -1) {
  uniqueAnimalsBreads.push(allAnimals[i]);
}
}

res.json(uniqueAnimalsBreads);
});



server.listen(4000);