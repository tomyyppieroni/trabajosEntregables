/* calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de un pastel y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar el pastel con el mayor puntaje.
Y si hay un empate? 🤔 En ese caso, informa que hubo un empate entre los participantes que corresponda. */
import * as rs from "readline-sync";
let empate = 0
let puntuacionDeEmpate = 0
let calcularPuntaje = (num1: number, num2: number, num3: number): number => {
    let total: number
    if ((num1 >= 1 && num1 <= 5) && (num2 >= 1 && num2 <= 5) && (num3 >= 1 && num3 <= 5)) {
        total = num1 + num2 + num3
    } else {
        console.log('Los puntajes deben deben ser entre 1 y 5, reingrese valores por favor.')
        total = 0
    }
    return total
}
let determinarGanador = (num1: number, num2: number, num3: number): string => {
    let ganador: string = ''
    let participantes = rs.questionInt('Ingrese la cantidad de participantes: ')
    let puntuacionMayor = 0
    if (participantes <= 0) {
        ganador = 'No hubo ganador.'
        console.log('La cantidad de participantes debe ser mayor o igual a 1.')
    } else {
        for (let i = 1; i <= participantes; i++) {
            num1 = rs.questionInt('Ingrese del 1 al 5, una puntuacion para el sabor del pastel: ')
            num2 = rs.questionInt('Ingrese del 1 al 5, una puntuacion para la presentacion del pastel: ')
            num3 = rs.questionInt('Ingrese del 1 al 5, una puntuacion para la dificultad que conlleva hacer el pastel: ')
            console.log(`El puntaje total de la torta del participante ${i} es: ${num1 + num2 + num3}`)

            if (calcularPuntaje(num1, num2, num3) == 0) {
                i--
            } else if (calcularPuntaje(num1, num2, num3) > puntuacionMayor) {
                puntuacionMayor = calcularPuntaje(num1, num2, num3)
                ganador = `El ganador es el participante ${i}.`
            } else if (calcularPuntaje(num1, num2, num3) == puntuacionMayor) {
                empate = 1
                puntuacionDeEmpate = puntuacionMayor
            }
        }
    }
    return ganador
}

let ganador = determinarGanador(0, 0, 0)
if (empate == 1) {
    console.log(`Hubo empate entre las tortas con ${puntuacionDeEmpate} de puntaje total.`)
}
console.log(ganador)
