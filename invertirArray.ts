/* Almacene en un arreglo de tamaño N los números ingresados
por el usuario
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero */
import * as rs from "readline-sync";
const dimension: number = rs.questionInt('Ingrese la dimension del arreglo a invertir: ')
const array: number[] = new Array(dimension)
for (let i = 0; i < dimension; i++) {
    array[i] = rs.questionInt(`Para la posicion ${i + 1} de ${dimension} ingrese un numero: `)
}
const array2: number[] = new Array(dimension)
for (let i = 0; i < dimension; i++) {
    array2[i] = array[dimension - 1 - i]
}
console.log(array2)