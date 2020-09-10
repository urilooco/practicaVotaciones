/**
 * MAIN
 */

const encuesta = new Pregunta();
const titulo = document.getElementById('tituloModal');
const divResultados = document.getElementById('resultados');

function eventListener() {
    document.getElementById('btnFavor').addEventListener('click', sumaFavor);
    document.getElementById('btnContra').addEventListener('click', sumaContra);
    document.getElementById('btnAbstencion').addEventListener('click', sumaAbstencion);

    document.getElementById('btnParar').addEventListener('click', mandarRespuesta);
}

eventListener();

function sumaFavor() {
    encuesta.favor++;
    console.log(encuesta.favor);
}

function sumaContra() {
    encuesta.contra++;
    console.log(encuesta.contra);
}

function sumaAbstencion() {
    encuesta.abstener++;
    console.log(encuesta.abstener);
}

function mandarRespuesta() {
    let resultados= encuesta.datosVotos(encuesta.favor, encuesta.contra, encuesta.abstener);

    divResultados.appendChild(resultados);
}