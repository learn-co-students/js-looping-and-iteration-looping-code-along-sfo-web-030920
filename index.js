// Code your solutions in this file

function writeCards (arr, surprise) {
  let messages = []
    messages = arr.map( name => {
     return `Thank you, ${name}, for the wonderful ${surprise} gift!`
  })
  return messages;
}


function countDown(integer) {
  let i = integer;
  while (i >= 0) {
    console.log(i--);
  }
}