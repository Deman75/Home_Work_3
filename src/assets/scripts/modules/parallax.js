const parallaxContainer = document.getElementById('parallax');
const layers = parallaxContainer.children;

const moveLayers = function (e) {
  const initialX = (window.innerWidth / 2) - e.pageX;
  const initialY = (window.innerHeight / 2) - e.pageY;

  [].slice.call(layers).forEach(function(layer, index){
    let div = index / 100;
    let positionX = initialX * div;
    let positionY = initialY * div;
    let bottomPosition = (window.innerHeight / 2) * div;
    let image = layer.firstElementChild;
    let transformString ='';

    transformString = `translate(${positionX}px, ${positionY}px)`;
    layer.style.transform = transformString;

    if (image.classList.contains('parallax__cloud_3')) {
      image.style = `left: 82%; bottom: 54%; width: 20%`;
    } else if (image.classList.contains('parallax__cloud_2')) {
      image.style = `left: 40%; bottom: 44%; width: 20%`;
    } else if (image.classList.contains('parallax__cloud_1')) {
      image.style = `left: 30%; bottom: 4%; width: 70%`;
    } else {
      image.style.bottom = '-' + bottomPosition + 'px';
    }


  });
};

document.addEventListener('DOMContentLoaded', moveLayers);
window.addEventListener('mousemove', moveLayers);
