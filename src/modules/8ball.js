const resp = require('../config/8ball.json');
let result = resp[Math.floor(Math.random() * (resp.length))];
/**
 * Respuesta de Magic 8-Ball
 * @returns {string}
 */

console.log('8ball - ' + result)