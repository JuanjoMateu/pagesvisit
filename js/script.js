const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

let contador = localStorage.getItem('contadorVisitas')
contador++;
contadorVisitas.textContent = contador;
console.log(contadorVisitas)
localStorage.setItem('contadorVisitas', contador);

btnReestablecer.addEventListener("click", () => {
    contador = 0;
    console.log('Este botón funciona');
    contadorVisitas.innerHTML = contador;
    localStorage.setItem('contadorVisitas', contador);
});