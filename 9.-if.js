

if(false){
    console.log("Hola");
} else{
    console.log("soy false");
}

///////////////
const edad = 15;

if (edad === 18){
    console.log("Puedes votar, sera tu primera votacion");
}else if (edad > 18){
    console.log("Puedes votar de nuevo");
}else{
    console.log("Aun no puedes votar");
}

/////////////////Operador ternario
const numero = 6;
const resultado = numero === 1 ? "Si soy un uno" : "No, no soy un uno";

console.log(resultado);

///////////////////

const jugador1 = 'tijera';
const jugador2 = 'piedra';

function juego(player1, player2){
    if (player1 === player2){
        return "Empate";
    }else if ((player1 === 'piedra' && player2 === 'tijera') || (player1 === 'papel' && player2 === 'piedra')||(player1 === 'tijera' && player2 === 'papel')){
        return "Ganador jugador 1";
    }else if ((player1 === 'piedra' && player2 === 'papel') || (player1 === 'papel' && player2 === 'tijera') || (player1 === 'tijera' && player2 === 'piedra')){
        return "Ganador jugador 2";
    }else{
        return "No se ha podido determinar el ganador, intente de nuevo";
    }
}

console.log(juego(jugador1, jugador2));
