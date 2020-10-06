function writeCards(names, type) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return thankYouCards
}

function countDown(integer) {
    let i = integer;
    while (i > -1) {
        console.log(i);
        i--;
    }
}
