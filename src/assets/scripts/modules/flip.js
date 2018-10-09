const form = document.querySelector('.authoriz');
const flip = document.querySelector('.flipper');
const button = document.querySelector('.authoriz__link-button');
const section = document.querySelector('.section__index');
const welcome = document.querySelector('.card');
const back = document.querySelector('#authoriz_back');

const flipCard = function(direct) { // direct сторона - back & front
  if (direct === "front") {
    if (flip.classList.contains('flipper_active')) return;
    flip.classList.add('flipper_active');
    button.style='opacity: 0';
    setTimeout(() => {
      button.style='display: none; opacity: 0';
    },400);
  }
  if (direct === "back") {
    if (flip.classList.contains('flipper_active')) {
      flip.classList.remove('flipper_active');
      button.style='display: inline-block; opacity: 0';
      setTimeout(() => {
        button.style='opacity: 1; display: inline-block';
      },10);
    }
  }
};

button.addEventListener('click', (e) => {
  e.stopPropagation();
  flipCard("front");
});

section.addEventListener('click', (e) => {
  e.stopPropagation();
  flipCard("back");
});

back.addEventListener('click', (e) => {
  e.stopPropagation();
  form.reset();
  flipCard("back");
});

welcome.addEventListener('click', (e) => {
  e.stopPropagation();
});
