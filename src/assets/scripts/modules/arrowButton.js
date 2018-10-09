const hero = document.querySelector(".hero");
const buttonDown = document.querySelector(".hero__arrow");
const buttonUp = document.querySelector(".button-up__icon");
let speed = 1;
let coord;


function scroll(elem, direction) {
  let windowY = window.pageYOffset; // Переменная windowY хранит информацию на сколько пикселей прокручена страница по вертикали
  if (direction === 'bottom') {
    coord = elem.getBoundingClientRect().bottom; // Переменная coord хранит позицию текущей статьи относительно начала окна браузера
  } else if (direction === 'top') {
    coord = elem.getBoundingClientRect().top;
  }
  let start = null; //

  requestAnimationFrame(step); // requestAnimationFrame() – встроенный метод JavaScript для плавной анимации. Функция step будет вызвана, когда придёт время обновить анимацию на следующей перерисовке.

  function step(time) {
      if (start === null)  start = time;
      let progress = time - start;

      let coordY;
        if (coord < 0) {
          coordY = Math.max(windowY - progress / speed, windowY + coord)
        } else {
          coordY = Math.min(windowY + progress / speed, windowY + coord);
        }

      window.scrollTo(0, coordY); // Скроллим страницу на coordY пикселей по вертикали и 0 по горизонтали

      if (coordY != windowY + coord) {
        requestAnimationFrame(step); // Если еще не докрутили страницу до нужной статьи, то снова вызываем метод
      }
    }
}

buttonDown.addEventListener("click", () => {
  speed = .3;
  scroll(hero, 'bottom');
})

if (buttonUp){
  buttonUp.addEventListener("click", () => {
    speed = .3;
    scroll(hero, 'top');
  })
}
