const articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'TV', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Celular', costo: 10000},
    {nombre: 'Laptop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audifonos', costo: 1700},
];

//metodo find nos ayuda a encontrar un elemento dentro de un array y devolverlo
const encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === 'Laptop';
})

console.log(encuentraArticulo);


//metodo forEach nos ayuda a recorrer todo el array y mostrarlo por consol
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})


//metodo some nos ayuda a verificar si algun elemento cumple con una condicion y nos devuelve true o false
const articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
})

console.log(articulosBaratos);