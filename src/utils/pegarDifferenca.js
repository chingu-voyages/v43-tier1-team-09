import badwordsArray from "./data/badwords.json";
import funnyPhrases from "./data/funnies.json";
import renderBugs from '../views/team/renderBugs';

// randomly picks a phrase from an array based on the length of itself
const funnyPhrase = () =>
  funnyPhrases[Math.floor(Math.random() * funnyPhrases.length)];

// declare a variable to count up from
let count = 0;

// a function to take in an array of fields and check if it is PG or not
const pegarDifferenca = (responses) => {
  let caughtWords;
  // catches curse words and places them in an array
  if (responses)
    caughtWords = responses.filter((word) => badwordsArray.includes(word));
  if (caughtWords && caughtWords.length > 0) {
    count++ // if we detect a cuss word increment our counter
    let response = funnyPhrase(); // picks a funny phrase
    alert(response); // sends an alert to the user 
    if (count > 2) renderBugs() // if user has a potty mouth, flood them with bugs!
    return false
  }
  // checks if we caught any naughty words and if we did we alert the user and console error
  else return true;
};

export default pegarDifferenca;
