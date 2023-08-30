const numero = 1;

switch (numero){
    case 1:console.log("Soy uno");
    break;
    case 2:console.log("Soy dos");
    break;
    case 3:console.log("Soy tres");
    break;
    default:console.log("No soy nada");
}

//////////////////

const jugador1 = 'papel';
const jugador2 = 'tijera';

function juego(player1, player2){
    switch (player1){
        case 'piedra':
            if (player2 === 'tijera'){
                return "Ganador jugador 1";
            }else if (player2 === 'papel'){
                return "Ganador jugador 2";
            }else if(player2 === 'piedra'){
                return "Empate";
            }else{
                return "No se ha podido determinar el ganador, intente de nuevo";
            }
            
        case 'papel':
            if (player2 === 'piedra'){
                return "Ganador jugador 1";
            }else if (player2 === 'tijera'){
                return "Ganador jugador 2";
            }else if(player2 === 'papel'){
                return "Empate";
            }else{
                return "No se ha podido determinar el ganador, intente de nuevo";
            }
            
        case 'tijera':
            if (player2 === 'papel'){
                return "Ganador jugador 1";
            }else if (player2 === 'piedra'){
                return "Ganador jugador 2";
            }else if(player2 === 'tijera'){
                return "Empate";
            }else{
                return "No se ha podido determinar el ganador, intente de nuevo";
            }
            
        default:
            return "No se ha podido determinar el ganador, intente de nuevo";
}
}

console.log(juego(jugador1, jugador2));


