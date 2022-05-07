const opciones = ['piedra', 'papel', 'tijera'];
const resultado = ['Ganaste', 'Perdiste', 'Empate'];
var valorUser;
var valorMaquina;
var puntajeUser = 0;
var puntajeMaquina = 0;

function partido() {
    //EL USUARIO INGRESA UN VALOR
    valorUser = prompt('Piedra, Papel o Tijera?'); 
    valorUser = valorUser.toLowerCase();

    //VALIDACION DEL VALOR ELEGIDO
    if (opciones.includes(valorUser)) {
    console.log('El usuario elige ' + valorUser);
    }
    else {
    alert('Has ingresado un valor incorrecto');
    }

    //LA MAQUINA GENERA UN VALOR RANDOM
    var rand = Math.floor(Math.random()* opciones.length);
    valorMaquina = opciones [rand];
    console.log('La máquina elige ' + valorMaquina);

    //RESULTADOS
    for (let i = 0; i < opciones.length; i++) {
        if (valorMaquina == opciones [i] && valorUser == opciones [i]) {
            
            console.log(resultado[2]);
            break; //EMPATE
        }
        else if (valorMaquina == opciones [0]) {//SI LA MAQUINA ELIJE PIEDRA
            if (valorUser == opciones [1]) {
                puntajeUser = puntajeUser + 1;
                console.log(resultado[0]);
                break; //EL JUGADOR GANA
            }
            else if (valorUser == opciones [2]) {
                puntajeMaquina = puntajeMaquina + 1;
                console.log(resultado[1]);
                break; //EL JUGADOR PIERDE
            }
        }
        else if (valorMaquina == opciones [1]) {//SI LA MAQUINA ELIJE PAPEL
            if (valorUser == opciones [2]) {
                puntajeUser = puntajeUser + 1;
                console.log(resultado[0]);
                break; // EL JUGADOR GANA
            }
            else if (valorUser == opciones [0]) {
                puntajeMaquina = puntajeMaquina + 1;
                console.log(resultado[1]);
                break; //EL JUGADOR PIERDE
            }
        }
        else if (valorMaquina == opciones [2]) {//SI LA MAQUINA ELIJE TIJERA
            if (valorUser == opciones [0]) {
                puntajeUser = puntajeUser + 1;
                console.log(resultado[0]);
                break; //EL JUGADOR GANA
            }
            else if (valorUser == opciones [1]) {
                puntajeMaquina = puntajeMaquina + 1;
                console.log(resultado[1]);
                break; //EL JUGADOR PIERDE
            }
        }      
    }
}

while (puntajeUser < 3 && puntajeMaquina < 3) {
    partido();
    console.log('Puntaje usuario: ' + puntajeUser);
    console.log('Puntaje máquina: ' + puntajeMaquina);
}
if (puntajeUser == 3) {
    alert('Felicdades, has ganado!');
} else if(puntajeMaquina == 3){
    alert('Has perdido');
}




