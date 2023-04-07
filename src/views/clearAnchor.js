/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
export const anchor = document.querySelector("main");

/* Function to empty the content of the anchor element */
function clearAnchor() {
  anchor.innerHTML = "";
}

export default clearAnchor;