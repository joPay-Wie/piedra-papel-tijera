
let cantidadDeRondas = parseInt(prompt('¿Cuántas rondas deseás jugar?'));
let piedraPapelTijera = ['piedra', 'papel', 'tijera'];


const jugarPiedraPapelTijera = (jugadora, computadora) => {
    if (jugadora === 'piedra' && computadora === 'papel' || jugadora === 'tijera' &&
    computadora === 'piedra' || jugadora === 'papel' && computadora === 'tijera')
    { return 'Computadora ha ganado esta ronda'}
    if (jugadora === 'piedra' && computadora === 'tijera' || jugadora === 'tijera' &&
    computadora === 'papel' || jugadora === 'papel' && computadora === 'piedra')
    { return 'Jugadora ha ganado esta ronda'}
    else {
        return '¡Empate!'
    }
}

let puntajeJugadora = 0;
let puntajeComputadora = 0;

for (let i = 0; i < cantidadDeRondas; i++) {
    let eleccionDeUsuario = (prompt(`Ronda N°${i + 1} de ${cantidadDeRondas} 
    ¿Piedra, papel o tijera?`)).toLowerCase();
    let randomIndex = Math.floor(Math.random() * piedraPapelTijera.length);
    let randomSelection = piedraPapelTijera[randomIndex];
    
    let whoWins = jugarPiedraPapelTijera(eleccionDeUsuario, randomSelection);
         
        if (whoWins === 'Jugadora ha ganado esta ronda') {
            puntajeJugadora = puntajeJugadora + 1
         }
         else if (whoWins === 'Computadora ha ganado esta ronda') {
            puntajeComputadora = puntajeComputadora + 1
         }
         else { 
            puntajeJugadora = puntajeJugadora + 0  
            puntajeComputadora = puntajeComputadora + 0;
        }
    
    alert(`Ronda: ${i + 1} de ${cantidadDeRondas}
    Jugadora: ${eleccionDeUsuario}
    Computadora: ${randomSelection}
    ${jugarPiedraPapelTijera(eleccionDeUsuario, randomSelection)}
    Puntaje: ${puntajeJugadora} (Jugadora) - ${puntajeComputadora} (Computadora)`)
}

const winner = (a, b) => {
    if (a > b) return '¡¡Jugadora!!'
    else if (a < b) return '¡¡Computadora!!'
    else return '¡Ninguna! Fue un empate'
}

document.write(`La ganadora es... (redoble de tambores): ${winner(puntajeJugadora, puntajeComputadora)}`)
