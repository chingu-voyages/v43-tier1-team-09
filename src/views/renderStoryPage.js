import clearAnchor, { anchor } from "./clearAnchor";
// function to render a story page
const renderStoryPage = (scenario, values, title, index, keys) => {
  const section = document.createElement("section"); // creates an html element to build page within
  let madlib = scenario;
  // loops over the values to render and replaces them with the key index
  values.forEach((value, i) => {
    const replaceVar = `{{${keys[i]}}}`; // defines this key index using the index of this value
    madlib = madlib.replaceAll(replaceVar, value); // generates the mad lib by replacing all of the static variables with their passed in values
  });
  // renders the title
  const h2 = document.createElement("h2");
  h2.innerText = title;
  section.append(h2);
  madlib
    .split("\\n") // creates an array from the madlib, creating a new item for each line break
    .map((line) => {
        const p = document.createElement('p');
        p.innerText = line;
        section.append(p)
    }); // maps over the newly created array and created `<p>` tags for each of them, and then appends them inside of the section created initally
  clearAnchor();
  anchor.append(section);
};

export default renderStoryPage;
