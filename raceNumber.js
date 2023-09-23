//Determines Racing time according to age

let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
let age = 19;
if (age >= 18 && registeredEarly === true){x
  raceNumber += 1000;
}
if (age >= 18 && registeredEarly === true) {
  console.log('You will race at 9:30 am.');
}else if (age >= 18 && registeredEarly === false){
   console.log('${raceNumber}You will race at 9:00 am.');
}else if (age === 18){
  console.log('See registration desk.');
}else{
  console.log('${raceNumber}You will race at 12:30 pm.');
}
