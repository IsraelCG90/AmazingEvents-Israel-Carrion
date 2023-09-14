import { tarjetero, filtroFechaUpcoming, estructuraCat, filtrosCruzados } from "../Modules/functions.js";

const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';

let $contenedorCards = document.getElementById('contenedorCards');
let $checkbox = document.getElementById("checkBoxes");
let $input = document.getElementById("inputUpcoming");
let $search = document.getElementById("search");

let eventos;

fetch( URL_API )
  .then( response => response.json() )
  .then( ( {events, currentDate} ) => {
    eventos = events;
    let eventosFiltrados = filtroFechaUpcoming(events, currentDate);
    $contenedorCards.innerHTML = tarjetero(eventosFiltrados);
    let listaCategorias = [...new Set(events.map(evento => evento.category))];
    $checkbox.innerHTML = estructuraCat(listaCategorias);
  })
  .catch( err => console.log(err))

$checkbox.addEventListener( "change", () => {
  filtrosCruzados(eventos, $input, $contenedorCards)
});

$search.addEventListener("click", (e) => {
    e.preventDefault();
    filtrosCruzados(eventos, $input, $contenedorCards);
})