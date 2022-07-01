// Intersection Operator

// Turn our HTML collection into an array to iterate on it.
const productCardsArray = [...document.getElementsByClassName("ProductCard")];

// For each product stores inside productCardsArray
productCardsArray.forEach((productCard) => {
  //  Intersection Observer API keeps track of intersection between
  //  a productCard and the screen.
  //  'entries' (array of objects) contains intersection data about the target element,
  //  'observer' allows us to stop the process.
  //  isIntersecting checks with a boolean if the target element and root element are intersecting.
  //  Callback code is fire on crossing the threshold set to 1 for full visibility.
  let observer = new IntersectionObserver(
    function (entries, observer) {
      if (entries[0].isIntersecting) {
        let itemName = productCard.querySelector(
          ".ProductCard__title > div"
        ).innerHTML;
        let itemPrice = productCard.querySelector(
          ".ProductCard__price > strong"
        ).innerHTML;
        console.log(itemName, " ", itemPrice);
        observer.unobserve(productCard);
      }
    },
    { threshold: [1] }
  );
  // To observe the target for intersection we use the observe method.
  observer.observe(productCard);
});
