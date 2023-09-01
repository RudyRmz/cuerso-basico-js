const students = ['Maria', 'Sergio', 'Rosa', 'Daniel'];

const hiStudents = (students) => console.log(`Hola ${students}`);

while (students.length > 0){
    console.log(students);
    let student = students.shift();
    hiStudents(student);
}

////////////
function solution(estudiantes, deathCount, nuevo) {
    if (deathCount === 0) {
        estudiantes.push(nuevo);
    return estudiantes;
    } else if (deathCount === 1) {
        estudiantes.pop();
        estudiantes.push(nuevo);
    return estudiantes;
    } else if (deathCount === 2) {
        estudiantes.splice(1, 2);
        estudiantes.push(nuevo);
    return estudiantes
    }
}

console.log(solution(["Nico", "Zule"], 0, "Santi"))
console.log(solution(["Juan", "Juanita", "Daniela"], 1 ,"Julian"))
console.log(solution(["Nath", "Luisa", "Noru"], 2 , "Cami"))

function solution(estudiantes, deathCount, nuevo) {

    if (deathCount === 0) {
    estudiantes.push(nuevo)
    return estudiantes
    } else {
    for (let i = 0; i < deathCount; i++){
        estudiantes.pop()
    }
    estudiantes.push(nuevo)
    return estudiantes
    
    }
}

