function tarjetero(listaTarjetas) {
    let tarjetero = "";
    listaTarjetas.forEach( tarjeta => tarjetero += `
        <div class="card mb-3">
            <img src="${tarjeta.image}" class="card-img-top" alt="food">
            <h5 class="tituloTarjetas">${tarjeta.name}</h5>
            <div class="card-body d-flex flex-column ">
                <p class="card-text">${tarjeta.description}</p>
            </div>
            <div class="card-body d-flex justify-content-between align-items-center">
                <p class="precio"> $ ${tarjeta.price}</p>
                <a href="./Assets/Pages/details.html?parameter=${tarjeta._id}" class="botonDetalles">Details</a>
            </div>
        </div>`);
    return tarjetero;
};

function insertarHtml(todaLaInfo, id) {
    document.getElementById(id).innerHTML = todaLaInfo;
};

insertarHtml( tarjetero(data.events), "cajaTres" ); 
/*-------------------------------CHECKBOXES--------------------------------*/
let listaCategorias = new Set(data.events.map( tarjeta => tarjeta.category ));

function estructuraCat(lista) {
    let categoriaHtml = "";
    lista.forEach(categoria => categoriaHtml += `
        <div class="d-inline-flex px-1">
            <input class="form-check-input mx-2" type="checkbox" id="${categoria.replace(" ", "-")}" value="${categoria}">
            <label class="form-check-label" for="${categoria.replace(" ", "-")}">${categoria}</label>
        </div>`);
    return categoriaHtml;
}

insertarHtml( estructuraCat( listaCategorias ), "checkBoxes" );

/*-------------------------FILTRO-CHECKBOXES-------------------------------*/
let $checkbox = document.getElementById("checkBoxes");

$checkbox.addEventListener( "change", () => {
    let tarjetasfiltradas = filtrosCruzados(data.events);
    insertarHtml( tarjetero(tarjetasfiltradas), "cajaTres" );
})

function filtrar(array){
    let checkList = document.querySelectorAll("input[type='checkbox']:checked");
    let arrayCheck = Array.from(checkList);
    let valoresCheck = arrayCheck.map( input => input.value)
    let filtradosCheck = [];
    valoresCheck.forEach( e => {
        array.forEach(tarjeta => {
            if(tarjeta.category.includes(e)){
                filtradosCheck.push(tarjeta);
            }
        })
    })
    if(filtradosCheck.length == 0){
        filtradosCheck = data.events;
    };
    return filtradosCheck;
};

/*-------------------------FILTRO-SEARCH-------------------------------*/
let $search = document.getElementById("busquedaIndex");

$search.addEventListener("submit", (e)=>{
    let tarjetasfiltradas = filtrosCruzados(data.events);
    insertarHtml( tarjetero(tarjetasfiltradas), "cajaTres" )
});

function filtroSearch(array){
    let palabra = (new URLSearchParams(location.search).get("search")).toLocaleLowerCase().replace(" ", "");
    let tarjetaFiltrada = array.filter(tarjeta => tarjeta.name.toLocaleLowerCase().replace(" ", "").includes(palabra))
    return tarjetaFiltrada;
};

/*-------------------------FILTROS-CRUZADOS-------------------------------*/
function filtrosCruzados(array){
    let arrayCheckBoxes = filtrar(array);
    let filtroTotal = filtroSearch(arrayCheckBoxes);
    return filtroTotal;
};