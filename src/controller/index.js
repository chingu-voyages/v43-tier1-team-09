import stories from "../model/stories.json" assert { type: "json" };
import devs from "../model/devs.json" assert { type: "json" };
import speech from "../model/speech.json" assert { type: "json" };
import renderInputPage from "../views/renderInputPage";
import renderStoryPage from "../views/renderStoryPage";

// function that collect data from stories stories file
function controller() {
  // This function does not hav to do much cause we just import json file but it returns data for the views to render a page from
  return {
    stories,
    renderInputs: (stories, e) => {
      return renderInputPage(
        stories[e].Scenario_title,
        stories[e].Variables,
        e
      );
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

export const randomWords = (type) => {
  const randomAdj =
    speech[0].adjectives[
      Math.floor(Math.random() * speech[0].adjectives.length)
    ];
  const randomNoun =
    speech[1].nouns[Math.floor(Math.random() * speech[1].nouns.length)];
  const randomVerb =
    speech[2].verbs[Math.floor(Math.random() * speech[2].verbs.length)];
    const randomName =
    speech[3].names[Math.floor(Math.random() * speech[3].names.length)];
    const randomColor =
    speech[4].colors[Math.floor(Math.random() * speech[4].colors.length)];
    const randomPlace =
    speech[5].places[Math.floor(Math.random() * speech[5].places.length)];
  // declare a switch statement on type of speech
  switch (type) {
    case "number":
      return Math.floor(Math.random() * 42) + 1; // randomly genearates a number to 42
      break;
    case "noun":
      return randomNoun;
      break;
    case "adjective":
      return randomAdj;
      break;
    case "verb":
      return randomVerb;
      break;
      case "name":
      return randomName;
      break;
      case "color":
      return randomColor;
      break;
      case "place":
      return randomPlace;
      break;
    default:
      return "random"; // falls back to simply the word random
      break;
  }
};

export default controller;
