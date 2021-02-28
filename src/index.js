const SCREEN_SMALL = 640;

const navMenu = document.getElementById('nav-menu');

const toggleMenu = () => {
  navMenu.classList.toggle('active');
  navMenu.setAttribute('aria-expanded', navMenu.classList.contains('active'));
  document.body.classList.toggle('no-scroll');
};

const closeMenu = () => {
  navMenu.classList.remove('active');
  navMenu.setAttribute('aria-expanded', false);
  document.body.classList.remove('no-scroll');
};

window.onresize = (event) => {
  if (
    window.innerWidth >= SCREEN_SMALL &&
    navMenu.classList.contains('active')
  ) {
    closeMenu();
  }
};
