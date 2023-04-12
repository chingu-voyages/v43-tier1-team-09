import clearAnchor, { anchor } from "./clearAnchor";
import controller from "../controller/index";
import pegarDifferenca from "../utils/pegarDifferenca";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";

// function to render inputContainers
const renderInputPage = (title, variables, index) => {
  // maps over the inputContainers array to extract the key values from it
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
  // Maps over the keys array to render divs with labels and placeholders for form inputContainers
  keys.map((key, i) => {
    const input = document.createElement("div");
    input.innerHTML = `
          <input type="text" name="${key}" id="${key}" placeholder='${placeholders[i]}' required />
          <button>${placeholders[i]}</button>
        `;
    // this input container we just created is declared an id to find it later
    input.id = `question${i}`;
    // sets the data-completed and inprogress to false
    input.setAttribute("data-completed", false);
    input.setAttribute("data-inprogress", false);
    // appends this input to the form (css hides it in this state)
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
      // double checks the responses given against a badword filter
      controller().renderStory(index, formResponses, keys); // render the story since it passed the check
  });

  clearAnchor();
  // appends the section and form to the anchor
  section.append(form);
  anchor.append(section);
  // the first question will have it's data-inprogress set to true, rendering it visible as per css data-style that is defined within utilities.scss
  document.getElementById("question0").setAttribute("data-inprogress", true);
  const inputContainers = document.querySelectorAll("form div"); //variable to define our input divs created above
  const buttons = document.querySelectorAll(`form div button`); //buttons that appear after those inputs
  buttons.forEach(
    (button) =>
      (button.onclick = (e) => {
        // for each button listens for a click and runs this function when we press one
        e.preventDefault(); // prevents us from submitting the form when we press the button
        if (
          pegarDifferenca([
            e.target.previousSibling.previousSibling.value.toLowerCase(),
          ]) &&
          e.target.previousSibling.previousSibling.value.length > 0 &&
          e.target.parentNode !== document.getElementById("reviewButton")
        ) {
          // if we didn't input a cuss word and our input isn't blank then we proceed by setting the data-properties that change how it's rendered
          e.target.parentNode.setAttribute("data-completed", true); // sets data-completed to true
          e.target.parentNode.setAttribute("data-inprogress", false); // sets data-inprogress to false
          if (
            e.target.parentNode.nextSibling !==
              document.getElementById("reviewButton") &&
            e.target.parentNode.nextSibling !==
              document.getElementById("goMadButton")
          ) {
            // we check whether our nextSibling happens to be present at all, and also whether it is our reviewButton or goMadButton or not
            e.target.parentNode.nextSibling.setAttribute(
              "data-completed",
              false
            );
            e.target.parentNode.nextSibling.setAttribute(
              "data-inprogress",
              true
            ); // sets the next sibling's dataset to be completed: false, inprogress: true effectively rendering it on screen due to css
          } else {
            // creates two buttons at the bottom of the form
            const reviewButton =
              document.getElementById("reviewButton") ||
              document.createElement("button"); // Checks if we have a review button already or creates one
            reviewButton.id = "reviewButton"; // defines the id of reviewButton so we can find it after it is made

            const goMadButton =
              document.getElementById("goMadButton") ||
              document.createElement("button"); // checks if we have a go mad button or creates one
            goMadButton.id = "goMadButton"; // defines the id of the button to find later
            reviewButton.innerText = `< Review`; // sets the text of the button
            goMadButton.innerText = `> Go Mad!`; // sets the innerText of the goMadButton
            reviewButton.onclick = (e) => {
              e.preventDefault(); // prevents us from rendering the next screen when we press the button
              reviewButton.classList.add("hide"); // hides the review button
              goMadButton.classList.add("hide"); // hides the go mad button
              inputContainers.forEach((input) => {
                input.setAttribute("data-inprogress", false);
                input.setAttribute("data-completed", false);
              }); // loops through the inputs and sets all of their data-properties to false to restart the cycle
              inputContainers[0].setAttribute("data-inprogress", true); // renders the first input on screen by setting the data property of inprogress to true (again css sets it's display now to block)
            };
            // removes the hide classes from buttons and renders them on screen
            reviewButton.classList.remove("hide");
            goMadButton.classList.remove("hide");
            form.append(reviewButton);
            form.append(goMadButton);
          }
        }
      })
  );

  // calls the renderFooter function passing in this page
  renderFooter("InputPage");
};

export default renderInputPage;
