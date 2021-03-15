const fact = require('../config/datos.json');
let animals = fact.animals
let result = animals[Math.floor(Math.random() * (animals.length))];
/**
 * Datos informativos y/o curiosos
 * @returns {string}
 */
console.log('Facts - ' + result)