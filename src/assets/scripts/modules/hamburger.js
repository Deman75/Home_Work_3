const burgerIcon = document.querySelector('.hamburger__icon');
const burgerMenu = document.querySelector('.hamburger-wrap');
const left = document.querySelector('.hamburger-wrap_left');
const right = document.querySelector('.hamburger-wrap_right');
const menu = document.querySelector('.hamburger__menu');
const items = document.querySelectorAll('.hamburger__item');
let animationFlag = false; // если флаг true то не будет реакции на кнопку

function showMenuItem(show) { // show or hide
  let i = 0;
  if (show === 'show') {
    let showItem = setInterval(() => {
      items[i].style='opacity: 1; animation: menuItemsShow linear .2s';
      i++
      if (i>=items.length) clearInterval(showItem);
    },200);
  } else if (show === 'hide') {
    for (i = 0; i < items.length; i++) {
      items[i].style='opacity: 0';
    }
  }
}

function menuShow (show) {// show or hide
  if (show === 'show') {
    animationFlag = true;
    burgerIcon.classList.add('hamburger__icon_active');
    burgerMenu.style='display: flex';
    setTimeout(() => {
      left.style='margin-right: 0';
      right.style='margin-left: 0';
    }, 10);
    setTimeout(() => {
      menu.style='display: block';
      showMenuItem('show');
      animationFlag = false;
    }, 1000);
  } else if (show === 'hide') {
    animationFlag = true;
    burgerIcon.classList.remove('hamburger__icon_active');
    left.style='margin-right: 50%';
    right.style='margin-left: 50%';
    menu.style='display: none';
    setTimeout(() => {
      burgerMenu.style='display: none';
      showMenuItem('hide');
      animationFlag = false;
    }, 1100);
  }
}

burgerIcon.addEventListener('click', () => {
  if (burgerIcon.classList.contains('hamburger__icon_active') && !animationFlag) {
    menuShow('hide');
  } else {
    menuShow('show');
  }
});
