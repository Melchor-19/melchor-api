const memeImg = require('../config/memeImg.json');
let result = memeImg[Math.floor(Math.random() * (memeImg.length))];

console.log('Meme Img - ' + result)