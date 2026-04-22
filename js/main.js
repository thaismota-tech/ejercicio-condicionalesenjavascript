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


// Ejercicio 4: Determinar si un número es divisible por 5
function esDivisiblePorCinco(num) {
console.log (num)
if (num % 5 ===0) {
      return true;
} else {
        return false;
}
}
console.log(esDivisiblePorCinco (5))
console.log(esDivisiblePorCinco (20))
console.log(esDivisiblePorCinco (27))
console.log(esDivisiblePorCinco (50))
console.log(esDivisiblePorCinco (100))


// Ejercicio 5: Clasificar nota de examen
function clasificarNota(nota) {
console.log (nota)
if (nota >= 90) {
 return `Excelente`;
} else if (nota >= 70 && nota <90) {
 return `Buena`;
} else if (nota >= 50 && nota <70){
  return `Regular`;
} else {
   return `Insuficiente`;
}
}
console.log(clasificarNota (25))
console.log(clasificarNota (50))
console.log(clasificarNota (75))
console.log(clasificarNota (80))
console.log(clasificarNota (100))