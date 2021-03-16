function factsAnimals() {
/**
 * @name factsAnimals 
 * @description Devuenve datos interesantes de animales
 * @returns {string}
*/
  const animals = require('../config/datos.json').animals;
  let respAnimal = animals[Math.floor(Math.random() * (animals.length))]; 
  return respAnimal;
}
module.exports = factsAnimals;