const resp = require('../config/8ball.json');
let result = resp[Math.floor(Math.random() * (resp.length))];

console.log('8ball - ' + result)