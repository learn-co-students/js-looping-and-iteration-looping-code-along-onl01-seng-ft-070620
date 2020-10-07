// Code your solutions in this file
const timeRanges = [];
const thankYou = [];

function writeCards(names) {
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYou;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    }
}