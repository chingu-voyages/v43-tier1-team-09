/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
export const anchor = document.querySelector("main");

const confetti = () => {
    // defines an array of numbers to create confetti from
    const confettis = [1, 2, 3, 4, 5];
    // For each confetti that we just created
    confettis.forEach(e => {
      // we create a div element to render on screen
      const confetti = document.createElement("div");
      // for the classList we add in the number
      confetti.classList.add(`confetti-${e}`);
      // Generate a random time to run animation
      const randomTime = `${Math.floor(Math.random() * 3)}s infinite`;
      // I have 3 animations in my SCSS so I want to randomly pick one, this is an array of those animations
      const animations = ["rotate", "roll", "hue-rotate"];
      // Set the animation to be a random animation for the randomTime defined above
      confetti.style.animation = `${
        animations[Math.floor(Math.random() * animations.length)]
      } ${randomTime}`;
      // prepends the confetti to the screen
      anchor.prepend(confetti);
    });
}
/* Function to empty the content of the anchor element */
function clearAnchor() {
  anchor.innerHTML = "";
  confetti()
}

export default clearAnchor;
