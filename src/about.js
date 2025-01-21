import restauImage from "./img/restaurant.jpg";

export default function loadAbout() {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "";

    const image = document.createElement("img");
    image.src = restauImage;
    image.classList.add("background-image");

    const aboutText = document.createElement("div");
    aboutText.classList.add("about-text");
    aboutText.innerHTML = `<span class="highlight">Welcome</span> to a place where culinary passion meets authentic flavors.
                            Inspired by the rich traditions of <span class="highlight">French cuisine</span>, our restaurant brings together timeless recipes and a modern touch. 
                            Each dish is crafted with care, using fresh, locally sourced ingredients to create an unforgettable dining experience.
                            Whether you're celebrating a special occasion, enjoying a romantic evening, or simply savoring <span class="highlight">exceptional food</span>, we are dedicated to making every meal feel extraordinary.
                            Step into a world of warmth, tradition, and the finest flavors, where every visit becomes a <span class="highlight">cherished memory.</span>`;

    contentDiv.appendChild(aboutText);
    contentDiv.appendChild(image);
}
