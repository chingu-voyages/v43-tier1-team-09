// function to create an element, set the innerHTML to content, and append it to a root element
const createEle = (ele, content, root) => {
    let container = document.createElement(ele); // creates an element from the ele variable name 
    container.innerHTML = content; // applies the innerHTML of the container to the content provided to function
    if (ele == 'header') root.prepend(container); // checks if we are rending a header element and prepends if so
    else root.append(container); // appends the container to the root container passed into function otherwise
    return container; // returns the value of the container that we created so functions can set the values later
  };
  
  export default createEle;