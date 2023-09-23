const kelvin = 285;
// The variable kelvin stores the value constantly 
let celsius = kelvin -273;
// Converting Kelvin to celsuis
let fahrenheit = celsius * (9/5) + 32;
// Converting Celsuis to Fahrenheit
fahrenheit =  Math.floor(fahrenheit);
// rounding off Fahrenheit numbers
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);