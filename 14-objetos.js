const miAuto ={
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2020,
    condiciones: 'usado',
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`); //this hace referencia al objeto global, que en este caso es miAuto
    },
};

miAuto.color='rojo'; //así se añade una propiedad a un objeto
miAuto.modelo = 'Camry'; //así se modifica la propiedad de un objeto
miAuto ['anio'] = 2023; //tambien se pueden realizar las modificaciones con notacion de corchete

delete miAuto.condiciones; //así se eliminan propiedades de un objeto

console.log(miAuto.marca);
console.log(miAuto.anio);
miAuto.detalleDelAuto()
console.log(miAuto);

