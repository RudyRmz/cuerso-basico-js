//Declarativas

function miFuncion(){
    return 3;
}

miFuncion();
//Expresion

const miFuncion = function(a, b){
    return a + b;
}

miFuncion()

//////////////

function saludarEstudiantes(estudiante){
    console.log(estudiante);
}

saludarEstudiantes("Rudy");
///////////////////

function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}

////////////////

function sumar(a, b){
    const resultado = a + b;
    return resultado;
}

console.log(sumar(7, 3));

///////////////////
function resta(a, b){
    return a - b;
}

console.log(resta(7, 3));




