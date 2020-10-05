// Code your solutions in this file
function writeCards(people, occasion) {
    let arr = []
    for (let i = 0; i < people.length; i++) {
        arr.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`)
    }
    return arr
}

function countDown(n) {
    while (n >= 0) {
        console.log(n)
        n--
    }
}