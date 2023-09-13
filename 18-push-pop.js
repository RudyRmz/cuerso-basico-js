//push agrega elementos al final del array

const numArray = [1,2,3,4,5]

function newNum(){
    numArray.push(6,7)
    return numArray
}

console.log(newNum());


//shift elimina el primer elemento del array
const numArray2 = [1,2,3,4,5]

let shiftArray1 = numArray2.shift()

console.log(numArray2);

//pop elimina el ultimo elemento del array
const numArray3 = [1,2,3,4,5]

let shiftArray2 = numArray3.pop()

console.log(numArray3);