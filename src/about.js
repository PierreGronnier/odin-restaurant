import restauImage from "./img/restaurant.jpg";

export default function loadAbout() {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "";

    const image = document.createElement("img");
    image.src = restauImage;
    image.classList.add("background-image");

    contentDiv.appendChild(image);
}
