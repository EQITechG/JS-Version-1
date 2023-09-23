
/*+++++++++++++++++++++++*/

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' +vacationSpots[i]);
}
  
/*+++++++++++++++++++++++*/


// Write your code below
const bobsFollowers = ['Mike','Linda','James','Tom'];
const tinasFollowers = ['Mary','Mike','James'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}
console.log(mutualFollowers);

/*+++++++++++++++++++++++*/

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = '';
while (currentCard !== 'spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
}




/*+++++++++++++++++++++++*/

// Write your code below
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;
do{
  cupsAdded++;
  console.log(cupsAdded)
}while (cupsAdded < cupsOfSugarNeeded);




/*+++++++++++++++++++++++*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
    console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }

}
console.log("And if you don't know, now you know.");




/*+++++++++++++++++++++++*/

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
isTwoPlusTwo();
isTwoPlusTwo.name;


/*+++++++++++++++++++++++*/
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  if (checkA === checkB){
    return checkB;
  }else{
    return 'inconsistent results';
  }

}

console.log(checkConsistentOutput(addTwo,4));

/*+++++++++++++++++++++++*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));

//and the one below is now the same, above one is used for concantetion of arrays, but one below is used for just one variable, the difference is `` and '' or maybe i'm wrong the bothe do the same thing perhaps but the commas ontop are diff.//

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below


fruits.forEach(fruit => console.log('I want to eat a ' +fruit));

/*+++++++++++++++++++++++*/