import createEle from "../utils/createEle";
import { visuals } from "../utils/clearAnchor";

const renderConfetti = () => {
  // defines a mutable variable
  let confettiDiv;
  if (document.getElementById("confetti"))
    return; // returns immediately if we already have a confetti container on screen
  // define a confetti div container
  else confettiDiv = createEle("div", "", visuals); // creates a div to render confetti within and appends to the visuals container
  confettiDiv.id = "confetti"; // applies an id of confetti to our confetti container

  for (let i = 1; i <= 5; i++) {
    const confetti = createEle("div", "", confettiDiv); // creates a confetti div (up to 5)
    // for the classList we add in the number
    confetti.classList.add(`confetti-${i}`); // passes in our
    // Generate a random time to run animation
    const randomTime = `${Math.floor(Math.random() * 3) + 1}s infinite`;
    // I have 3 animations in my SCSS so I want to randomly pick one, this is an array of those animations
    const animations = ["rotate", "roll", "hue-rotate"];
    // Set the animation to be a random animation for the randomTime defined above
    confetti.style.animation = `${
      animations[Math.floor(Math.random() * animations.length)]
    } ${randomTime}`;
  }
};

export default renderConfetti;