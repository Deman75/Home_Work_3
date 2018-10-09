const section = document.querySelector('#section__feedback');
const blur = document.querySelector('#feedback__blur');
const width = 1800;
const height = 1699;
var   divW = section.offsetWidth;
var   divH = section.offsetHeight;
var finalWidth;

const changeBlurBgSize = () => {
  divW = section.offsetWidth;
  divH = section.offsetHeight;

  if ((divW/divH)<(width/height)) {
    finalWidth = (divH * (width/height)) + (divW * 0.1);
  } else {
    finalWidth = divW;
  }

  blur.style = `background-size: ${finalWidth}px`;
}

changeBlurBgSize();

window.onresize = () => {
  changeBlurBgSize();
};
