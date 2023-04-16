import clearAnchor, { anchor } from "../utils/clearAnchor";
import renderHeader from "./renderHeader";
import renderFooter from "./renderFooter";
// function to render a story page
const renderStoryPage = (
  scenario,
  values,
  title,
  index,
  keys,
  placeholders
) => {
  const section = document.createElement("section"); // creates an html element to build page within
  section.classList = "scenario fade-in";
  let madlib = scenario;
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader("StoryPage");
  // loops over the values to render and replaces them with the key index
  values.forEach((value, i) => {
    let newValue = `<span placeholder='${placeholders[i]}' value='${value}'>${value}</span>`; // wrap the value in a span and also exposes the key to the dom so we could render in print later perhaps
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
  const customStyles = document.createElement("style"); // creates a style div to append later;
  customStyles.id = 'custom-styles'; // applies custom styles id;
  const printMadlib = document.createElement("button"); // creates a print button
  const shareMadlib = document.createElement("button"); // creates a share button
  printMadlib.classList = "print"; // applies style to render button higher on the screen;
  shareMadlib.classList = "print"; // applies style to render button higher on the screen;
  printMadlib.innerText = `< Print Mad Lib`; // sets the text to print mad lib
  shareMadlib.innerText = `> Share Mad Lib`; // sets the text to share mad lib
  printMadlib.onclick = () => {
    if (document.getElementById("custom-styles")) document.getElementById('custom-styles').remove(); // removes custom styles if we print normally
    window.print(); // prints document
  };
  shareMadlib.onclick = () => {
    customStyles.innerHTML = `
    @media only print {
        span::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-70%);
        visibility: visible;
        min-width: 100px;
        text-align: center;
        font-size: 12px;
        color: blue;
        display: inline-block;
        line-height: 1.6em;
        content: attr(value);
      }
    }
    `; // applies custom styles if we hit share buttom
    document.head.append(customStyles); // appends them to head
    window.print(); // prints document with styles
  };
  section.append(printMadlib); // sews the print madlib button to the section
  section.append(shareMadlib); // sews the share madlib button to section
  anchor.append(section);
  // calls the renderFooter function passing in this page
  renderFooter("StoryPage");
};

export default renderStoryPage;
