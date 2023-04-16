import init from "./init"; // pulls in the initiliaze application function to be called on demand
import { visuals } from "../utils/clearAnchor";
const renderHeader = (page) => {
  // defines dots div containers or creates them as needed
  let topLeftDots =
    document.querySelector(".dots__top-left") || document.createElement("div");
  let topRightDots =
    document.querySelector(".dots__top-right") || document.createElement("div");
  // checks if we have a header or not and creates it otherwise
  let header;
  if (document.querySelector("header"))
    header = document.querySelector("header");
  else header = document.createElement("header");
  // checks whether this function has a page defined then immediately invokes asyncynous code to add the class
  if (page) setTimeout(() => header.classList = page, 1);
  // Defines the HTML for the header on the landing page
  header.innerHTML = `
        <div class="world"></div>
        <h1 class="heading-primary">Mad Libs</h1>`;
  document.body.prepend(header);
  const world = document.querySelector(".world"); // creates a variable for the world div that we just created
  // runs the init function when we click on the world container
  world.onclick = () => init();
  switch (page) {
    case "SelectPage":
      // Story Select Screen Header
      // Adds the class of shift-left to dots on screen causing them to shift off screen.
      topLeftDots.classList.add("shift-left");
      // After 300ms we remove the element from the DOM
      setTimeout(() => topLeftDots.remove(), 300);
      // prepends the header to the document body
      document.body.prepend(header);
      // defines the dots on the top right to initially be off the screen
      topRightDots.classList = "shift-right dots__top-right";
      // prepends the dots on the top right to the body
      visuals.prepend(topRightDots);
      // immediately invokes an asynchronous function to remove the class that places it off the screen to the right.
      setTimeout(() => topRightDots.classList.remove("shift-right"), 1);
      break;
    case "InputPage":
      // Story Input Page Header
      topLeftDots.classList = "shift-up dots__top-left"; // defines the dots on the left to render off the screen to the top initially
      visuals.prepend(topLeftDots); // appends the left dots onto the screen
      setTimeout(() => topLeftDots.classList.remove("shift-up"), 1); // immediately removes the class that places the dots on the left off screen, which places them on screen
      break;
    case "StoryPage":
      // Adds the class of shift-up to dots on screen causing them to shift off screen.
      topLeftDots.classList.add("shift-up");
      // After 300ms we remove the element from the DOM
      setTimeout(() => topLeftDots.remove(), 300);
      break;
    case "TeamPage":
      // renders the html from Gabriela's design file and adds the logo from before but inside of a div
      header.innerHTML = `
      <div class="right shift-right">
        <div class="world"></div>
        <h1 class="heading-primary">Mad Libs</h1>
      </div>
      <div class="header">
      
      <h1>Meet Our <span>Devs</span></h1>
      <p></p>
      </div>
      `;
      header.classList = ""; // removes the class from header
      header.classList.add("fade-in"); // adds class of fade-in, causing the header to fade in when this page loads
      const rightHeader = document.querySelector(".right"); // defines the right container we created above
      const rightWorld = document.querySelector(".world"); // defines the world that was created above
      rightWorld.onclick = () => init(); // defines a function to run init() when the user clicks on the world (returning home)
      setTimeout(() => rightHeader.classList.remove("shift-right"), 1); // immediately invokes a function to cause the right header to shift in from the right
      topRightDots.classList.add("shift-up"); // adds a class to cause the top right dots to move off screen
      setTimeout(() => topRightDots.remove(), 300); // after 300ms removes them from the DOM
      topLeftDots.classList = "shift-up dots__top-left"; // adds an initial classList with to render top left dots off screen
      visuals.prepend(topLeftDots); // prepends those dots to the body
      setTimeout(() => topLeftDots.classList.remove("shift-up"), 1); // immediatley invokes a function to remove the class hiding them, causing them to slide into view
      break;
    default:
      // Landing Page Header
      // Adds a class to the dots on the right that shifts them off screen to the right
      topRightDots.classList.add("shift-right");
      // After a 300ms delay removes the dots on the right from the DOM
      setTimeout(() => topRightDots.remove(), 300);
      // removes any classes from header we may have defined in another case
      header.classList = "";
      topLeftDots.classList = "shift-left dots__top-left"; // defines the dots on the left to render off the screen to the left initially
      visuals.prepend(topLeftDots); // appends the left dots onto the screen
      setTimeout(() => topLeftDots.classList.remove("shift-left"), 1); // immediately removes the class that places the dots on the left off screen, which places them on screen
  }
};

export default renderHeader;
