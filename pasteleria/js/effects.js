// JavaScript para el carrusel de imágenes
let slideIndex = 0;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
  }
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

const prevButtons = document.querySelectorAll(".prev-button");
const nextButtons = document.querySelectorAll(".next-button");

prevButtons.forEach((button) => {
  button.addEventListener("click", () => plusSlides(-1));
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => plusSlides(1));
});


//VARIABLES DEL FORM
const enviar = document.getElementById("enviar")

enviar.addEventListener('click',()=>{
    //AQUI va la validacion del ei
    swal("¡Listo!", "Tu correo ha sido enviado con éxito!", "success");
})