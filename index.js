const names = ["Ada", "Brendan", "Ali"]
const birthday = "birthday"

function writeCards(names, birthday) {
    let thankYouCards = []
    for ( let i=0; i < names.length; i++ ) {
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    return thankYouCards
}

function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }