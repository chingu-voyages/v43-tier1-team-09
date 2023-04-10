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
  // Defines the static HTML for the footer on the page
  footer.innerHTML = `
  <span> &lt;/&gt; with </spam><i class="heart"></i><span> by </span>
  <span>
    <a href="https://github.com/Emimint" target="_blank">Emimint</a>,
    <a href="https://github.com/emilio12345" target="_blank">emilio12345</a
    >, <a href="https://github.com/PaulaR-05" target="_blank">PaulaR-05</a>,
    <a href="https://github.com/mnichols08" target="_blank">mnichols08</a>,
    <a href="https://github.com/Nazile-Tag" target="_blank">Nazile-Tag</a>
  </span>
  <hr />
  <span> &copy; 2023 </span
  ><span
    >Inspired by <a href="https://www.chingu.io" target="_blank">Chingu</a>.
    Built for Voyage 43.<a
      href="https://github.com/chingu-voyages/v43-tier1-team-09"
      target="_blank"
      >We are Team 09</a
    ></span>`;
  document.body.append(footer); // Appends the footer to the document body
  switch (page) {
    case "SelectPage":
      // Story Select Screen footer
      // Adds a class to the bottom left dots that will move them off the screen
      bottomLeftDots.classList.add("shift-left");
      // 300ms later runs a function to remove them from the DOM
      setTimeout(() => bottomLeftDots.remove(), 300);
      // Adds a class that renders the dots off screen initially
      bottomRightDots.classList = "from-right dots__bottom-right";
      document.body.append(bottomRightDots); // renders the dots on screen
      // Immediately removes the class, causing them to shift from the right onto the screen
      setTimeout(() => bottomRightDots.classList.remove("from-right"), 1);
      break;
    // case "InputPage":
    //   console.log("Input Screen");
    //   break;
    // case "StoryPage":
    //   console.log("Rendered Story Screen");
    //   break;
    /* The above lines are commented out as at the moment they are not being utilized for rendering anything on screen, however they can be utilized to render different footer states */
    default:
      // Landing Page Footer
      // Adds a class to the dots on the right that shifts them off screen to the right
      bottomRightDots.classList.add("from-right");
      // After a 300ms delay removes the dots on the right from the DOM
      setTimeout(() => bottomRightDots.remove(), 300);
      // Checks if we have a rocket ship on screen or creates a div with this variable name
      const rocket = document.querySelector('.rocket') || document.createElement('div');
      // If we do not have a rocket container already then append one to the document body
      if (!document.querySelector('.rocket')) document.body.append(rocket);
      // addes the rocket class to our rocket which is how the CSS styles the container
      rocket.classList = "rocket";
      // Adds a class to the bottom left dots that will render them off screen initially
      bottomLeftDots.classList = "shift-left dots__bottom-left";
      // Appends the bottom left dots to the document body
      document.body.append(bottomLeftDots);
      // Immediately invokes a function to remove the class which positions the element off screen, which causes it to appear on screen
      setTimeout(() => bottomLeftDots.classList.remove("shift-left"), 1);
  }
};

export default renderFooter;
