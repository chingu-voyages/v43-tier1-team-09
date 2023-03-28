const anchorTag = document.querySelector("main");
const startButton = document.querySelector("#init button");
const section = document.createElement("section");
const firstTitle = document.createElement("h2");

const init = () => (anchorTag.innerHTML = "");
function get_json() {
  fetch("stories.json").then((response) => {
    response.json().then((stories) => {
      stories.map((story) => {
        anchorTag.innerHTML += `     
            <div>
              <img
                src="https://placehold.jp/150x150.png"
                alt="placeholder description"
              />
              <a href="input.html"><h3>${story.Scenario_title}</h3></a>
            </div>`;
      });
    });
  });
  init();
  firstTitle.innerText = "Please select one of the stories below to play:";
  firstTitle.style.fontWeight = "normal";
  section.prepend(firstTitle);
  anchorTag.append(section);
}
startButton.onclick = get_json;
