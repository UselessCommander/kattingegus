window.addEventListener("load", () => {
  // Vent lidt for at sikre Google Maps er klar
  const waitForGoogle = setInterval(() => {
    if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
      clearInterval(waitForGoogle);
      initMap();
    }
  }, 100);
});

function initMap() {
  const adresse = { lat: 55.6324, lng: 12.0454 }; // Kongemarksvej 74

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: adresse,
  });

  const marker = new google.maps.Marker({
    position: adresse,
    map: map,
    title: "Gus Kattinge – Kongemarksvej 74",
  });
}
