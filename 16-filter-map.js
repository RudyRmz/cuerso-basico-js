const articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'TV', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Celular', costo: 10000},
    {nombre: 'Laptop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audifonos', costo: 1700},
];

//metodo filter para filtrar cosas especificas y generar un array nuevo
const articulosFiltrados = articulos.filter(function(articulo){ 
    return articulo.costo <= 500;
})

console.log(articulosFiltrados);

//metodo map nos ayuda a mapear todo el contenido del array y nos trae un nuevo array con el contenido que buscamos
const nombreArticulos = articulos.map(function(articulo){ 
    return articulo.nombre;
})

console.log(nombreArticulos);

//////////////
const cars = [
    {
    color: 'red',
    brand: 'Kia',
    },
    {
    color: 'gray',
    brand: 'Chevrolet',
    licensePlate: 'AAA111',
    },
    {
    licensePlate: 'RGB255',
    },
];

function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function(car){
        return car.licensePlate
    })
}

console.log(solution(cars));

