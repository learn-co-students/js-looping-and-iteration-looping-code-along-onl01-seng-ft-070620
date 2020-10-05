// function uses a for loop to return an array of thank you messages
function writeCards(strings, event) {
  let message = [];
  for (let i = 0; i < strings.length; i++) {
    message.push(`Thank you, ${strings[i]}, for the wonderful ${event} gift!`);
  }
  return message;
}

// function uses a while loop to count down to 0
function countDown(start) {
  while (start >= 0) {
    console.log(start);
    start --;
  }
}
