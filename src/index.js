/* as recommend, anchored everything to the <main>, so if we declare the variable it no longer matters it is just defined */
const anchor = document.querySelector("main");

/* Function to empty the content of the anchor element */
function clearAnchor() {
  anchor.innerHTML = "";
}
// function that collect data on json file
function collectScenarios() {
  const json = fetch("./model/stories.json").then((response) =>
    response.json().then((data) => data.map((data) => data))
  );
  return {
    json,
    renderInputs: (json, e) => {
      return console.log(json[e].Scenario_title, json[e].Variables, e);
    },
  };
}
// function that render scenarios on screen and send the variables to input Page
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
    .forEach((e, i) => (e.onclick = () => data.renderInputs(scenarios, i)));
}

document.querySelector("button").onclick = () =>
  renderScenarios(collectScenarios());
