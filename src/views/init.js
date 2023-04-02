import "../styles/index.scss";
// import clearAnchor, { anchor } from "./clearAnchor"; 

import renderScenarios from "./renderScenarios";
import controller from "../controller/";
const homeButton = document.querySelector('h1')

const init = () => {
    // clearAnchor()
    // anchor.innerHTML = `
    // <section>
    // <h2>Welcome</h2>
    // <p>Fill in the blanks and be the funniest person in the Room!</p>
    // <button>&gt; GO MAD</button>
    // </section>`;
  document.querySelector("button").onclick = () =>
    renderScenarios(controller());
};

homeButton.onclick = init;

export default init;