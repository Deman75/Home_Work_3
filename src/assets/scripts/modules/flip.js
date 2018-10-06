const flip = document.querySelector('.flipper');
const button = document.querySelector('.authoriz__link-button');
const section = document.querySelector('.section__index');
const welcome = document.querySelector('.card');

button.addEventListener('click', (e) => {
  e.stopPropagation();
  if (flip.classList.contains('flipper_active')) return;
  flip.classList.add('flipper_active');
  button.style='opacity: 0';
  setTimeout(() => {
    button.style='display: none; opacity: 0';
  },400);
});

section.addEventListener('click', (e) => {
  e.stopPropagation();
  if (flip.classList.contains('flipper_active')) {
    flip.classList.remove('flipper_active');
    button.style='display: inline-block; opacity: 0';
    setTimeout(() => {
      button.style='opacity: 1; display: inline-block';
    },10);
  }
});

welcome.addEventListener('click', (e) => {
  e.stopPropagation();
});
