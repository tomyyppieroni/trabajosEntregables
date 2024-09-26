/* • Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario */
import * as rs from "readline-sync";
const array1:number[]=new Array(6)
const array2:number[]=new Array(6)
const array3:number[]=new Array(6)
console.log('Este programa suma 2 vectores de 6 digitos y muestra los valores resultantes: ')
for(let i = 0; i<6; i++) {
    array1[i] = rs.questionInt(`Ingrese un numero para la posicion ${i + 1} de 6 del primer vector: `)
}
for(let i = 0; i<6; i++) {
    array2[i] = rs.questionInt(`Ingrese un numero para la posicion ${i + 1} de 6 del segundo vector: `)
}
for(let i = 0; i<6; i++) {
    array3[i]=array1[i]+array2[i]
    console.log(`El resultado para la posicion ${i + 1} de 6 del vector resultado es: ${array3[i]}`)
}
