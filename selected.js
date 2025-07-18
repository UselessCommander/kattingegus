function visValgtTekstOne() {
  const selectElementOne = document.getElementById('minSelectOne');
  const valgtoptionOne = selectElementOne.options[selectElementOne.selectedIndex].text;
  const resultatHat = document.querySelector('.resultat-hatte');
  const prisFeltHat = document.querySelector('.pris-hatte');

  if (selectElementOne.value) {
    const antal = parseInt(selectElementOne.value);
    resultatHat.innerText = valgtoptionOne + " x";
    const pris = antal * 30;
    prisFeltHat.innerText = "Pris: " + pris + " kr";
  } else {
    resultatHat.innerText = "0";
    prisFeltHat.innerText = "";
  }
}

function visValgtTekstTwo() {
  const selectElement = document.getElementById('minSelect');
  const valgtoption = selectElement.options[selectElement.selectedIndex].text;
  const resultatTowel = document.querySelector('.resultat-handklaeder');
  const prisFeltTowel = document.querySelector('.pris-handklaeder');

  if (selectElement.value) {
    const antal = parseInt(selectElement.value);
    resultatTowel.innerText = valgtoption + " x";
    const pris = antal * 20;
    prisFeltTowel.innerText = "Pris: " + pris + " kr";
    
  } else {
    resultatTowel.innerText = "0";
    prisFeltTowel.innerText = "";
  }
}
function displayChoosentime(){
    const time = querySelectorAll('.')
}


// Saunagushatte – Slet
document.querySelector('.delete-hat').addEventListener('click', () => {
  document.querySelector('.resultat-hatte').innerText = "";
  document.querySelector('.pris-hatte').innerText = "";
  document.getElementById('minSelectOne').selectedIndex = 0; // reset dropdown
});

// Håndklæder – Slet
document.querySelector('.delete-towel').addEventListener('click', () => {
  document.querySelector('.resultat-handklaeder').innerText = "";
  document.querySelector('.pris-handklaeder').innerText = "";
  document.getElementById('minSelect').selectedIndex = 0;
});

