import { tarjeteroUpcomingPast, filtroFechaUpcoming, estructuraCat, filtrosCruzadosUpPast } from "../Modules/functions.js";

const URL_API = 'https://mindhub-xj03.onrender.com/api/amazing';

let $contenedorCards = document.getElementById('contenedorCards');
let $checkbox = document.getElementById("checkBoxes");
let $input = document.getElementById("inputUpcoming");
let $search = document.getElementById("search");

let eventosFiltrados;

fetch( URL_API )
  .then( response => response.json() )
  .then( ( {events, currentDate} ) => {
    eventosFiltrados = filtroFechaUpcoming(events, currentDate);
    $contenedorCards.innerHTML = tarjeteroUpcomingPast(eventosFiltrados); 
    let listaCategorias = [...new Set(eventosFiltrados.map(evento => evento.category))];
    $checkbox.innerHTML = estructuraCat(listaCategorias);
  })
  .catch( err => console.log(err))

$checkbox.addEventListener( "change", () => {
  filtrosCruzadosUpPast(eventosFiltrados, $input, $contenedorCards)
});

$search.addEventListener("click", (e) => {
  e.preventDefault();
  filtrosCruzadosUpPast(eventosFiltrados, $input, $contenedorCards);
})