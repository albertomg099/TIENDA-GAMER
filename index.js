// Importacion de funciones.
import { calcularEnvios } from "./envio.js";
import { calcularDescuentos} from "./descuentos.js";
import { esVip } from "./vip.js";

// Solicitud de datos.
const nombre = prompt("Nombre del cliente:");
const cantidad = parseInt(prompt("Cantidad de articulos:"));
const total = parseFloat(prompt("Monto total:"));

console.log(`¡Hola ${nombre}!`);

// Calculo de envio.
const resultadoEnvio = calcularEnvios(cantidad);
console.log(resultadoEnvio);

// Calculo de descuento.
const resultadoDesc = calcularDescuentos(total);
if(typeof resultadoDesc === "string"){
console.log(resultadoDesc);
} else{ 
    console.log(resultadoDesc.mensaje);
    console.log(`Nuevo Total: $${resultadoDesc.nuevoTotal.toFixed(2)} USD.`);
}

// VIP O REGULAR
console.log(esVip(cantidad,total));