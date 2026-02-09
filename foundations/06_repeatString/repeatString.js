const repeatString = function(text,numberOfCopies) {
  if(numberOfCopies < 0){
    text = "ERROR"
  }else{
    for(let counter = 0;counter<numberOfCopies;counter++) {
      text+=text;
    }
  }
   
   return text;
};
let copyString = repeatString("hey",-3)
console.log(copyString);
// Do not edit below this line
module.exports = repeatString;
