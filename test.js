const nombre = 'Rudy';
const apellido = 'Ramirez';
const usuarioPlatzi = nombre + ' ' + apellido; 
const edad = 32;
const email = 'rudy@mail.com';
const mayorEdad = true;
const dineroAhorro = 50000;
const deudas = 500; 

const nombreCompleto = nombre + ' ' + apellido;
let totalDinero = dineroAhorro - deudas;
console.log(nombreCompleto);
console.log(totalDinero);


/////


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";



console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function saludo (nombres, apellidos, apodo){
    return ("Mi nombres es " + nombres + " " + apellidos + ", pero prefiero que me digas " + apodo + ".");
};

console.log(saludo(name, lastname, nickname));


/////////////
const tipoDeSuscripcion = "asdasd";

// switch (tipoDeSuscripcion) {
// case "Free":
//     console.log("Solo puedes tomar los cursos gratis");
//     break;
// case "Basic":
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//     break;
// case "Expert":
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//     break;
// case "ExpertPlus":
//     console
// }

function suscripcion (tipoDeSuscripcion){
    if (tipoDeSuscripcion === "Free"){
        return ("Solo puedes tomar los cursos gratis");
    }else if (tipoDeSuscripcion === "Basic"){
        return ("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }else if (tipoDeSuscripcion === "Expert"){
        return ("Puedes tomar casi todos los cursos de Platzi durante un año");
    }else if (tipoDeSuscripcion === "ExpertPlus"){
        return ("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }else{
        return ("No tienes una suscripción, intenta de nuevo.");
    }
}

console.log(suscripcion(tipoDeSuscripcion));

///////////
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 0;
while (i < 5){
    console.log("El valor de i es: " + i);
    i++;
}

let a = 10
while(a>=1){
    console.log("El valor de i es: " + a);
    a--;
}

////
let respuesta = prompt('¿Cuánto es 2 + 2 ?')

while (respuesta !== '4' ){
        let pregunta = prompt ('¿Cuánto es 2 + 2 ?');
        respuesta = pregunta; 
}



