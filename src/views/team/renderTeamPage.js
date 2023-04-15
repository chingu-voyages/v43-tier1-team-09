import clearAnchor, { anchor } from "../clearAnchor";
import renderHeader from "../renderHeader";
import renderFooter from "../renderFooter";
import renderBugs from "./renderBugs";

const renderTeamPage = () => {
  clearAnchor();
  renderHeader("TeamPage");
  const main = document.createElement("main");
  main.classList = "container fade-in";
  main.innerHTML = `
    <section class="container__card">
        <div class="container__card--information">
          <a href="https://github.com/Emimint"
          target="_blank"><img src="./assets/images/emilie.png" alt="Emilie" />          
            <h2>Emilie Echevin</h2></a
            >
            <p class="title">Developer</p>
          </div>
        </div>
        <div class="container__card--information change">
          <a href="https://github.com/emilio12345" target="_blank"><img src="./assets/images/mili.png" alt="Emilio" />          
            <h2>Emilio Rivera</h2></a>
            <p class="title">Developer</p>
          </div>
        </div>

        <div class="container__card--information">
          <a href="https://github.com/PaulaR-05" target="_blank"><img src="./assets/images/gabriela.png" alt="gabriela" />          
            <h2>Gabriela de Paula</h2></a>
            <p class="title">Developer</p>
          </div>
        </div>

        <div class="container__card--information change">
          <a href="https://github.com/mnichols08" target="_blank"><img src="./assets/images/mikey.png" alt="mikey" />          
            <h2>Mikey Nichols</h2></a>
            <p class="title">Developer</p>
          </div>
        </div>

        <div class="container__card--information">
          <a href="https://github.com/Nazile-Tag" target="_blank"><img src="./assets/images/naz.png" alt="Nazile" />          
            <h2>Nazile</h2></a>
            <p class="title">Developer</p>
          </div>
        </div>
      </section>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd91zh13dCmv4GNsG7ndVoY4njof7NvHQ3LoMrXabnkXylihg/viewform?usp=sf_link" target="_blank">Please report any &#128027;<a id="enableBugs">bugs</a>&#128027; or provide feedback 😀</a>
    `;
  anchor.append(main);
  document.getElementById("enableBugs").onclick = () => renderBugs();
  renderFooter("TeamPage");
};

export default renderTeamPage;