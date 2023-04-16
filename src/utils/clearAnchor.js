import createEle from './createEle'; // imports createEle function
/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
export const anchor = document.querySelector("main");

// define a container to act as our graphical anchor (more semantic html)
export const visuals = createEle('div', '', document.body); // creates a visuals div and appends to the body
visuals.classList = 'visuals'; // defines our visual to have a classlist of visuals
/* Function to empty the content of the anchor element */
function clearAnchor() {
  anchor.innerHTML = "";
}

export default clearAnchor;
