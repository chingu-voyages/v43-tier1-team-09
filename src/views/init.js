import "../styles/components/init.scss";
import clearAnchor, { anchor } from "./clearAnchor";
import renderScenarios from "./renderScenarios";
import controller from "../controller/index.js";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";

const init = () => {
  // render the header on screen
  renderHeader();
  // run the clear function
  clearAnchor();
  // create a section element
  const section = document.createElement("section");
  // fill in the section element with the HTML from index.html
  section.innerHTML = `<p>Fill in the blanks and be the funniest person in the Room!</p>
  <button>&gt; GO MAD</button>`;
  // append the section element to the anchor container
  anchor.append(section);
  // select the recently created button and create onclick event to call the render function and pass in the arguments required to work
  document.querySelector("button").onclick = () =>
    renderScenarios(controller());
  // render the footer on screen
  renderFooter();
};

export default init;
