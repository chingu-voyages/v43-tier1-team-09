// imports other views from our project
import createEle from "../utils/createEle";
import clearAnchor, { anchor } from "../utils/clearAnchor";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";

// credit to https://stackoverflow.com/a/2450976/15950715
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

// function that generate random number, then we can view different images
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// function that render scenarios on screen and send the variables to input Page
async function renderScenarios(data) {
  // Runs the function to clear our anchor
  clearAnchor();
  // when we render scenarios, it adds a class to the rocket ship, which causes it to 'blast off'
  document.querySelector(".rocket").classList.add("blast-off");
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader("SelectPage");
  // defines our scenarios from the data being passed into this function (shuffled)
  const scenarios = shuffle(data.json);
  // creates DOM elements for our scenarios
  const section = createEle("section", "", anchor); // creates a section element and renders to our anchor
  const heading = createEle("h2", "Please select one of the stories below to play:", section); // creates a heading element, sets the text and appends to the section
  const ul = createEle("ul", "", section); // creates an unordered list and appends it to our section
  // defines a class of "game" on the section
  section.classList = "game fade-in";
  // maps over our scenarios to create individual items from each story
  scenarios.map((story) => {
    // creates an html list item for each scenario
    createEle(
      "li",
      `
    <div>
      <img
        src="https://picsum.photos/150?random=${getRandomInt(10000)}"
        alt="placeholder description"
      />
      <a href="#"><h3>${story.Scenario_title}</h3></a>
    </div>
    `,
      ul
    ); // creates a list item with dynamic html and renders to the ul
  });
  // Loops over all of the newly created list items and creates onclick functions for each of them which will call the next function in line passing in important variables as need be
  document
    .querySelectorAll(".game ul li")
    .forEach((e, i) => (e.onclick = () => data.renderInputs(scenarios, i)));
  // calls the renderFooter function passing in this page
  renderFooter("SelectPage");
}

export default renderScenarios;
