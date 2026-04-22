// Ejercicio 2: Verificiar si usuario tiene la edad legal para votar
function puedeVotar(edad) {

console.log (edad)

if (edad >= 18) {
    return `Con la edad de ${edad} años puede votar`

}else if (edad <18) {
    return `Con la edad de  ${edad} años no puede votar`
}
}
console.log(puedeVotar(15))
console.log(puedeVotar(18))
console.log(puedeVotar(30))
console.log(puedeVotar(17))

// Ejercicio 3: Mayor de dos números
function mayorDeDos(num1, num2) {
console.log (num1, num2)
if (num1 > num2){
    return `El número 1 ${num1} es mayor que el número 2 ${num2}`
  
}else{
    return `El número 1 ${num1} no es mayor que el número 2 ${num2}`
}
}
console.log(mayorDeDos(30, 15))
console.log(mayorDeDos(45, 15))
console.log(mayorDeDos(20, 30))
console.log(mayorDeDos(15, 45))
console.log(mayorDeDos(50, 1))
