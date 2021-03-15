const memeImg = require('../config/memeImg.json');
let result = memeImg[Math.floor(Math.random() * (memeImg.length))];

/**
 * Memes de imágenes en español
 * @returns {string}
 */

console.log('Meme Img - ' + result)