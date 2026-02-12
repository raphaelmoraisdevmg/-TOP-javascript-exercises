function standardizingString(defaultText){
  return defaultText.trim();
}
function extractfirstFragment(text){
  return text.slice(0,text.length/2);
}
function extractSecondFragment(text){
  return text.slice(text.length/2);
}

function reversingString(stringFragmentA,stringFragmentB,text){
  let genString = "";
  // for(let extCount=0;extCount<text.length/2;extCount++){
  //   genString+=text[extCount];
  //   for(let innerCount=text.length;innerCount==text.lenght/2;innerCount--){
      
  //   }
  // }
  let auxA="",auxB="";
  for(let count = 0; count == text.length;count++){
    if(count<=text.length/2){
      auxB+=text[count]
    }else{
      auxA+=text[count];
    }
  }
   genString = auxA + auxB;
  return genString
}
const reverseString = function(text) {
  if(text==""){
    return text
  }else{
    const standardString=standardizingString(text);
    const firstFragment=extractfirstFragment(standardString);
    const secondFragment=extractSecondFragment(standardString);
    const reversedString=reversingString(firstFragment,secondFragment,standardString);
    return reversedString;
}
}
// Do not edit below this line
module.exports = reverseString;
