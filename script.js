var valorElegido;
valorMaquina = 'piedra';
valorElegido = prompt('Piedra, Papel o tijera?', '');
var resultado;
if(valorElegido == valorMaquina){
    resultado = 'empate';
    
}
else if (valorElegido == "tijera") {
    resultado = 'perdiste';
}
else if (valorElegido == "papel") {
    resultado = 'ganaste';
}

else  {
    resultado = 'error';
}


document.write(resultado);