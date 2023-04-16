import createEle from '../utils/createEle';
import { visuals } from '../utils/clearAnchor';
import { ranNum } from './team/renderBugs';

const renderConfetti = () => {
  // defines a mutable variable
  let confettiDiv;
  if (document.getElementById("confetti"))
    return; // returns immediately if we already have a confetti container on screen
  // define a confetti div container
  else confettiDiv = createEle("div", "", visuals); // creates a div to render confetti within and appends to the visuals container
  confettiDiv.id = "confetti"; // applies an id of confetti to our confetti container
  let count = ranNum(20) + 2; // defines our maximum number of confettis to generate
  for (let i = 1; i <= count; i++) {
    const confetti = createEle('div', '', confettiDiv) // creates a random number of confetti divs (up to 20)

    // Generate a random time to run animation
    const randomTime = `${Math.floor(Math.random() * 3) + 1}s infinite`;
    // I have 3 animations in my SCSS so I want to randomly pick one, this is an array of those animations
    const animations = ["rotate", "roll", "hue-rotate"];
    confetti.style = `
      border-radius: ${ranNum(50)}px;
      width: ${1 + ranNum(18)}px;
      height: ${1 + ranNum(18)}px;
      left: ${ranNum(88)}vw;
      top: ${ranNum(88)}vh;
      background: rgb(
        ${ranNum(255)},
        ${ranNum(255)},
        ${ranNum(255)}
      );
    }
    ` // declares each style to be  dynamically generated
    // Set the animation to be a random animation for the randomTime defined above
    confetti.style.animation = `${
      animations[Math.floor(Math.random() * animations.length)]
    } ${randomTime}`;
}


export default renderConfetti;