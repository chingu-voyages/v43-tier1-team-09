import createEle from "../utils/createEle";
import clearAnchor, { anchor } from "../utils/clearAnchor";
import controller from "../controller/index";
import pegarDifferenca from "../utils/pegarDifferenca";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";

// function to render inputContainers
const renderInputPage = (title, variables, index) => {
  clearAnchor(); // runs clearAnchor function to generate a clean html anchor
  // maps over the inputContainers array to extract the key values from it
  const keys = Object.keys(variables);
  const placeholders = keys.map((key) => variables[key]);
  const section = createEle("section", `<h2>${title}</h2>`, anchor); // creates section element with a dynamic h2 printing the title within and appends to anchor tag
  section.classList = "fade-in"; // applies classlist of fade-in to section causing it to fade into view
  const form = createEle(
    "form",
    "<h3>Fill in the blank fields below</h3>",
    section
  ); // creates form element with a heading already filled in and appends to section
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader("InputPage");
  // Maps over the keys array to render divs with labels and placeholders for form inputContainers
  keys.map((key, i) => {
    const input = createEle(
      "div",
      `
      <input type="text" name="${key}" id="${key}" placeholder='${placeholders[i]}' required />
      <button>${placeholders[i]}</button>
    `,
      form
    ); // creates an input container to contain form elements and dynamically generates the content, then appends to the form element
    // this input container we just created is declared an id to find it later
    input.id = `question${i}`; // sets our input id to a dynamic value
    input.classList = "fade-in"; // sets our input class list to fade-in
    // sets the data-completed and inprogress to false
    input.setAttribute("data-completed", false);
    input.setAttribute("data-inprogress", false);
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
      controller().renderStory(index, formResponses, keys, placeholders); // render the story since it passed the check
  });

  // the first question will have it's data-inprogress set to true, rendering it visible as per css data-style that is defined within utilities.scss
  document.getElementById("question0").setAttribute("data-inprogress", true);
  const inputContainers = document.querySelectorAll("form div"); //variable to define our input divs created above
  const buttons = document.querySelectorAll(`form div button`); //buttons that appear after those inputs
  document.querySelectorAll("form div input").forEach((input) =>
    input.addEventListener("keypress", (e) => {
      // loop ever all inputs within the form and adds an event listener on them
      const button = e.target.nextSibling.nextSibling; // defines the button next to this input so we can click it if enter is pressed
      let nextInput; // lets set this as a temporary var
      if (
        e.target &&
        e.target.parentNode &&
        e.target.parentNode.nextSibling &&
        e.target.parentNode.nextSibling.firstChild &&
        e.target.parentNode.nextSibling.firstChild.nextSibling
      ) {
        nextInput = e.target.parentNode.nextSibling.firstChild.nextSibling; // defines the next input in line if we have one
      }
      if (e.key === "Enter") {
        e.preventDefault(); // listens for enter to be pressed. If it is, prevents us from submitting the form but instead clicks the button
        button.click(); // if we press enter on this input, click on the button we define above
        if (nextInput && nextInput.focus) nextInput.focus(); // focuses on the next input in line if we do have one
      }
    })
  );
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
            e.target.parentNode.nextSibling.firstChild.nextSibling.focus(); // sets the focus on the next input to appear (greatly improves mobile experience)
          } else {
            // creates two buttons at the bottom of the form
            const reviewButton =
              document.getElementById("reviewButton") ||
              createEle("button", "&lt; Review", form); // Checks if we have a review button already or creates one
            reviewButton.id = "reviewButton"; // defines the id of reviewButton so we can find it after it is made

            const goMadButton =
              document.getElementById("goMadButton") ||
              createEle("button", "&gt; Go Mad!", form); // checks if we have a go mad button or creates one
            goMadButton.id = "goMadButton"; // defines the id of the button to find later
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
          }
        }
      })
  );

  // calls the renderFooter function passing in this page
  renderFooter("InputPage");
};

export default renderInputPage;
