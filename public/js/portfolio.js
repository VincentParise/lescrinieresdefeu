// Gestion des Images Section Réalisations
const sliderPortfolio = document.querySelector('.slider-portfolio');
const srcEnCoursSlider = document.querySelector('.img-visible-slider');
const allPicsPortfolio = Array.from(document.querySelectorAll('.images-item img'));
const fermerSlide = document.querySelector('.btn-fermer-slider');

let indexEncours

allPicsPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
    indexEnCours = allPicsPortfolio.indexOf(e.target)
    srcEnCoursSlider.src = allPicsPortfolio[indexEnCours].src
    sliderPortfolio.style.display = "block"
  })
})

fermerSlide.addEventListener('click',() => {
  sliderPortfolio.style.display = "none";
})
