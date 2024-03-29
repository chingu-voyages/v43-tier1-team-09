import { getDevs } from "../controller";
import { visuals } from "../utils/clearAnchor";
import renderTeamPage from "./team/renderTeamPage";
const renderFooter = (page) => {
  // defines dots div containers or creates them as needed
  const bottomLeftDots =
    document.querySelector(".dots__bottom-left") ||
    document.createElement("div");
  const bottomRightDots =
    document.querySelector(".dots__bottom-right") ||
    document.createElement("div");
  // checks if we have a footer or not or creates it otherwise
  const footer =
    document.querySelector("footer") || document.createElement("footer");
  // Defines the static HTML for the footer on the page and dynamically generates devs in the footer
  footer.innerHTML = `
  <span> &lt;/&gt; with </span><i class="heart"></i><span> by </span>
<span>
${getDevs().map(
  (dev) =>
    `<a href="https://github.com/${dev.github}" target="_blank"> ${dev.github}</a>`
)}
</span>
<hr />
<span> &copy; ${new Date().getFullYear()} </span><span>Inspired by <a href="https://www.chingu.io" target="_blank">Chingu</a>.
	Built for Voyage 43.
	| <a href="https://github.com/chingu-voyages/v43-tier1-team-09" target="_blank">View Source</a> | <a href="https://chingu-voyages.github.io/v43-tier1-team-09/" target="_blank">Learn More</a></span> | <a href="#" id="teamPage">Meet Team 09</a></span>
  `;
  footer.classList.add("shift-down");
  document.body.append(footer); // Appends the footer to the document body
  const teamPageLink = document.getElementById("teamPage");
  teamPageLink.onclick = () => renderTeamPage();
  switch (page) {
    case "SelectPage":
      // Story Select Screen footer
      // Adds a class to the bottom left dots that will move them off the screen
      bottomLeftDots.classList.add("shift-left");
      // 300ms later runs a function to remove them from the DOM
      setTimeout(() => bottomLeftDots.remove(), 300);
      // Adds a class that renders the dots off screen initially
      bottomRightDots.classList = "shift-right dots__bottom-right";
      visuals.append(bottomRightDots); // renders the dots on screen
      // Immediately removes the class, causing them to shift from the right onto the screen
      setTimeout(() => bottomRightDots.classList.remove("shift-right"), 1);
      break;
    case "InputPage":
      // Story Select Screen footer
      // Adds a class to the bottom left dots that will move them off the screen
      bottomRightDots.classList.add("shift-down");
      // 300ms later runs a function to remove them from the DOM
      setTimeout(() => bottomRightDots.remove(), 300);
      break;
    case "StoryPage":
      // Adds a class to the bottom left dots that will render them off screen initially
      bottomLeftDots.classList = "shift-down dots__bottom-left";
      // Appends the bottom left dots to the document body
      visuals.append(bottomLeftDots);
      // Immediately invokes a function to remove the class which positions the element off screen, which causes it to appear on screen
      setTimeout(() => bottomLeftDots.classList.remove("shift-down"), 1);
      break;
    case "TeamPage":
      bottomLeftDots.classList.add("shift-down");
      setTimeout(() => bottomLeftDots.remove(), 300);
      bottomRightDots.classList = "shift-down dots__bottom-right";
      visuals.append(bottomRightDots);
      setTimeout(() => bottomRightDots.classList.remove("shift-down"));
      break;
    default:
      // Landing Page Footer
      // Adds a class to the dots on the right that shifts them off screen to the right
      bottomRightDots.classList.add("shift-right");
      // After a 300ms delay removes the dots on the right from the DOM
      setTimeout(() => bottomRightDots.remove(), 300);
      // Checks if we have a rocket ship on screen or creates a div with this variable name
      const rocket =
        document.querySelector(".rocket") || document.createElement("div");
      // If we do not have a rocket container already then append one to the document body
      if (!document.querySelector(".rocket")) document.body.append(rocket); // appends the rocket to the body so it is above everything else
      // addes the rocket class to our rocket which is how the CSS visuals the container
      rocket.classList = "rocket";
      // Adds a class to the bottom left dots that will render them off screen initially
      bottomLeftDots.classList = "shift-left dots__bottom-left";
      // Appends the bottom left dots to the document body
      visuals.append(bottomLeftDots);
      // Immediately invokes a function to remove the class which positions the element off screen, which causes it to appear on screen
      setTimeout(() => bottomLeftDots.classList.remove("shift-left"), 1);
  }
};

const getFooter = () => document.querySelector("footer"); // declares a function for the finding the footer

// listens for the user to scroll up or down
window.onscroll = () => {
  const footer = getFooter(); // defines footer by running function to find it
  const pageBottom = document.body.offsetHeight - window.innerHeight,
    windowYOffset = window.pageYOffset; // declares the pageBottom to be the value of the offsetHeight of the body subtracted by the inner height of the window
  if (pageBottom == windowYOffset) footer.classList.remove("shift-down"); // if we scroll to the bottom of the page, remove the class-list of shift-down from our footer - rendering it on screen
  else footer.classList.add("shift-down"); // if we scroll away, hide it again by adding that class back
};

// https://stackoverflow.com/users/10703934/kia-abdi && https://techstacker.com/javascript-detect-when-scrolled-to-bottom/
window.onwheel = (e) => {
  const footer = getFooter(); // defines footer by running function to find it
  if (
    e.deltaY >= 0 &&
    window.innerHeight + window.pageYOffset >= document.body.offsetHeight 
  ) {
    // Scrolling down causes the footer to slide up from the bottom
    footer.classList.remove("shift-down");
  } else {
    // Hides the footer when the user scrolls up
    footer.classList.add("shift-down");
  }
};

export default renderFooter;
