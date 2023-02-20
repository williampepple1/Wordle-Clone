import { acceptableWordArr } from "../../Assets/acceptableWords";

const startDate = new Date("1 Mar 2022");
const calculateTime = (event, startDate) => {
    return (event.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
}
const getIndexUsingTime = () => {
   const time = calculateTime(new Date(), startDate);
   return Math.floor(Math.abs(time)) % acceptableWordArr.length;
} 

let todaysWord = acceptableWordArr[getIndexUsingTime()].toUpperCase();

const checkIsAcceptableWord = (word) => {
  if (word.length < 5) {
    return false;
  }
  else{
    if (acceptableWordArr.includes(word.toLowerCase())) {
      return true
    }
    else {
      return false;
    }
  }
}

// This function is used for checking whether the word entered is correct or now. 
// It uses `type` parameter and then performs the relevant operations depending on the word's type.
// It returns the respObj object which contains elements that check the validity of the word, 
// the type of the word (correct or incorrect or wrongly placed) and the state of each letter in the word. 
const getObj = (type, word) => {
  let respObj = {
    "isValid": false,
    "letterStateArr":["default","default","default","default","default"],
    "type": type
  }  

  switch (type) {
    case "correct":
      respObj.isValid = true
      respObj.letterStateArr = ["correct","correct","correct","correct","correct"];
      break;

    case "incorrect":
      respObj.isValid = true
      let arr = [];
      for(let i=0;i<word.length;i++){
        if(todaysWord.includes(word[i])){
          if(word[i]===todaysWord[i]){
            arr.push("correct");
          }else{
            arr.push("present");
          }
        }else{
          arr.push("incorrect")
        }
      }
      respObj.letterStateArr = arr;
      break;

    default:
      respObj.isValid = false;
      break;
  }
  return respObj;
}

export const validateWord = (word) => {
  if (checkIsAcceptableWord(word)) {
    if (word === todaysWord) {
      return getObj("correct", word);
    }
    else {
      return getObj("incorrect", word);
    }
  }
  else {
    return getObj("unacceptable")
  }
}