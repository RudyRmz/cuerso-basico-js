var contador = 1

contador += 2
contador -= 1
contador *= 5
contador /= 2

console.log(contador)

//Operadores binarios:
3 + 2 //Suma
50 - 10 // Resta
10 * 20 //Multiplicación
20 / 2 //División

"Diego " + "De Granda" //concatenación de strings

//Operadores unitarios:
!false //negación de la negación = true

//Operadores de asignación:
var a = 1; //Asignamos un valor a la variable

//Operadores para comparar:
3 == "3"; //Compara los valores y devuelve "true" en este caso

3 === "3"; //Compara y valida los tipos y valores. Devuelve "falso" en este caso

5 < 3 //Compara y valida si el 5 es menor a 3
5 > 3 //Compara y valida si el 5 es mayor a 3
5 <= 6 //Compara y valida si el 5 es menor o igual al 6
5 >= 6 //Compara y valida si el 5 es mayor o igual al 6

a && b //Valida si ambas variables son verdaderas para que se cumpla la condición
a || b //Aquí se cumple la condición si alguna de las dos variables es verdadera

var edad = 40
edad++ //Incrementa el valor en 1

edad += 2 //Incrementa el valor por 2


// function solution(secreto) {
//     if (secreto > 5) {
//     resultado = true;
//     } else {
//     resultado = false;
//     }
//     return resultado
// }

function solution(secreto) {
    if (secreto > 5) {
    return true;
    } else {
    return false;
    }
}

console.log(solution(1));
console.log(solution(5));
console.log(solution(10));