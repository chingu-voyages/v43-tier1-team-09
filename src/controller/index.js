import json from '../model/stories.json' assert {type: 'json'};
import renderInputPage from '../views/renderInputPage';

// function that collect data on json file
function controller() {
    return {
      json,
      renderInputs: (json, e) => {
        return renderInputPage(json[e].Scenario_title, json[e].Variables, e);
      },
    };
  }

  export default controller