


function enviado() {
   alert('Se anadio al carro');

}


/* function sumar(){
   document.getElementById('suma').value=parseInt
   (document.getElementById('cantidad').value+0)+1)
} */



/* estoy tratando de restar */



/* let suma = 0;
mas.onclick = () => {
 suma++;
 cantidad.value = suma;
}

let resta = 0;
menos.onclick = () => {
   
 resta--;
 cantidad.value = resta;
}
 */// Obtener los elementos y agregar eventos de clic
const cantidad = document.getElementById('cantidad');

const botonSumar = document.getElementById('mas');
botonSumar.addEventListener('click', sumarUno);

const botonRestar = document.getElementById('menos');
botonRestar.addEventListener('click', restarUno);

// Funciones para sumar y restar
function sumarUno() {
  let valorActual = parseInt(cantidad.innerText);
  valorActual++;
  cantidad.innerText = valorActual;
}

function restarUno() {
  let valorActual = parseInt(cantidad.innerText);
  valorActual--;
  cantidad.innerText = valorActual;
}





const enviar = document.getElementById('annadir');


      

enviar.addEventListener("click", enviado);





