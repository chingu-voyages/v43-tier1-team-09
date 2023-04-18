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
  const combined = [speech[0].adjectives,speech[1].nouns,speech[2].verbs,speech[3].names,speech[4].colors,speech[5].places, speech[6].flavors, speech[7].foods, speech[8].animals, speech[9].pronouns]
  const randomCat = combined[Math.floor(Math.random() * combined.length)];
  const randomWord = randomCat[Math.floor(Math.random() * randomCat.length)];
  const randomAdj =
  speech[0].adjectives[Math.floor(Math.random() * speech[0].adjectives.length)];
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
    const randomFlavor = speech[6].flavors[Math.floor(Math.random() * speech[6].flavors.length)];
    const randomFood = speech[7].foods[Math.floor(Math.random() * speech[7].foods.length)];
    const randomAnimal = speech[8].foods[Math.floor(Math.random() * speech[8].animals.length)]
    const randomPronoun = speech[9].pronouns[Math.floor(Math.random() * speech[9].pronouns.length)]
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
      case "flavor":
      return randomFlavor;
      break;
      case "food":
      return randomFood;
      break;
      case "animal":
      return randomAnimal;
      break;
      case "pronoun":
      return randomPronoun;
      break;
    default:
      return randomWord // random noun adj verb name color or place
      break;
  }
};

export default controller;
