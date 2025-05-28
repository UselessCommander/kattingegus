const div_items = document.querySelector('#items');

let items = [
  {
    "image": "img/enkel.png",
    "product": "ENKELBILLET",
    "price": 198
  },
  {
    "image": "img/klip.png",
    "product": "10X KLIPPEKORT",
    "price": 1950
  },
  {
    "image": "img/par.png",
    "product": "PAR-BILLET",
    "price": 350
  }
];

items.forEach(item => {
  const div_item = `
    <a href="index.html#booktid"><div class="item">
      <img src="${item.image}" alt="${item.product}">
      <div class="prices">
        <h3>${item.product}</h3>
        <p>${item.price} kr</p>
        
      </div>
    </div></a>
  `;
  div_items.insertAdjacentHTML("afterbegin", div_item);
});
