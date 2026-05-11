export function calcularEnvios(cantidad) {
    if (cantidad < 3) {
        return "No se permiten compras menores a 3 productos."
    } else if (cantidad >= 3 && cantidad <= 10) {
        return "El costo de envio es de $15 USD.";
    } else {
        return "El envio es gratis.";
    }
}

