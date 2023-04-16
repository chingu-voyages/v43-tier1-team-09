import './styles/index.scss'; // declares stylesheets that rely on images we need to render on screen from within our server
import init from "./views/init"; // imports our init function from the views folder

document.body.onload = init; // function runs after the page body loads 
