function standardizingString(defaultText){
  return defaultText.trim();
}
function extractfirstFragment(text){
  return text.slice(0,text.length/2);
}
function extractSecondFragment(text){
  return text.slice(text.length/2);
}
/*
function reversingString(stringFragmentA,stringFragmentB,text){
  let genString = "";
  for(let extCount=0;extCount<text.length/2;extCount++){
    for(let innerCount=text.length;innerCount>text.lenght/2;innerCount--){

    }
  }
}*/
const reverseString = function(text) {
  if(text=""){
    return text
  }else{
    //const standardString=standardizingString(text);
    //const firstFragment=extractfirstFragment(standardString);
    //const secondFragment=extractSecondFragment(standardString);
    //const reversedString=reversingString(firstFragment,secondFragment,standardString);
    //return reversedString;
}
}

// Do not edit below this line
module.exports = reverseString;
