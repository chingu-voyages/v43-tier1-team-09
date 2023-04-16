// function to create an element, set the innerHTML to content, and append it to a root element
const createEle = (ele, content, root) => {
    let container = document.createElement(ele);
    container.innerHTML = content;
    root.append(container);
    return container;
  };
  
  export default createEle;