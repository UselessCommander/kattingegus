const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const whitelogo = document.querySelector('.whitelogo');
const blueLogo = document.querySelector('.bluelogo'); 

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');

  if (whitelogo) {
    whitelogo.classList.toggle('is-active');
  }

  if (blueLogo) {
    blueLogo.classList.toggle('is-active');  }
});
