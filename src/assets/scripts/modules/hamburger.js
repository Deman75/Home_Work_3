console.log('hello from hamburger');

const burgerIcon = document.querySelector('.hamburger__icon');
const burgerMenu = document.querySelector('.hamburger-wrap');

burgerIcon.addEventListener('click', () => {
  if (burgerIcon.classList.contains('hamburger__icon_active')) {
    burgerIcon.classList.remove('hamburger__icon_active');
    burgerMenu.style='opacity: 0; display: flex';
    setTimeout(() => {
      burgerMenu.style='display: none; opacity: 0';
    }, 600);
  } else {
    burgerIcon.classList.add('hamburger__icon_active');
    burgerMenu.style='display: flex';
    setTimeout(() => {
      burgerMenu.style='display: flex; opacity: 1';
    }, 10);
  }
});
