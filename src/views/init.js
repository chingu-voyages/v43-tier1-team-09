import '../styles/components/init.scss'
// import clearAnchor, { anchor } from "./clearAnchor"; 
import renderScenarios from "./renderScenarios";
import controller from "../controller/";
import renderHeader from './renderHeader';
import renderFooter from './renderFooter';

const init = () => {
// render the header on screen
renderHeader()
// run the clear function

// create a section element

// fill in the section element with the HTML from index.html

// append the section element to the anchor container

// select the recently created button and create onclick event to call the render function and pass in the arguments required to work
  document.querySelector("button").onclick = () =>
    renderScenarios(controller());
// render the footer on screen
renderFooter()
};

export default init;