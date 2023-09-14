import { detalles } from "../Modules/functions.js";

const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";

let $contenedorDetalle = document.getElementById("contenedorDetalle");

fetch(URL_API)
  .then((response) => response.json())
  .then(({ events, currentDate }) => {
    let idEvento = new URLSearchParams(location.search).get("parameter");
    console.log(idEvento)
    let evento = events.filter( e => e._id == idEvento);
    console.log(evento);
    $contenedorDetalle.innerHTML = detalles(evento, currentDate);
    console.log(detalles(evento, currentDate))
  })
  .catch( err => console.log(err))