export function esVip(cantidad, total) {
    if (cantidad > 20 && total > 1000) {
        return `Cliente VIP`
    } else {
        return `Cliente REGULAR`
    }
}