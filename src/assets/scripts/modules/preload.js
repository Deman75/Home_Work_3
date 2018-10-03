const preload = document.querySelector('#preload');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

body.style = 'overflow: hidden';

window.onload = function () {
  preload.style='opacity: 0';
  wrapper.style='opacity: 1';
  setTimeout(()=>{
    body.style = 'overflow: ';
    preload.style='display: none';
  },1000);
};
