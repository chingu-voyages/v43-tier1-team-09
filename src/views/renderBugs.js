//&#128027;

import { visuals } from "./clearAnchor";

const ranNum = (num) => Math.floor(Math.random() * num);
const renderBugs = () => {
  // defines a mutable variable
  let bugsDiv;
  if (document.getElementById("bugs")) return;
  // define a bugs div container
  else bugsDiv = document.createElement("div");
  bugsDiv.id = "bugs"; // sets div id to bugs to find later
  const releaseBugs = setInterval(() => {
    // we create a div element to render a bug on screen
    const bug = document.createElement("div");
    bug.innerHTML = `&#128027;`;
    const animations = [
      "top-left-to-top-right",
      "top-left-to-bottom-right",
      "bottom-left-to-top-left",
    ];
    const randomAnimation = () => animations[ranNum(animations.length)];
    bug.style = `position:absolute;top:${ranNum(88)}vh;left:${ranNum(
      88
    )}vw; transform: rotate(${ranNum(
      360
    )}deg); pointer-events: fill; animation: ${randomAnimation()} ${ranNum(
      15
    )}s linear; font-size: ${ranNum(72)}px`;
    // Generate a random time to run animation
    bugsDiv.append(bug);
    bug.onclick = (e) => {
      bug.remove();
    };
  }, 3000);

  visuals.prepend(bugsDiv);
  return releaseBugs;
};

export default renderBugs;
