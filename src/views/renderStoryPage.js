import clearAnchor, { anchor } from "./clearAnchor";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";
// function to render a story page
const renderStoryPage = (scenario, values, title, index, keys) => {
  const section = document.createElement("section"); // creates an html element to build page within
  let madlib = scenario;
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader("StoryPage");
  // loops over the values to render and replaces them with the key index
  values.forEach((value, i) => {
    let newValue = `<span key='${keys[i]}'>${value}</span>` // wrap the value in a span and also exposes the key to the dom so we could render in print later perhaps
    const replaceVar = `{{${keys[i]}}}`; // defines this key index using the index of this value
    madlib = madlib.replaceAll(replaceVar, newValue); // generates the mad lib by replacing all of the static variables with their passed in values
  });
  // renders the title
  const h2 = document.createElement("h2");
  h2.innerHTML = title;
  section.append(h2);
  madlib
    .split("\\n") // creates an array from the madlib, creating a new item for each line break
    .map((line) => {
      const p = document.createElement("p");
      p.innerHTML = line;
      section.append(p);
    }); // maps over the newly created array and created `<p>` tags for each of them, and then appends them inside of the section created initally
  clearAnchor();
  const button = document.createElement('button'); // creates a button
  button.innerText = `> Print Mad Lib` // sets the text to message
  button.onclick = () => window.print(); // on click is set to a function that calls window.print
  section.append(button) // sews the button to the section
  anchor.append(section);
  // calls the renderFooter function passing in this page
  renderFooter("StoryPage");

};

export default renderStoryPage;
