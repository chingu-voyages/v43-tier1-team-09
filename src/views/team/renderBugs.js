const ranNum = (num) => Math.floor(Math.random() * num); // function to define a random number
const renderBugs = () => {
  // defines a mutable variable
  let bugsDiv;
  if (document.getElementById("bugs")) return;
  // define a bugs div container
  else bugsDiv = document.createElement("div");
  bugsDiv.id = "bugs"; // sets div id to bugs to find later
  const releaseBugs = setInterval(() => {
    // we create a div element to render a bug on screen
    const bug = document.createElement("div"); // creates an element we can turn into a bug
    bug.innerHTML = `&#128027;`; // defines our bug emoji as the innerHTML of the container
    const animations = [
      "hue-rotate rotate",
      "rotate",
      "hue-rotate",
      "top-left-to-top-right",
      "top-left-to-bottom-right",
      "bottom-left-to-top-left hue-rotate",
    ]; // creates an array of animations to loop over
    const randomAnimation = () => animations[ranNum(animations.length)]; // function to create a random animation based upon the number of animations provided in the array
    bug.style = `position:absolute;top:${ranNum(88)}vh;left:${ranNum(
      88
    )}vw; transform: rotate(${ranNum(
      360
    )}deg); pointer-events: fill; animation: ${randomAnimation()} ${ranNum(
      15
    )}s infinite; font-size: ${ranNum(72)}px`;
    // sets the bug rendered to a very random position, rotation, and animation, animation-duration, and font-size
    bugsDiv.append(bug); // appends the bug to the bugs container
    bug.onclick = (e) => {
      bug.remove(); // function to allow the user to squash the bug - well remove it from the screen at least
    };
  }, 50); // declares an interval of 50ms so we render bugs pretty quickly if we run this function

  document.body.prepend(bugsDiv); // appends our bugs container to the document body
  return releaseBugs; // returns the value of releaseBugs so we can clear its interval later
};

export default renderBugs;
