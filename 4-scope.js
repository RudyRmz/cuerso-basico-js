let miNombre = 'Rudy'; //Scope global

function nombre(){
    const miApellido = 'Ramirez'; //Scope local
    console.log(miNombre + ' ' + miApellido);
}

nombre();