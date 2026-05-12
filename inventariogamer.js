let products = ["Mouse", "Teclado", "Monitor", "Audiofonos"];

function mostrarProductos(arreglo) {
    arreglo.forEach(producto => {
        console.log(producto);
    });
}

products.push("Camara", "SillaGamer", "Nintendo64", "Xbox360", "WiiU", "PokmemonCards");


mostrarProductos(products);

function eliminarUltimoProducto(arreglo) {
    let eliminado = arreglo.pop();
    console.log("Producto eliminado: " + eliminado);
}

eliminarUltimoProducto(products);

function reemplazarProducto(indice, nuevoProducto) {
    products.splice(1, 0, nuevoProducto);
    console.log("Producto agregado: " + nuevoProducto);
}

reemplazarProducto(1, "PlayStation3");

function buscarProducto(producto) {
    let indice = products.indexOf(producto);
    if (indice !== -1) {
        console.log("El producto '" + producto + "' se encuentra en la posición: " + indice);
    } else {
        console.log("El producto '" + producto + "' no existe en el arreglo.");
    }
}

buscarProducto("Camara");

function ordenarProductos(){
    console.log(products.sort());
}

ordenarProductos();

function mostarCantidad(){
    console.log(products.length);
}

mostarCantidad();
