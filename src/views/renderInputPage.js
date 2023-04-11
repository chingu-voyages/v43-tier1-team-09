import clearAnchor, { anchor } from "./clearAnchor";
import controller from "../controller/index";
import pegarDifferenca from "../utils/pegarDifferenca";

// function to render inputs
const renderInputPage = (title, variables, index) => {
  // maps over the inputs array to extract the key values from it
  const keys = Object.keys(variables);
  const placeholders = keys.map((key) => variables[key]);
  const section = document.createElement("section");
  const form = document.createElement("form");
  // renders the text on screen
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  h2.innerHTML = title; // dynamically changes the title
  h3.innerText = "Fill in the blank fields below.";
  section.append(h2);
  form.append(h3);
  // Maps over the keys array to render divs with labels and placeholders for form inputs
  keys.map((key, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <label for="${key}">${placeholders[i]}: </label>
          <input type="text" name="${key}" id="${key}" required />
        `;
    form.append(div);
  });

  // event listener must be inside of this function as this is where the form is rendered.
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops page from following default protocol to process the form
    const formResponses = [...new FormData(e.target).entries()].map(
      (data) => data[1]
    ); // converts responses from form into an array to be passed into the function to collect scenarios
    if (pegarDifferenca(formResponses))
      // checks the responses given against a badword filter
      controller().renderStory(index, formResponses, keys); // render the story since it passed the check
  });

  // creates a button at the bottom of the form
  const input = document.createElement("div");
  input.innerHTML = `<input type="submit" value="&gt; Go Mad" />`;
  form.append(input);
  clearAnchor();
  section.append(form);
  anchor.append(section);
};

export default renderInputPage;
