const SCREEN_SMALL = 640;
const LABELS = {
  OPEN_MENU: 'Open menu',
  CLOSE_MENU: 'Close menu',
};
const CLASSES = {
  ACTIVE: 'active',
  NO_SCROLL: 'no-scroll',
  ICON: {
    MENU: 'gg-menu',
    CLOSE: 'gg-close',
  },
};

const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navToggleIcon = navToggle.querySelector('i');

const toggleMenu = () => {
  navMenu.classList.toggle(CLASSES.ACTIVE);

  const wasMenuOpened = navMenu.classList.contains(CLASSES.ACTIVE);

  navMenu.setAttribute('aria-expanded', wasMenuOpened);
  navToggle.setAttribute(
    'aria-label',
    wasMenuOpened ? LABELS.CLOSE_MENU : LABELS.OPEN_MENU
  );
  navToggleIcon.classList.toggle(CLASSES.ICON.CLOSE);
  navToggleIcon.classList.toggle(CLASSES.ICON.MENU);
  document.body.classList.toggle(CLASSES.NO_SCROLL);
};

const closeMenu = () => {
  navMenu.classList.remove(CLASSES.ACTIVE);
  navMenu.setAttribute('aria-expanded', false);
  navToggle.setAttribute('aria-label', LABELS.OPEN_MENU);
  navToggleIcon.classList.remove(CLASSES.ICON.CLOSE);
  navToggleIcon.classList.add(CLASSES.ICON.MENU);
  document.body.classList.remove(CLASSES.NO_SCROLL);
};

window.onresize = (event) => {
  if (
    window.innerWidth >= SCREEN_SMALL &&
    navMenu.classList.contains(CLASSES.ACTIVE)
  ) {
    closeMenu();
  }
};
