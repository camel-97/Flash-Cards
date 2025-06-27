
//Navbar
const menuBtn = document.getElementById("menuIcon")
const navDropDown = document.querySelector(".dropDown")
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("change");
    navDropDown.classList.toggle("hidden");
} );

//create constants for each user input
const frontContent = document.getElementById("frontFace");
const backContent = document.getElementById("backFace");
const enterBtn = document.getElementById("enterBtn");
const cardGridContainer = document.getElementById("card-grid-container");

//actions upon saving card
enterBtn.addEventListener("click", () => {

    //creation of card related elements, appended as:
    //card > inner car > front and back faces.
    const card = document.createElement("div");
    card.className = "card";
    cardGridContainer.appendChild(card);

    const cardInner = document.createElement("div");
    cardInner.className = "card-Inner"
    card.appendChild(cardInner);

    const cardFront = document.createElement("div");
    const cardBack = document.createElement("div");
    cardFront.className = "cardFront"
    cardBack.className = "cardBack"
    cardInner.append(cardFront, cardBack);

    //assign constant values to faces of card
    const frontText = frontContent.value;
    const backText = backContent.value;
    cardFront.textContent = frontText;
    cardBack.textContent = backText;
    //reset make a card section
    frontContent.value = "";
    backContent.value = "";
}
)