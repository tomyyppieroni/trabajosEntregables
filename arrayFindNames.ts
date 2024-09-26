import * as rs from "readline-sync";
const letters:string[] = ['a', 'b', 'c', 'd', 'e']
console.log(letters)
const names:string[] = ['Jorge', 'Pedro', 'Marta', 'Micaela', 'Flor']
const nameToFind:string= rs.question('Ingrese nombre a buscar: ')
const long = names.length
let result:string= 'No encontrado.'
for (let i = 0; i<long; i++) {
    if((names[i].toLowerCase() == nameToFind.toLowerCase()) || (names[i].toUpperCase() == nameToFind.toUpperCase())) {
        result = 'Encontrado.'
    }
}
console.log(result)