const renderFooter = page => {
    let footer;
    if (document.querySelector('footer')) footer = document.querySelector('footer'); else footer = document.createElement('footer')
    footer.innerHTML = '';
    const dots = document.createElement('div');
    const div = document.createElement('div');
    
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
    
            
            footer.innerHTML = `
            <span> &lt;/&gt; with </spam><i class="heart"></i><span> by </span>
            <span>
              <a href="https://github.com/Emimint" target="_blank">Emimint</a>,
              <a href="https://github.com/emilio12345" target="_blank">emilio12345</a
              >, <a href="https://github.com/PaulaR-05" target="_blank">PaulaR-05</a>,
              <a href="https://github.com/mnichols08" target="_blank">mnichols08</a>,
              <a href="https://github.com/Nazile-Tag" target="_blank">Nazile-Tag</a>
            </span>
            <hr />
            <span> &copy; 2023 </span
            ><span
              >Inspired by <a href="https://www.chingu.io" target="_blank">Chingu</a>.
              Built for Voyage 43.<a
                href="https://github.com/chingu-voyages/v43-tier1-team-09"
                target="_blank"
                >We are Team 09</a
              ></span
            >`;
            div.classList = 'rocket';
            div.tabIndex = 1;
            document.body.append(div)
            footer.classList.add('index');
            document.body.append(footer);
            dots.classList = 'dots__bottom-left'
            document.body.append(dots);
    
        }
      
    }
    
    export default renderFooter;
    