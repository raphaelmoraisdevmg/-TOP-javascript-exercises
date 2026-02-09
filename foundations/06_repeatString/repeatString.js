const repeatString = function(text,numberOfCopies) {
  if(numberOfCopies < 0){
    text = "ERROR"
  }else if(numberOfCopies == 0){
    text ="";
  } else{
    text = text;
  }
   return text;
};
// Do not edit below this line
module.exports = repeatString;
