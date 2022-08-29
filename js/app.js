

const hamburguesas = [burguer1, burguer2, burguer3, burguer4, burguer5]

let carrito
if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else {
    carrito = []
}


const cardContainerQuery = document.querySelector('#cardContainer')
const carritoContainer = document.querySelector('#carritoContainer')
const carritoList = document.querySelector('.carritoList')
const irAlCarrito = document.querySelector('.irAlCarrito')
const carritoVacio = document.querySelector('.carritoSinNada')



// Funciones

const guardarEnStorage = (nombre, valor) => {
    localStorage.setItem(nombre, JSON.stringify(valor))
}

const renderizarListaHamburguesas = (array) => {
    array.forEach((hamburguesa) => {
    const cardProducto = document.createElement('div')
    cardProducto.innerHTML = `
        <h3 class="cardTitle"> Hamburguesa ${hamburguesa.nombre} </h3>
        <img src="${hamburguesa.imgSrc}" class="cardImg">
        <p class="cardDesc"> ${hamburguesa.ingredientes}</p>
        <span class="cardPrice"> $${hamburguesa.precio} Cop </span>
        <button class="buttonCTA" data-id=${hamburguesa.nombre}> Agregar al Carrito </button>
    `
    cardProducto.className = 'card'
    cardContainerQuery.append(cardProducto)
    })

    document.querySelectorAll('.buttonCTA').forEach((button) => {
        button.addEventListener('click', agregarAlCarrito)
    })
}

const agregarAlCarrito = (e) => {
   
    const hamburguesaIdSeleccionada = e.target.closest('.buttonCTA').getAttribute('data-id')
    const hamburguesaSeleccionada = hamburguesas.find((hamburguesa) => hamburguesa.nombre == hamburguesaIdSeleccionada)
    carrito.push(hamburguesaSeleccionada)
    guardarEnStorage('carrito', (carrito))
    
}

const renderizarCarrito = () => {
    carritoList.innerHTML = ''
    carrito.forEach((hamburguesa) => {
        const carritoEnUso = document.createElement('div')
        carritoEnUso.classList.add('carrito')
        carritoEnUso.setAttribute('data-id', hamburguesa.nombre)
        carritoEnUso.innerHTML = `
            <div class="carritoImg">
                <img src="${hamburguesa.imgSrc}" alt="${hamburguesa.nombre}">
            </div>
            <span class="carritoText"> ${hamburguesa.nombre} </span>
        `
        carritoVacio.innerHTML = ` Vaciar `
        carritoList.append(carritoEnUso)
    })
    document.querySelectorAll('.carrito').forEach((button) => {
        button.addEventListener('click', eliminarHamburguesaDeCarrito)
    })
}

const eliminarHamburguesaDeCarrito = (e) => {
    const HamburguesaIdSeleccionada = e.target.closest('.carrito').getAttribute('data-id')
    carrito = carrito.filter((hamburguesa) => hamburguesa.nombre != HamburguesaIdSeleccionada)
    guardarEnStorage('carrito', carrito)
    renderizarEquipoPokemon()
}

const vaciarEquipo = () => {
    carrito = []
    guardarEnStorage('carrito', carrito)
    carritoList.innerHTML = ''
    carritoVacio.innerHTML = ''
}



const carritoGuardado = JSON.parse(localStorage.getItem('carrito'))
console.log(carritoGuardado);


// EventListeners

irAlCarrito.addEventListener('click', renderizarCarrito)
carritoVacio.addEventListener('click', vaciarEquipo)


// Ejecuciones

renderizarListaHamburguesas (hamburguesas)
if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}