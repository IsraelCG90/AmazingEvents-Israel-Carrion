import { detalles } from "../Modules/functions.js";

const URL_API = "https://mindhub-xj03.onrender.com/api/amazing";

let $contenedorDetalle = document.getElementById("contenedorDetalle");

fetch(URL_API)
  .then((response) => response.json())
  .then(({ events, currentDate }) => {
    let idEvento = new URLSearchParams(location.search).get("parameter");
    //location.search recupera el querystring '?parameter=....'
    //newURLSearchParams usamos el querystring y creamos un objeto del tipo URLSearchParams
    //con el objeto params ahora podemos utilizar los metodos como el get
    //recuperamos el valor del parametro 'parameter' que se almacena en idEvento
    let evento = events.find( e => e._id == idEvento);
    $contenedorDetalle.innerHTML = detalles(evento, currentDate)
  })
  .catch( err => console.log(err))