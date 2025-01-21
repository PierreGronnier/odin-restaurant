import restauImage from "./img/restaurant.jpg";
import loadMenu from "./menu";

export default function loadHome() {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "";

    const restaurantName = document.createElement("div");
    restaurantName.classList.add("restaurant-name");
    restaurantName.innerHTML = "<h1>Chez Pierre</h1>";

    const callToAction = document.createElement("div");
    callToAction.classList.add("call-to-action");
    callToAction.innerHTML = '<button>Discover Our Menu</button>';
    callToAction.addEventListener("click", loadMenu);

    const image = document.createElement("img");
    image.src = restauImage;
    image.classList.add("background-image");

    contentDiv.appendChild(restaurantName);
    contentDiv.appendChild(callToAction);
    contentDiv.appendChild(image);
}
