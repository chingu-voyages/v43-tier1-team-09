import { getGitHubUser } from "../../controller"; // imports function to retrieve user information from github

// function to render a developer on screen
const renderDev = async (developer) => {
  const user = await getGitHubUser(developer.github); // defines a user by running our getGitHubUser, passing in the developer.github value provided
  let { name } = user; // sets our name to the name that a user provides to Github
  const teamAnchor = document.querySelector(".container__card"); // declares the teamAnchor
  const dev = document.createElement("div"); // creates an element to contain individual dev information
  if (name == null || name == undefined) name = developer.name; // checks if we have a name (Nazile bugs out for some reason) and if not just stick with thename we provide in the devs.json
  dev.classList = "container__card--information"; // sets a class of container__card--information to our dev container
  dev.innerHTML = `
      <a href="https://github.com/${developer.github}" target="_blank">
      <img src='./assets/images/${developer.github}.png' alt='${name}' />
      <h2>${name}</h2>
      <p class="title">${developer.role}</p>
      `; // sets our dev containers inner html to render dynamic data from both our json and the Github API
  const aboutContainer = document.getElementById("about-container"); // defines our about-container created and rendered on our team page
  // if we mouse over a developer rendered from this function, we run another function
  dev.onmouseover = () => {
    if (developer.story) // we check if the developer has filled out a story within src/model/devs.json or not
      aboutContainer.innerHTML = `<p class="about-container fade-in">${developer.story}</p>`; // if so we set our innerHTML of the about container to be some dynamic html
  };
  dev.onmouseout = () => (aboutContainer.innerHTML = ""); // then, we listen for the user to scroll away and will clear the html at that point
  teamAnchor.append(dev); // appends the dev container to the teamAnchor 
};

export default renderDev;
