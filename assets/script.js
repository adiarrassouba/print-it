const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let indiceCourant = 0;

let flecheGauche = document.querySelector("#banner .arrow_left");
flecheGauche.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
	indiceCourant -= 1;
	if (indiceCourant < 0) { 
		indiceCourant = slides.length -1
	}

	let baliseImage = document.querySelector(".banner-img");
	baliseImage.setAttribute("src",`./assets/images/slideshow/${slides[indiceCourant].image}`)
	let baliseP = document.querySelector("#banner p")
	baliseP.innerHTML = `${slides[indiceCourant].tagLine}`
	let dotselect = document.querySelectorAll(".dot")
	dotselect.forEach((elementencours) => {
		elementencours.classList.remove('dot_selected');
	  });
	dotselect[indiceCourant].classList.add("dot_selected")



});

let flecheDroite = document.querySelector("#banner .arrow_right");
flecheDroite.addEventListener("click", () => {
    console.log("Vous avez cliqué sur le bouton")
	indiceCourant += 1;

	if (slides.length == indiceCourant ) {
		indiceCourant = 0;
	}

	let baliseImage = document.querySelector(".banner-img");
	//baliseImage.setAttribute("src",`./assets/images/slideshow/${slides[indiceCourant].image}`)
	baliseImage.setAttribute("src","./assets/images/slideshow/" + slides[indiceCourant].image)
	let baliseP = document.querySelector("#banner p")
	baliseP.innerHTML = `${slides[indiceCourant].tagLine}`
	let dotselect = document.querySelectorAll(".dot")
	dotselect.forEach((elementencours) => {
		elementencours.classList.remove('dot_selected');
	  });
	dotselect[indiceCourant].classList.add("dot_selected")

});

//ecrire en javascript les dot pour les injecter dans le HTML:
let finalDots = '';
for (let i = 0; i < slides.length; i++) {
	let dot = `<div class="dot"></div>`;
	if(i==0){ 
		dot =`<div class="dot dot_selected"></div>`
	}
	finalDots += dot;
}

let dotsElement = document.querySelector(".dots");
dotsElement.innerHTML = finalDots;
