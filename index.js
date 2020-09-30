let new_array = [];

function writeCards(name_array, event_name) {
  for (let i = 0; i < name_array.length; i++) {
    new_array.push(`Thank you, ${name_array[i]}, for the wonderful ${event_name} gift!`);
  }
  return new_array;
}

function countDown(num) {
  while (num > -1) {
    console.log(num);
    num--;
  }
}