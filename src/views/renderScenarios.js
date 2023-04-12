// imports other views from our project
import clearAnchor, { anchor } from "./clearAnchor";
import renderHeader from './renderHeader';
import renderFooter from './renderFooter';

// credit to https://stackoverflow.com/a/2450976/15950715
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// function that generate random number, then we can view different images
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// function that render scenarios on screen and send the variables to input Page
async function renderScenarios(data) {
  // when we render scenarios, it adds a class to the rocket ship, which causes it to 'blast off'
  document.querySelector(".rocket").classList.add("blast-off");
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader('SelectPage');
  // defines our scenarios from the data being passed into this function (shuffled)
  const scenarios = shuffle(data.json);
  // creates DOM elements for our scenarios
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");

  // maps over our scenarios to create individual items from each story
  scenarios.map((story) => {
    // creates an html list item for each scenario
    const li = document.createElement("li");
    // defines the inner html of each list item to have a div with an image and a link inside to the story
    li.innerHTML = `
      <div>
                <img
                  src="https://picsum.photos/150?random=${getRandomInt(10000)}"
                  alt="placeholder description"
                />
                <a href="#"><h3>${story.Scenario_title}</h3></a>
              </div>
        
      `;
    // appends the list item to the unordered list we created
    ul.append(li);
  });
  // Applies a class list for styling the unordered list
  ul.classList = "flex wrap no-list center";
  // Defines the static text to be rendered on screen for the heading
  heading.innerText = "Please select one of the stories below to play:";
  // defines a class of "game" on the section
  section.classList = "game";
  // Runs the function to clear our anchor
  clearAnchor();
  // stitches the DOM together
  section.prepend(heading);
  section.append(ul);
  anchor.append(section);
  // Loops over all of the newly created list items and creates onclick functions for each of them which will call the next function in line passing in important variables as need be
  document
    .querySelectorAll(".game ul li")
    .forEach((e, i) => (e.onclick = () => data.renderInputs(scenarios, i)));
  // calls the renderFooter function passing in this page
  renderFooter("SelectPage");
}

export default renderScenarios;
