
  // Hent burger-knappen
  const hamburger = document.querySelector(".hamburger");

  // Hent navigationsmenuen
  const nav = document.querySelector("nav.mobile-nav");

  // Hent logo-billedet
  const logoImg = document.getElementById("logo-img");

  // Hent alle links i menuen
  const navLinks = document.querySelectorAll("nav.mobile-nav a");

  // Toggle menuen ved klik på burger-knappen
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("active");

    const menuIsOpen = nav.classList.contains("show");

    // Skift logo og scroll-lock afhængigt af menuens status
    logoImg.src = menuIsOpen ? "img/whitelogo.png" : "img/darkbluelogo.png";
    document.body.classList.toggle("lock-scroll", menuIsOpen);
  });

  // Når man klikker på et menupunkt (mobil)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Luk menuen og fjern aktive tilstande
      nav.classList.remove("show");
      hamburger.classList.remove("active");
      logoImg.src = "img/darkbluelogo.png";
      document.body.classList.remove("lock-scroll");
    });
  });

