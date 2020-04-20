// Code your solutions in this file
//"Thank you, Ada, for the wonderful birthday gift!",

function writeCards(name, birthday){
    let messages = []
    for (let i = 0; i < name.length; i++){
        messages.push(`Thank you, ${name[i]}, for the wonderful ${birthday} gift!`);
    }
    return messages
}

function countDown(number){

    while (number >= 0){
        console.log(number--);
    }
}

