var imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"]; // Agrega las rutas de las imágenes que deseas mostrar
var indice = 0;

var flechaAnterior = document.querySelector(".flecha-anterior");
var flechaSiguiente = document.querySelector(".flecha-siguiente");
var imagenActual = document.querySelector(".imagen-actual img");

flechaAnterior.addEventListener("click", mostrarImagenAnterior);
flechaSiguiente.addEventListener("click", mostrarImagenSiguiente);

function mostrarImagenAnterior() {
  indice--;
  if (indice < 0) {
    indice = imagenes.length - 1;
  }
  actualizarImagen();
}

function mostrarImagenSiguiente() {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0;
  }
  actualizarImagen();
}

function actualizarImagen() {
  imagenActual.src = imagenes[indice];
}
