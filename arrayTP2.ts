import * as rs from "readline-sync";
/*Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/
const numbers: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
const long: number = numbers.length;
let numberTop: number = 0
console.log(numbers)
for (let i = 0; i < long; i++) {
    if (numberTop < numbers[i]) {
        numberTop = numbers[i]
    }
}
console.log(`El numero mayor del arreglo es: ${numberTop}`)
let parImpar = (num: number): string => {
    if (num % 2 === 0) {
        return `${num} es par.`
    } else {
        return `${num} es impar.`
    }
}
const resultado: string = parImpar(numberTop)
console.log(resultado)