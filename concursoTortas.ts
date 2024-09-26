/* calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de un pastel y devuelve la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar el pastel con el mayor puntaje.
Y si hay un empate? 🤔 En ese caso, informa que hubo un empate entre los participantes que corresponda. */
import * as rs from "readline-sync";
let empate: boolean = false
let puntuacionDeEmpate: number = 0
const calcularPuntaje = (num1: number, num2: number, num3: number): number => {
    let total: number
    if ((num1 >= 1 && num1 <= 5) && (num2 >= 1 && num2 <= 5) && (num3 >= 1 && num3 <= 5)) {
        total = num1 + num2 + num3
    } else {
        console.log('Los puntajes deben deben ser entre 1 y 5, reingrese valores por favor.')
        total = 0
    }
    return total
}
const determinarGanador = (): string => {
    let ganador: string = ''
    const participantes: number = rs.questionInt('Ingrese la cantidad de participantes: ')
    let puntuacionMayor: number = 0
    if (participantes <= 0) {
        return ganador = 'La cantidad de participantes debe ser mayor o igual a 1.'
    } else {
        for (let i = 1; i <= participantes; i++) {
            const num1: number = rs.questionInt('Ingrese del 1 al 5, una puntuacion para el sabor del pastel: ')
            const num2: number = rs.questionInt('Ingrese del 1 al 5, una puntuacion para la presentacion del pastel: ')
            const num3: number = rs.questionInt('Ingrese del 1 al 5, una puntuacion para la dificultad que conlleva hacer el pastel: ')
            console.log(`El puntaje total de la torta del participante ${i} es: ${num1 + num2 + num3}`)

            if (calcularPuntaje(num1, num2, num3) == 0) {
                i--
            } else if (calcularPuntaje(num1, num2, num3) > puntuacionMayor) {
                puntuacionMayor = calcularPuntaje(num1, num2, num3)
                empate = false
                ganador = `El ganador es el participante ${i} con un puntaje total de ${puntuacionMayor}.`
                
            } else if (calcularPuntaje(num1, num2, num3) == puntuacionMayor) {
                empate = true
                puntuacionDeEmpate = puntuacionMayor
            }
        }
    }
    return ganador
}

const ganador = determinarGanador()
if (empate == false) {
    console.log(ganador)
} else {
    console.log(`Hubo empate entre las tortas con ${puntuacionDeEmpate} de puntaje total, se debera seguir comiendo torta para determinar un ganador.`)
}
