
function writeCards(namesArray, eventName) {
  let newArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArray;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}