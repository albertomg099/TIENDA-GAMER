export function calcularDescuentos(total) {
    if (total < 200) {
        let faltante = 200 - total;
        return `Faltan $${faltante} para una promocion.`
    } else if (total >= 200 && total <= 500) {
        let descuento = total * 0.05;
        return { mensaje: "Tienes un descuento del %5", nuevoTotal: total - descuento }
    } else {
        let descuento = total * 0.12;
        return { mensaje: "Tienes un descuento del %12", nuevoTotal: total - descuento }
    }
}
