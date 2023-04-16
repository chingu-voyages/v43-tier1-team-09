import clearAnchor, { anchor } from "../../utils/clearAnchor";
import { getDevs } from "../../controller"; // imports our devs from the controller
import renderHeader from "../renderHeader";
import renderFooter from "../renderFooter";
import renderBugs from "./renderBugs";
import renderDev from "./renderDev";

const renderTeamPage = () => {
  clearAnchor(); // clears the anchor rendering a blank canvas
  renderHeader("TeamPage"); // renders a header on screen, letting the function know we are on the TeamPage
  const section = document.createElement("section"); // creates a section element
  section.classList = "container fade-in"; // sets a class list of container.fade-in to that section
  const teamAnchor = document.createElement("div"); // creats a div container
  teamAnchor.classList = "container__card"; // sets the class to container__card on that div
  getDevs().forEach(dev => renderDev(dev)); // runs the getDevs function which returns a list of devs, and then forEach of those devs will render a Dev, passing in that individual developer information
  teamAnchor.append(section); // appends section to TeamAnchor
  anchor.append(teamAnchor); // appends teamAnchor to anchor, rendering it on screen
  const aboutContainer = document.createElement("p"); // creates a paragraph element
  aboutContainer.id = "about-container"; // gives that element an id of about-container
  const feedbackContainer = document.createElement("p"); // creates another paragraph element

  feedbackContainer.innerHTML = `<a
  href="https://docs.google.com/forms/d/e/1FAIpQLSd91zh13dCmv4GNsG7ndVoY4njof7NvHQ3LoMrXabnkXylihg/viewform?usp=sf_link"
  target="_blank">
  Please report any &#128027;<a id="enableBugs">bugs</a>&#128027; or provide
  feedback 😀`; // sets the html to a static value containing a link to our bug report/feedback form
  anchor.append(aboutContainer); // appends our about-container to the anchor
  anchor.append(feedbackContainer); // appends the feedback-container to the anchor
  document.getElementById("enableBugs").onclick = () => renderBugs(); // applies a function that runs another function, renderBugs when users click on the words bugs in the footer
  renderFooter("TeamPage"); // renders our footer on screen, passing in the value of TeamPage to let it know which page wa are on
};

export default renderTeamPage;
