// addEventListener

// Turn our HTML collection into an array to iterate on it.
const productCardsArray = [...document.getElementsByClassName("ProductCard")];

// Variable to store cards already displayed and avoid a new display.
let displayedCards = [];

// Listen the scroll event.
window.addEventListener("scroll", function () {
  // On each product stores inside productCardsArray.
  productCardsArray.forEach((productCard) => {
    // To calculate the position of the element relative to the viewport
    // getBoundingClientRect() method returns properties (distances)
    // to know if the element is visible or not.
    let positionCard = productCard.getBoundingClientRect();
    if (positionCard.top >= 0 && positionCard.bottom <= window.innerHeight) {
      // If the element visible on screen isn't inside displayedCards array,
      // displays it in the console and push it in displayedCards array to avoid a new display.
      if (!displayedCards.find((card) => card === productCard)) {
        let itemName = productCard.querySelector(
          ".ProductCard__title > div"
        ).innerHTML;
        let itemPrice = productCard.querySelector(
          ".ProductCard__price > strong"
        ).innerHTML;
        console.log(itemName, " ", itemPrice);
        displayedCards.push(productCard);
      }
    }
  });
});
