//Eightball prediction

let userName = '';
if (userName === ''){
  console.log('Hello')
}else{
  console.log('Hello, ${userName}!')
};

let userQuestion = '';
console.log('${userName} : ${userQuestion}?');
let randomNumber = Math.floor(Math.random()* 8);
let eightBall = '';
switch (randomNumber){
  case  1:
  console.log('It is certain');
  break;
  case  2:
  console.log('It is decidedly so');
  break;
  case  3:
  console.log('Reply hazy try again');
  break;
  case  4:
  console.log('Cannot predict no');
  break;
  case  5:
  console.log('Do not count on it');
  break;
  case  6:
  console.log('My sources say no');
  break;
  case  7:
  console.log('Outlook not so good');
  break;
  case  8:
  console.log('Signs point to yes');
  break;
default:
    console.log('Nothing here.');
    break;
}
console.log(randomNumber)
