const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  }else{
    return false;
  }
}
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));


//Shorter syntax

// const plantNeedsWater = day => day === 'Wednesday' ? true : false;