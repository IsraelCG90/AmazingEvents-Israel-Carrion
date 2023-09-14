export function tarjetero(eventos) {
    let tarjetero = "";
    eventos.forEach( evento => tarjetero += `
        <div class="card mb-3">
            <img src="${evento.image}" class="card-img-top" alt="food">
            <h5 class="tituloTarjetas">${evento.name}</h5>
            <div class="card-body d-flex flex-column ">
                <p class="card-text">${evento.description}</p>
            </div>
            <div class="card-body d-flex justify-content-between align-items-center">
                <p class="precio"> $ ${evento.price}</p>
                <a href="./Assets/Pages/details.html?parameter=${evento._id}" class="botonDetalles">Details</a>
            </div>
        </div>`);
    return tarjetero;
};

export function estructuraCat(lista) {
    let categoriaHtml = "";
    lista.forEach(categoria => categoriaHtml += `
        <div class="d-inline-flex px-1">
            <input class="form-check-input mx-2" type="checkbox" id="${categoria.replace(" ", "-")}" value="${categoria}">
            <label class="form-check-label" for="${categoria.replace(" ", "-")}">${categoria}</label>
        </div>`);
    return categoriaHtml;
}

export function filtroFechaUpcoming(eventos, fecha) {
    let eventosFiltrados = eventos.filter( evento => evento.date >= fecha );
    return eventosFiltrados;
};

export function filtroFechaPast(tarjetasSinFiltro, fecha) {
    let aux = tarjetasSinFiltro.filter( tarjeta => tarjeta.date < fecha);
    return aux;
};


/*----------------------------FILTRO-CHECKBOXES-------------------------------*/
export function filtroCheck(eventos){
    let checkList = document.querySelectorAll("input[type='checkbox']:checked");
    let arrayCheck = Array.from(checkList);
    let valoresCheck = arrayCheck.map( input => input.value);
    let filtradosCheck = [];
    valoresCheck.forEach( e => {
        eventos.forEach(tarjeta => {
            if(tarjeta.category.includes(e)){
                filtradosCheck.push(tarjeta);
            };
        });
    });
    if(filtradosCheck.length == 0){
        filtradosCheck = eventos;
    };
    return filtradosCheck;
};

/*---------------------------------FILTRO-SEARCH-------------------------------*/
export function filtroSearch(eventos, input){
    let eventoFiltrado = eventos.filter(evento => evento.name.toLowerCase().includes(input.toLowerCase()))
    return eventoFiltrado;
};

/*--------------------------------FILTRO-CRUZADO-------------------------------*/
export function filtrosCruzados(eventos, input, contenedor){
    let resultadoFiltro = filtroSearch( filtroCheck(eventos), input.value );
    contenedor.innerHTML = tarjetero(resultadoFiltro);
};

export function detalles(evento, fecha){
    if(evento.date >= fecha){
        console.log(evento)
        return `
        <div class="card" id="${evento._id}">
            <img src="${evento.image}" class="card-img-top" alt="imgdetail" id="imgdetalle" />
            <div class="card-body ">
                <h5 class="card-title">${evento.name}</h5>
                <p><span>Date</span>: ${evento.date}</p>
                <p><span>Description</span>: ${evento.description}</p>
                <p><span>Category</span>: ${evento.category}</p>
                <p><span>Place</span>: ${evento.place}</p>
                <p><span>Capacity</span>: ${evento.capacity}</p>
                <p><span>Estimate</span>: ${evento.estimate}</p>
                <p><span>Price</span>: $${evento.price}</p>
            </div>
        </div>`
    } else {
        return `
        <div class="card" id="${evento._id}">
            <img src="${evento.image}" class="card-img-top" alt="imgdetail" id="imgdetalle" />
            <div class="card-body ">
                <h5 class="card-title">${evento.name}</h5>
                <p><span>Date</span>: ${evento.date}</p>
                <p><span>Description</span>: ${evento.description}</p>
                <p><span>Category</span>: ${evento.category}</p>
                <p><span>Place</span>: ${evento.place}</p>
                <p><span>Capacity</span>: ${evento.capacity}</p>
                <p><span>Assistance</span>: ${evento.assistance}</p>
                <p><span>Price</span>: $${evento.price}</p>
            </div>
        </div>`
    } 
};