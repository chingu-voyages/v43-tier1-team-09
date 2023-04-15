import { getGitHubUser, getDevs } from "../../controller";

const renderDev = async (username) => {
  const user = await getGitHubUser(username);
  const { bio, name, location } = user;
  const teamAnchor = document.querySelector(".container__card");
  const dev = document.createElement("div");
  console.log(username);
  if (name == null || name == undefined)
    switch (username) {
      case "Nazile-Tag":
        dev.classList = "container__card--information";
        dev.innerHTML = `
        <a href="https://github.com/Nazile-Tag" target="_blank">
        <img src='./assets/images/Nazile-Tag.png' alt='Nazile-Tag' />
        <h2>Nazile</h2>
        <p class="title">Developer</p>
        `;
        teamAnchor.append(dev);
        return;
      default:
        console.error("What's going on?", username);
    }

  dev.classList = "container__card--information";
  dev.innerHTML = `
      <a href="https://github.com/${username}" target="_blank">
      <img src='./assets/images/${username}.png' alt='${name}' />
      <h2>${name}</h2>
      <p class="title">Developer</p>
      `;
  // each dev has a potential to show their perpspectives or reflect on the project
  const aboutContainer = document.getElementById('about-container');
  dev.onmouseover = () => {
    switch (username) {
      case "mnichols08":
        aboutContainer.innerHTML= `<p class="about-container">${getDevs()[3].story}</p>`;
        break;
      default:
        break;
    }
  };
  dev.onmouseout = () => aboutContainer.innerHTML = '';
  teamAnchor.append(dev);
};

export default renderDev;
