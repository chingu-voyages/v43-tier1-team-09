import json from "../model/stories.json" assert { type: "json" };
import devs from '../model/devs.json' assert { type: "json" };
import renderInputPage from "../views/renderInputPage";
import renderStoryPage from "../views/renderStoryPage";

// function that collect data on json file
function controller() {
  const inputs = [];
  return {
    json,
    renderInputs: (json, e) => {
      return renderInputPage(json[e].Scenario_title, json[e].Variables, e);
    },
    renderStory: (index, values, keys, placeholders) => {
      return renderStoryPage(
        json[index].Scenario,
        values,
        json[index].Scenario_title,
        index,
        keys,
        placeholders
      );
    },
    devs
  };
}

export default controller;
