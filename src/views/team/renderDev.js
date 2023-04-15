import { getGitHubUser } from "../../controller";

const renderDev = async (developer) => {
  const user = await getGitHubUser(developer.github);
  let { bio, name, location } = user;
  const teamAnchor = document.querySelector(".container__card");
  const dev = document.createElement("div");
  if (name == null || name == undefined) name = developer.name;

  dev.classList = "container__card--information";
  dev.innerHTML = `
      <a href="https://github.com/${developer.github}" target="_blank">
      <img src='./assets/images/${developer.github}.png' alt='${name}' />
      <h2>${name}</h2>
      <p class="title">${developer.role}</p>
      `;
  // each dev has a potential to show their perpspectives or reflect on the project
  const aboutContainer = document.getElementById("about-container");
  dev.onmouseover = () => {
    if (developer.story)
      aboutContainer.innerHTML = `<p class="about-container fade-in">${developer.story}</p>`;
  };
  dev.onmouseout = () => (aboutContainer.innerHTML = "");
  teamAnchor.append(dev);
};

export default renderDev;
