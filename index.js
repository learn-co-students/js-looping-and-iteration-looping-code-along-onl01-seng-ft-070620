// Code your solutions in this file

function writeCards(recipients, event) {
    const messages = []

    for (let i = 0; i < recipients.length; i++) {
        messages.push(`Thank you, ${recipients[i]}, for the wonderful ${event} gift!`);
    }

    return messages
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
}