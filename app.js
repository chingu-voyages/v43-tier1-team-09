/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
const anchor = document.querySelector("main");

/* Function to empty the content of the anchor element */
function clearAnchor() {
  anchor.innerHTML = "";
}

function collectScenarios() {
  const json = fetch("./stories.json").then((response) =>
    response.json().then((data) => data.map((data) => data))
  );
  return {
    json,
    renderInputs: (e) => console.log("clicked", e),
  };
}

async function renderScenarios(data) {
  const scenarios = await data.json;
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const ul = document.createElement("ul");
  scenarios.map((story) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <div>
              <img
                src="https://placehold.jp/150x150.png"
                alt="placeholder description"
              />
              <a href="#"><h3>${story.Scenario_title}</h3></a>
            </div>
      
    `;
    ul.append(li);
  });
  ul.classList = "flex wrap no-list center";
  heading.innerText = "Please select one of the stories below to play:";
  section.classList = "game";
  clearAnchor();
  section.prepend(heading);
  section.append(ul);
  anchor.append(section);
  document
    .querySelectorAll(".game ul li")
    .forEach((e, i) => (e.onclick = () => data.renderInputs(i)));
}

document.querySelector("button").onclick = () =>
  renderScenarios(collectScenarios());

  //declare a function that does not take any arguments and runs the clear function
  function appInit() {
    clearAnchor();
  // declare a variable that creates a section html element - https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  const createSection = document.createElement('section')
// fill in the section element with the html from index.html - https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
createSection.innerHTML = `<h2>Welcome</h2>
<p>Fill in the blanks and be the funniest person in the Room!</p>
<button>&gt; GO MAD</button>`;
// append the section element to the anchor container - https://developer.mozilla.org/en-US/docs/Web/API/Element/append
anchor.append('section');
// select the button and create an onclick event to call the render function and pass in the arguments required to work
document.querySelector("button").onclick = () =>
   renderScenarios(collectScenarios());
  }