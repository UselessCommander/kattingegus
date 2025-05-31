// Henter DOM-elementet med id="items", hvor produkterne skal vises
const div_items = document.querySelector('#items');

// Definerer et array af objekter – hvert objekt repræsenterer et produkt med billede, navn og pris
let items = [
  {
    "image": "img/enkel.png",      // Billedsti til ENKELBILLET
    "product": "ENKELBILLET",       // Navn på produktet
    "price": 198                    // Pris i kr
  },
  {
    "image": "img/klip.png",        // Billedsti til klippekort
    "product": "10X KLIPPEKORT",    // Navn på produktet
    "price": 1950                   // Pris i kr
  },
  {
    "image": "img/par.png",         // Billedsti til parbillet
    "product": "PAR-BILLET",        // Navn på produktet
    "price": 350                    // Pris i kr
  }
];

// Gennemløber hvert produkt i items-arrayet 
items.forEach(item => {
  // Skaber en HTML-struktur som string med billede, navn og pris
  const div_item = `
    <a href="index.html#booktid"><div class="item">
      <img src="${item.image}" alt="${item.product}">
      <div class="prices">
        <h3>${item.product}</h3>
        <p>${item.price} kr</p>
      </div>
    </div></a>
  `;
  
  // Indsætter HTML'en i starten af div_items-elementet
  div_items.insertAdjacentHTML("afterbegin", div_item);
});
