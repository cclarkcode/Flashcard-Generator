var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js')

var newcard = new BasicCard('He was the first African-American president of the United States','Barack Obama');

console.log(newcard.front);
console.log(newcard.back);

var othernewcard = new ClozeCard('Barack Obama was the first African-American president of the United States.','Barack Obuma');

console.log(othernewcard.partial);
console.log(othernewcard.cloze);

var othernewcard1 = new ClozeCard('Barack Obama was the first African-American president of the United States.','Barack Obama');

console.log(othernewcard1.partial);
console.log(othernewcard1.cloze);

