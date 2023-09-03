function crearTarjeta(indiceArray) {
  return `
    <div class="card mb-3">
        <img src="${indiceArray.image}" class="card-img-top" alt="food">
        <div class="card-body d-flex flex-column ">
            <h5 class="tituloTarjetas">${indiceArray.name}</h5>
            <p class="card-text">${indiceArray.description}</p>
        </div>
            <div class="card-body d-flex justify-content-between align-items-center">
            <p class="precio"> $ ${indiceArray.price}</p>
            <a href="./Assets/Pages/details.html" class="botonDetalles">Details</a>
        </div>
    </div>`;
};

function filtroFecha(listaTarjetasSinFiltro, fecha) {
  let aux = [];
  for (let tarjeta of listaTarjetasSinFiltro) {
    if (tarjeta.date >= fecha) {
      aux.push(tarjeta);
    };
  };
  return aux;
};

let listaTarjetasFiltradas = filtroFecha(data.events, data.currentDate);

function tarjetero(listaTarjetas) {
  let tarjetero = "";
  for (let tarjeta of listaTarjetas) {
    tarjetero += crearTarjeta(tarjeta);
  };
  return tarjetero;
};

let tarjeteroTotal = tarjetero(listaTarjetasFiltradas);

function mostrarTarjetas(totalTarjetas, id) {
    document.getElementById(id).innerHTML = totalTarjetas;
};

mostrarTarjetas(tarjeteroTotal, "cajaTresUpcoming");