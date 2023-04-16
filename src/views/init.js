import "../styles/components/init.scss";
import clearAnchor, { anchor } from "../utils/clearAnchor";
import createEle from "../utils/createEle";
import renderScenarios from "./renderScenarios";
import controller from "../controller/index.js";
import renderBlobs from "./renderBlobs";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";

const init = () => {
  for (let i = 0; i < 100; i++) {
    window.clearInterval(i); // to stop bugs from spawning if we started to spawn them we run a loop to stop all intervals cause we do not have access to it currently
  }
  // renders blobs in the background;
  renderBlobs();
  // render the header on screen
  renderHeader();
  // run the clear function
  clearAnchor();
  // create a section element, fill in the section element with the HTML from index.html and append the section element to the anchor container
  const section = createEle(
    "section",
    `<p>Fill in the <span>blanks</span> and be the <span>funniest</span> person in the Room!</p>
  <button>&gt; GO MAD</button>`,
    anchor
  );
  // select the recently created button and create onclick event to call the render function and pass in the arguments required to work
  document.querySelector("button").onclick = () =>
    renderScenarios(controller());
  // render the footer on screen
  renderFooter();
};

export default init;
