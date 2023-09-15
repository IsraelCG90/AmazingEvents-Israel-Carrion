import { tarjeteroUpcomingPast, filtroFechaPast, estructuraCat, filtrosCruzadosUpPast } from "../Modules/functions.js";

const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';

let $contenedorCards = document.getElementById('contenedorCards');
let $checkbox = document.getElementById("checkBoxes");
let $input = document.getElementById("inputPast");
let $search = document.getElementById("search");

let eventosFiltrados;

fetch ( URL_API )
  .then( response => response.json())
  .then( ( {events, currentDate} ) => {
    eventosFiltrados = filtroFechaPast(events, currentDate);
    $contenedorCards.innerHTML = tarjeteroUpcomingPast(eventosFiltrados);
    let listaCategorias = [...new Set(events.map(evento => evento.category))];
    $checkbox.innerHTML = estructuraCat(listaCategorias);
  })
  .catch( err => console.log(err))

$checkbox.addEventListener( "change", () => {
  filtrosCruzadosUpPast(eventosFiltrados, $input, $contenedorCards)
})

$search.addEventListener("click", (e) => {
  e.preventDefault();
  filtrosCruzadosUpPast(eventosFiltrados, $input, $contenedorCards)
})