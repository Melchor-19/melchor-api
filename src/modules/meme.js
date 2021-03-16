function memeVid() {
/**
 * @name memeVid
 * @description Devuelve un video de un meme
 * @returns {string}
*/
  const memeVid = require('../config/meme.json').vid;
  let video = memeVideo[Math.floor(Math.random() * (memeVideo))];
  return video;
}
module.exports = memeVid;

function memeImg() {
/**
 * @name memeImg 
 * @description Devuelve una imagen de un meme
 * @returns {string}
 */
 const memeImg = require('../config/meme.json').img;
 let image = memeImg[Math.floor(Math.random() * (memeImg.length))];
 return image;
}

module.exports = memeImg;