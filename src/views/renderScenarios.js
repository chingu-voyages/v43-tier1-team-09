import clearAnchor, { anchor } from "./clearAnchor";
// function that render scenarios on screen and send the variables to input Page
async function renderScenarios(data) {
  const scenarios = data.json;
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

export default renderScenarios;
