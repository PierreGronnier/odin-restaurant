import restauImage from "./img/restaurant.jpg";
import beefBourguignonImage from "./img/boeuf-bourguignon.jpg";
import coqAuVinImage from "./img/coq-au-vin.jpeg";
import duckConfitImage from "./img/canard-confit.jpg";
import ratatouilleImage from "./img/ratatouille.jpg";
import cremeBruleeImage from "./img/creme-brulee.jpg";
import fondantImage from "./img/fondant.jpg";
import tarteTatinImage from "./img/tarte-tatin.jpg";
import profiterolesImage from "./img/profiteroles.jpg";
import redWineImage from "./img/red-wine.png";
import champagneImage from "./img/champagne.jpg";
import cafeImage from "./img/cafe-au-lait.jpg";
import perrierImage from "./img/perrier.jpg";

export default function loadMenu() {
    const contentDiv = document.querySelector("#content");

    contentDiv.textContent = "";

    const menuContainer = document.createElement("div");
    const image = document.createElement("img");
    image.src = restauImage;
    image.classList.add("background-image");
    menuContainer.classList.add("menu-container");

    const menuSections = [
        {
            title: "Main Dishes",
            items: [
                {
                    name: "Boeuf Bourguignon",
                    image: beefBourguignonImage,
                    description: "Traditional French stew with tender beef, mushrooms, and red wine sauce.",
                },
                {
                    name: "Coq au Vin",
                    image: coqAuVinImage,
                    description: "Classic dish of chicken braised in red wine with mushrooms and bacon.",
                },
                {
                    name: "Duck Confit",
                    image: duckConfitImage,
                    description: "Crispy duck leg cooked slowly in its own fat, served with roasted potatoes.",
                },
                {
                    name: "Ratatouille",
                    image: ratatouilleImage,
                    description: "A vibrant vegetable medley cooked with olive oil, garlic, and herbs.",
                },
            ],
        },
        {
            title: "Desserts",
            items: [
                {
                    name: "Crème Brûlée",
                    image: cremeBruleeImage,
                    description: "Silky custard with a caramelized sugar crust.",
                },
                {
                    name: "Chocolate Fondant",
                    image: fondantImage,
                    description: "Rich molten chocolate cake served warm.",
                },
                {
                    name: "Tarte Tatin",
                    image: tarteTatinImage,
                    description: "Upside-down caramelized apple tart.",
                },
                {
                    name: "Profiteroles",
                    image: profiterolesImage,
                    description: "Light choux pastry filled with vanilla ice cream, topped with warm chocolate sauce.",
                },
            ],
        },
        {
            title: "Drinks",
            items: [
                {
                    name: "Château Margaux",
                    image: redWineImage,
                    description: "A fine French red wine with deep flavors.",
                },
                {
                    name: "Champagne Brut",
                    image: champagneImage,
                    description: "Crisp and bubbly champagne for any celebration.",
                },
                {
                    name: "Café au Lait",
                    image: cafeImage,
                    description: "Classic French coffee with milk.",
                },
                {
                    name: "Perrier Sparkling Water",
                    image: perrierImage,
                    description: "Refreshing sparkling water from France.",
                },
            ],
        },
    ];

    menuSections.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("menu-section");

        const title = document.createElement("h2");
        title.textContent = section.title;
        sectionDiv.appendChild(title);

        const grid = document.createElement("div");
        grid.classList.add("menu-grid");

        section.items.forEach((item) => {
            const card = document.createElement("div");
            card.classList.add("menu-card");

            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            const itemName = document.createElement("h3");
            itemName.textContent = item.name;

            const itemDescription = document.createElement("p");
            itemDescription.textContent = item.description;

            card.appendChild(img);
            card.appendChild(itemName);
            card.appendChild(itemDescription);
            grid.appendChild(card);
        });

        sectionDiv.appendChild(grid);
        menuContainer.appendChild(sectionDiv);
    });

    contentDiv.appendChild(image);
    contentDiv.appendChild(menuContainer);
}
