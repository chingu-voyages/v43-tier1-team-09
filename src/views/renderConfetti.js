import { visuals } from "../utils/clearAnchor";

const renderConfetti = () => {
  // defines a mutable variable
  let confettiDiv;
  if (document.getElementById("confetti"))
    return; // if we already have confetti just stop the function
  // define a confetti div container
  else confettiDiv = document.createElement("div");
  confettiDiv.id = "confetti";
  // defines an array of numbers to create confetti from
  const arr = [1, 2, 3, 4, 5, 6, 7]; // declares the number of confettis to place on screen (the length is all that matters really though)
  // For each confetti that we just created
  arr.forEach((e) => {
    // we create a div element to render on screen
    const confetti = document.createElement("div");
    // for the classList we add in the number
    confetti.classList.add(`confetti-${e}`);
    // Generate a random time to run animation
    const randomTime = `${Math.floor(Math.random() * 3) + 1}s infinite`;
    // I have 3 animations in my SCSS so I want to randomly pick one, this is an array of those animations
    const animations = ["rotate", "roll", "hue-rotate"];
    // Set the animation to be a random animation for the randomTime defined above
    confetti.style.animation = `${
      animations[Math.floor(Math.random() * animations.length)] // declare a random animation on the confetti object
    } ${randomTime}`; // for a random time
    confettiDiv.append(confetti); // append the confetti object to the confetti container
  });
  visuals.prepend(confettiDiv); // apend the confetti container to the visuals container
};

export default renderConfetti;
