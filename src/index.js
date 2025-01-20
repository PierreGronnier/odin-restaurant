import "./styles.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

console.log("test");

function setupTabs() {
    const buttons = document.querySelectorAll("header nav button");

    buttons[0].addEventListener("click", loadHome);
    buttons[1].addEventListener("click", loadMenu); 
    buttons[2].addEventListener("click", loadAbout);
}

loadHome();
loadMenu();
loadAbout();

setupTabs();
