/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
export const anchor = document.querySelector("main");

// define a container to act as our graphical anchor (more semantic html)
export const styles = document.createElement('div');
styles.className = 'visuals';
document.body.append(styles);

/* Function to empty the content of the anchor element */
function clearAnchor() {
  anchor.innerHTML = "";
}

export default clearAnchor;
