// Ejercicio 2: Verificiar si usuario tiene la edad legal para votar
function puedeVotar(edad) {

console.log (edad)

if (edad >= 18) {
    return `Con la edad de ${edad} años puede votar`

} if (edad <18) {
    return `Con la edad de  ${edad} años no puede votar`
}
}
console.log(puedeVotar(15))
console.log(puedeVotar(18))
console.log(puedeVotar(30))
console.log(puedeVotar(17))

// Ejercicio 3: Mayor de dos números