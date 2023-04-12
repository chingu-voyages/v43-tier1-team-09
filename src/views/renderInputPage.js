import clearAnchor, { anchor } from "./clearAnchor";
import controller from "../controller/index";
import pegarDifferenca from "../utils/pegarDifferenca";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";

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
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader("InputPage");
  // appends the headings to the form and section
  section.append(h2);
  form.append(h3);
  // Maps over the keys array to render divs with labels and placeholders for form inputs
  keys.map((key, i) => {
    const input = document.createElement("div");
    input.innerHTML = `
          <label for="${key}">${placeholders[i]}: </label>
          <input type="text" name="${key}" id="${key}" required />
          <button>${placeholders[i]}</button>
        `;
    input.id = `question${i}`;
    input.setAttribute("data-completed", false);
    const button = document.createElement("button");
    button.innerText = `> ${placeholders[i]}`;
    form.append(input);
  });

 


  // event listener must be inside of this function as this is where the form is rendered.
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops page from following default protocol to process the form
    const formResponses = [...new FormData(e.target).entries()].map(
      (data) => data[1]
    ); // converts responses from form into an array to be passed into the function to collect scenarios
    if (
      pegarDifferenca(formResponses.map((response) => response.toLowerCase()))
    )
      // converts each response to a lowercase object to check if uppercase curse word;
      // checks the responses given against a badword filter
      controller().renderStory(index, formResponses, keys); // render the story since it passed the check
  });
  // creates a button at the bottom of the form
  const button = document.createElement("button");
  button.innerText = `> Go Mad!`;
  // renders the button on screen
  form.append(button);
  clearAnchor();
  // appends the section and form to the anchor
  section.append(form);
  anchor.append(section);
  // calls the renderFooter function passing in this page
  renderFooter("InputPage");
};

export default renderInputPage;
