/* Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay */
import * as rs from "readline-sync";
console.log(`Este programa muestra cuántos números de los que se ingresen 
son positivos, cuántos son negativos y cuántos ceros hay.`)
const dimension:number= rs.questionInt('Ingrese la cantidad de numeros que quiera analizar: ')
const array: number[] = new Array (dimension)
let positivos: number = 0
let negativos: number = 0
let ceros: number = 0
for(let i = 0; i<dimension; i++) {
    array[i]=rs.questionInt(`Ingrese el numero ${i+1} de ${dimension}: `)
    if(array[i]>0) {
        positivos= positivos+1
    } else if (array[i]<0) {
        negativos=negativos+1
    } else {
        ceros = ceros+1
    }
}
console.log(`La cantidad de numeros positivos ingresados es: ${positivos}, la de negativos: ${negativos} y la de ceros: ${ceros}.`)