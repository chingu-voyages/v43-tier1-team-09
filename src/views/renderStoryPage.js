import createEle from '../utils/createEle';
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
  clearAnchor();
  const section = createEle('section', `<h2>${title}</h2>`, anchor ); // creates section element with a h2 including a dynamic title and appends to our anchor
  section.classList = "scenario fade-in"; // defines a classList on our section to fade in and tell css its a scenario
  let madlib = scenario; // defines a mutable variable so we can adjust scenarios
  // calls the renderHeader function, passing in "SelectPage" as the argument, which tells the header we are on this page
  renderHeader("StoryPage"); // calls renderHeader, passing in StoryPage, telling the header we are on story page
  // loops over the values to render and replaces them with the key index
  values.forEach((value, i) => {
    let newValue = `<span placeholder='${placeholders[i]}' value='${value}'>${value}</span>`; // wrap the value in a span and also exposes the key to the dom so we could render in print later perhaps
    const replaceVar = `{{${keys[i]}}}`; // defines this key index using the index of this value
    madlib = madlib.replaceAll(replaceVar, newValue); // generates the mad lib by replacing all of the static variables with their passed in values
  });
  createEle('p', madlib, section) // Creates a paragraph element and defines the content to our generated madlib and then appends it to the section
  
  const customStyles = createEle("style", ``, document.head); // creates a style div to append later;
  customStyles.id = 'custom-styles'; // applies custom styles id;
  const printMadlib = createEle("button", `&lt; Print Mad Lib`, section); // creates a print button
  const shareMadlib = createEle("button", `&gt; Share Mad Lib`, section); // creates a print button // creates a share button
  printMadlib.classList = "print"; // applies style to render button higher on the screen;
  shareMadlib.classList = "print"; // applies style to render button higher on the screen;
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
        color: #955AFF;
        display: inline-block;
        line-height: 1.6em;
        content: attr(value);
      }
    }
    `; // applies custom styles if we hit share buttom
    document.head.append(customStyles); // appends them to head
    window.print(); // prints document with styles
  };
  // calls the renderFooter function passing in this page
  renderFooter("StoryPage");
};

export default renderStoryPage;
