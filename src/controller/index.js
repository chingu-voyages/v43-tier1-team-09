import json from '../model/stories.json' assert {type: 'json'};

// function that collect data on json file
function collectScenarios() {
    return {
      json,
      renderInputs: (json, e) => {
        return console.log(json[e].Scenario_title, json[e].Variables, e);
      },
    };
  }

  export default collectScenarios