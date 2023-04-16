import clearAnchor, { anchor } from "../../utils/clearAnchor";
import { getDevs } from "../../controller";
import renderHeader from "../renderHeader";
import renderFooter from "../renderFooter";
import renderBugs from "./renderBugs";
import renderDev from "./renderDev";

const renderTeamPage = () => {
  clearAnchor();
  renderHeader("TeamPage");
  const section = document.createElement("section");
  section.classList = "container fade-in";
  const teamAnchor = document.createElement("div");
  teamAnchor.classList = "container__card";
  getDevs().forEach(dev => renderDev(dev))
  section.append(teamAnchor);
  anchor.append(section);
  const aboutContainer = document.createElement("p");
  aboutContainer.id = "about-container";
  const feedbackContainer = document.createElement("p");
  feedbackContainer.innerHTML = `<a
  href="https://docs.google.com/forms/d/e/1FAIpQLSd91zh13dCmv4GNsG7ndVoY4njof7NvHQ3LoMrXabnkXylihg/viewform?usp=sf_link"
  target="_blank">
  Please report any &#128027;<a id="enableBugs">bugs</a>&#128027; or provide
  feedback 😀`;
  anchor.append(aboutContainer);
  anchor.append(feedbackContainer);
  document.getElementById("enableBugs").onclick = () => renderBugs();
  renderFooter("TeamPage");
};

export default renderTeamPage;
