import "../styles/index.scss";
// import clearAnchor, { anchor } from "./clearAnchor"; 

import renderScenarios from "./renderScenarios";
import controller from "../controller/";
const homeButton = document.querySelector('h1')

const init = () => {

  
  document.querySelector("button").onclick = () =>
    renderScenarios(controller());
};

homeButton.onclick = init;

export default init;