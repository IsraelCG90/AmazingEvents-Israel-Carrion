//UrlSearchParams es una funcion constructora que nos permite construir una url y pasarle un string
let idTarjeta = new URLSearchParams(location.search).get("parameter");

let tarjeta = data.events.find(tarjeta => tarjeta._id === idTarjeta);

function detalles(dato){
    if(dato.date >= data.currentDate){
        return `
        <div class="card" id="cardDetalles">
            <img src="${dato.image}" class="card-img-top" alt="imgdetail" id="imgdetalle" />
            <div class="card-body ">
                <h5 class="card-title">${dato.name}</h5>
                <p><span>Date</span>: ${dato.date}</p>
                <p><span>Description</span>: ${dato.description}</p>
                <p><span>Category</span>: ${dato.category}</p>
                <p><span>Place</span>: ${dato.place}</p>
                <p><span>Capacity</span>: ${dato.capacity}</p>
                <p><span>Estimate</span>: ${dato.estimate}</p>
                <p><span>Price</span>: $${dato.price}</p>
            </div>
        </div>`
    } else {
        return `
        <div class="card" id="cardDetalles">
            <img src="${dato.image}" class="card-img-top" alt="imgdetail" id="imgdetalle" />
            <div class="card-body ">
                <h5 class="card-title">${dato.name}</h5>
                <p><span>Date</span>: ${dato.date}</p>
                <p><span>Description</span>: ${dato.description}</p>
                <p><span>Category</span>: ${dato.category}</p>
                <p><span>Place</span>: ${dato.place}</p>
                <p><span>Capacity</span>: ${dato.capacity}</p>
                <p><span>Assistance</span>: ${dato.assistance}</p>
                <p><span>Price</span>: $${dato.price}</p>
            </div>
        </div>`
    } 
};

function insertarHtml(todaLaInfo, id) {
    document.getElementById(id).innerHTML = todaLaInfo;
};

insertarHtml(detalles(tarjeta), "detalle")