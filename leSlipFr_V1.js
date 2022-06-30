// Intersection Operator
const productCardsArray = [...document.getElementsByClassName("ProductCard")];

productCardsArray.forEach((productCard) => {
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
  observer.observe(productCard);
});
