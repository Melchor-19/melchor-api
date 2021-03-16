function magicBall() {
/**
 * @name magicBall 
 * @description La bola mágica 8 le da respuestas a sus preguntas.
 * @returns {string}
*/
  const resp = require('../config/8ball.json');
  let result = resp[Math.floor(Math.random() * (resp.length))];
  return result;
}
module.exports = magicBall;