const preload = document.querySelector('#preload');
const preloadPercent = document.querySelector('#preload-percent');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

function showProgress (element, count) {
  element.innerHTML  = count + '%';
}
showProgress(preloadPercent, 0);

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');
  const imagesCount = images.length;
  const percent = 100/imagesCount;
  let progress = 0;


  for (var i = 0; i < imagesCount; i++) {
    var img_copy        = new Image();
    img_copy.src        = document.images[i].src;
    img_copy.onload     = img_load;
    img_copy.onerror    = img_load;
  }

  function img_load () {
    progress += percent;
    showProgress(preloadPercent, Math.round(progress,1));
  }
});

body.style = 'overflow: hidden';

window.onload = function () {
  preload.style='opacity: 0';
  wrapper.style='opacity: 1';
  setTimeout(()=>{
    body.style = 'overflow: ';
    preload.style='display: none';
  },1000);
};
