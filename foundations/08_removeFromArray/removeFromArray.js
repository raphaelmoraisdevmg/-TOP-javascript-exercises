const removeFromArray = function(numbersArray,item) {
  let finalArray = [];
  for(let count = 0;count<=numbersArray.length;count++){
    if(numbersArray[count]==item){

    }else{
      finalArray.push(numbersArray[count]);
    }
  }
  return finalArray;
};


// Do not edit below this line
module.exports = removeFromArray;
