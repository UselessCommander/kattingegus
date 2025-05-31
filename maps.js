// Når hele vinduet er indlæst, kører denne funktion
window.addEventListener("load", () => {
  // Opretter et interval som løbende tjekker om Google Maps API er klar
  const waitForGoogle = setInterval(() => {
    // Når både 'google' og 'google.maps' er tilgængelige, betyder det at API'en er klar
    if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
      // Stop intervallet – vi har ikke længere brug for at tjekke
      clearInterval(waitForGoogle);
      // Kald funktionen som initialiserer kortet
      initMap();
    }
  }, 100); // Tjek hvert 100 millisekund
});

// Funktion der initialiserer og viser Google Maps-kortet
function initMap() {
  // Definerer placeringen (latitude og longitude) for Gus Kattinge
  const adresse = { lat: 55.6324, lng: 12.0454 };

  // Opretter selve kortet og placerer det i div'en med id="map"
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,         // Zoomniveau (jo højere tal, jo tættere zoom)
    center: adresse,  // Kortet centreres på den definerede adresse
  });

  // Tilføjer en markør (pin) på kortet ved den samme adresse
  const marker = new google.maps.Marker({
    position: adresse,                      // Markerens placering
    map: map,                               // Hvilket kort markøren skal vises på
    title: "Gus Kattinge – Kongemarksvej 74",
  });
}
