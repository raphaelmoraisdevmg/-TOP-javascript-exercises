const repeatString = function(text,numberOfCopies) {
  let copyString = ""
  if(numberOfCopies < 0){
    copyString = "ERROR"
  }else if(numberOfCopies  == 0){
    copyString ="";
  } else if(numberOfCopies == 1){
    copyString = text;
  }else{
     for(let counter=0;counter<numberOfCopies;counter++){
      copyString += text;
   }
  }
    
    return copyString;
};
// Do not edit below this line
module.exports = repeatString;
