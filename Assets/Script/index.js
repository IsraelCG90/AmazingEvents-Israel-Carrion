function crearTarjeta(objetoTarjeta) {
    return `
    <div class="card mb-3">
        <img src="${objetoTarjeta.image}" class="card-img-top" alt="food">
        <h5 class="tituloTarjetas">${objetoTarjeta.name}</h5>
        <div class="card-body d-flex flex-column ">
            <p class="card-text">${objetoTarjeta.description}</p>
        </div>
            <div class="card-body d-flex justify-content-between align-items-center">
            <p class="precio"> $ ${objetoTarjeta.price}</p>
            <a href="./Assets/Pages/details.html" class="botonDetalles">Details</a>
        </div>
    </div>`;
};

function tarjetero(listaTarjetas) {
    let tarjetero = "";
    for (let tarjeta of listaTarjetas) {
        tarjetero += crearTarjeta(tarjeta);
    };
    return tarjetero;
};

let tarjeteroTotal = tarjetero(data.events);

function mostrarTarjetas(todaLaInfo, id) {
    document.getElementById(id).innerHTML = todaLaInfo;
};

mostrarTarjetas(tarjeteroTotal, "cajaTres");