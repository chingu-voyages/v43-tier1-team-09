const anchor =
  document.querySelector(
    "main"
  ); /* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */

function collectScenarios() {
  const json = fetch("./stories.json").then((response) =>
    response.json().then((data) => data.map((data) => data))
  );
  return json;
}

/* Function to empty the content of the anchor element */

function clearAnchor() {
  anchor.innerHTML ="";
}