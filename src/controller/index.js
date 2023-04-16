import stories from "../model/stories.json" assert { type: "json" };
import devs from "../model/devs.json" assert { type: "json" };
import renderInputPage from "../views/renderInputPage";
import renderStoryPage from "../views/renderStoryPage";

// function that collect data from stories stories file
function controller() {
  // This function does not hav to do much cause we just import json file but it returns data for the views to render a page from
  return {
    stories,
    renderInputs: (stories, e) => {
      return renderInputPage(stories[e].Scenario_title, stories[e].Variables, e);
    },
    renderStory: (index, values, keys, placeholders) => {
      return renderStoryPage(
        stories[index].Scenario,
        values,
        stories[index].Scenario_title,
        index,
        keys,
        placeholders
      );
    },
  };
}
export const getDevs = () => devs; // renders our devs json to function that calls this
export const getGitHubUser = async (username) =>
  await fetch(`https://api.github.com/users/${username}`)
    .then((data) => data.json())
    .then((json) => json); // function to fetch a github user profile and return it

export default controller;
