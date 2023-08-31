let frutas = ['Manzana', 'Pera', 'Piña', 'Fresa'];
console.log(frutas);
console.log(frutas.length); //lenght es la cantidad de elementos del array
console.log(frutas[0]);

let masFrutas = frutas.push('Uvas'); //push agrega elementos al final del array
console.log(frutas);

let ultimo = frutas.pop('Uvas'); //pop elimina elementos del final del array
console.log(frutas);

let nuevaLongitud = frutas.unshift('Uvas'); //unshift agrega elementos al inicio del array
console.log(frutas);

let borrarFruta = frutas.shift('Uvas'); //shift elimina elementos del inicio del array
console.log(frutas);

let posicion = frutas.indexOf('Pera'); //indexOf busca la posicion de un elemento en el array
console.log(posicion);

let nuevaLongitud2 = frutas.splice(2, 1); //splice elimina elementos del array
console.log(nuevaLongitud2);

let cadenaFrutas = 'Las Frutas son muy ricas '
console.log(cadenaFrutas.slice(4, -5));//slice corta un array
console.log(cadenaFrutas.includes('frutas')); //includes busca si un elemento está en el array, devolviendo true o false segun corresponda
console.log(cadenaFrutas.replace('frutas', 'frutas y verduras')); //replace cambia el valor de un elemento del array;
console.log(cadenaFrutas.split(' ')); //split divide un string en un array segándole un caracter como delimitador
console.log(cadenaFrutas.toUpperCase()); //toUpperCase convierte un string en mayásculas
console.log(cadenaFrutas.toLowerCase()); //toLowerCase convierte un string en minásculas
console.log(cadenaFrutas.trim()); //trim elimina los espacios en blanco al inicio y al final de un string
console.log(cadenaFrutas.replaceAll(' ', '')); //replaceAll cambia todos los espacios en blanco por un caracter específico
console.log(cadenaFrutas.concat('y ','la ','carne ', 'tambien')); //concat une dos strings
console.log(cadenaFrutas.padStart(50, '*')); //padStart agrega caracteres al inicio de un string
console.log(cadenaFrutas.padEnd(50, '*')); //padEnd agrega caracteres al final de un string

////////////////
const nombres = ["Andres", "Ramiro", "Silvia"]
// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]

///////////////
// En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.
function solution(arraySecreto) {
    if (typeof arraySecreto[0] === 'string') {
    return true
    } else {
    return false
    }
}

console.log(solution(["Huevo", "Gallina", "Vaca"]))
console.log(solution([1, "Gallina", "Vaca"]))


function solution(arraySecreto) {
    return(typeof arraySecreto[0] === "string"? true: false)
}

console.log(solution(["Huevo", "Gallina", "Vaca"]))
console.log(solution([1, "Gallina", "Vaca"]))