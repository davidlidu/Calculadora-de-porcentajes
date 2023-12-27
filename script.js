const titulo = document.querySelector('h1');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const boton = document.getElementById('btn_calcular');
const contenedor_resultado = document.querySelector('.resultado');

boton.addEventListener('click' , btnOnClick);

function btnOnClick(event) {
    event.preventDefault();
    var aux1 = Number(input1.value);
    var aux2 = Number(input2.value);
    var resultado = (aux1 * aux2) / 100;
    contenedor_resultado.innerHTML = 'El '+aux1+'% de '+aux2+' es: '+ resultado;
}