import createEle from "../utils/createEle";
import { visuals } from "../utils/clearAnchor";
import { ranNum } from "./team/renderBugs";

const randomInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min); // function to create a random interval between two numbers

const renderConfetti = () => {
  // defines a mutable variable
  let confettiDiv;
  if (document.getElementById("confetti"))
    return; // returns immediately if we already have a confetti container on screen
  // define a confetti div container
  else confettiDiv = createEle("div", "", visuals); // creates a div to render confetti within and appends to the visuals container
  confettiDiv.id = "confetti"; // applies an id of confetti to our confetti container
  let count = randomInterval(3, 11); // defines our maximum number of confettis to generate
  for (let i = 1; i <= count; i++) {
    const confetti = createEle("div", "", confettiDiv); // creates a random number of confetti divs (up to 20)
    const happyMedium = () => randomInterval(48, 58); // creates a function to generate a number within a constraint of 41 and 59 which generally greates a pretty gradient effect (no darks, no lights)
    // Generate a random time to run animation
    const randomTime = `${Math.floor(Math.random() * 3) + 1}s infinite`;
    // I have 3 animations in my SCSS so I want to randomly pick one, this is an array of those animations
    const animations = ["rotate", "roll", "hue-rotate"];
    const ranHSL = () =>
      `hsl(${ranNum(360)}deg,${happyMedium()}%,${happyMedium()}%)`; // function that generates a random HSL color
    const randomGradient = () =>
      `linear-gradient(${ranNum(360)}deg, ${ranHSL()}, ${ranHSL()})`; // creates a function to generate a random gradient
    const randomLine = () => randomInterval(1,36);// random interval for a square to be between 2 and 22 px
    const screen = () => randomInterval(2,88); // makes the screen randomly as large as 93vw but no greater
    confetti.style = `
      border-radius: ${ranNum(50)}px;
      width: ${randomLine()}px;
      height: ${randomLine()}px;
      left: ${screen()}vw;
      top: ${screen()}vh;
      background: ${ranHSL()};
      opacity: ${randomInterval(20, 100)}%;
      );
    }
    `; // declares each style to be  dynamically generated
    // Set the animation to be a random animation for the randomTime defined above
    confetti.style.animation = `${
      animations[Math.floor(Math.random() * animations.length)]
    } ${randomTime}`;
  }
};

export default renderConfetti;
