const renderHeader = page => {
const dots = document.createElement('div');
const header = document.createElement('header');

    switch (page) {
      case "SelectPage":
        console.log("Selection Screen");
        break;
      case "InputPage":
        console.log("Input Screen");
        break;
      case "StoryPage":
        console.log("Rendered Story Screen");
        break;
      default:

        
        header.innerHTML = `
        <div class="world"></div>
        <h1 class="heading-primary">Mad Libs</h1>`;
        header.classList.add('index');
        document.body.prepend(header);
        dots.classList = 'dots__top-left'
        document.body.prepend(dots);

    }
  
}

export default renderHeader;
