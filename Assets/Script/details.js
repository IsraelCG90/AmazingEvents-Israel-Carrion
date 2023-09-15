import { detalles } from "../Modules/functions.js";

const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";

let $contenedorDetalle = document.getElementById("contenedorDetalle");

fetch(URL_API)
  .then((response) => response.json())
  .then(({ events, currentDate }) => {
    let idEvento = new URLSearchParams(location.search).get("parameter");
    let evento = events.find( e => e._id == idEvento);
    $contenedorDetalle.innerHTML = detalles(evento, currentDate)
  })
  .catch( err => console.log(err))