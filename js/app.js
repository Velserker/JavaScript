// Declaraciones
//--------------

// Array de todos los Pokemon (que estan en data.js)
const allPokemon = [bulbasaur, charmander, squirtle, pikachu, eevee, mew, pidgey, zubat]

// Equipo Pokemon
let equipoPokemon = []

// Selectores
//-----------

const pokemonListContainer = document.querySelector('#pokemonListContainer')

const cardName = document.querySelector('.cardName')
const cardId = document.querySelector('.cardId')
const cardType = document.querySelector('.cardType')
const cardDesc = document.querySelector('.cardDesc')
const cardLink = document.querySelector('.cardLink')
const cardTop = document.querySelector('.cardTop')
const cardCTA = document.querySelector('.cardCTA')

const teamContainer = document.querySelector('.teamContainer')
const teamReset = document.querySelector('.teamCTA')

const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')

// Funciones
//----------

const guardarEnStorage = (nombre, valor) => {
    localStorage.setItem(nombre, JSON.stringify(valor))
}

const renderizarListaPokemon = (array) => {
    pokemonListContainer.innerHTML = ''
    array.forEach((pokemon) => {
        const pokemonButton = document.createElement('button')
        pokemonButton.classList.add('menuTab')
        pokemonButton.setAttribute('data-id', pokemon.id)
        pokemonButton.innerHTML = `
            <div class="menuTabImg">
                <img src="${pokemon.icon}" alt="${pokemon.name}">
            </div>
            <span class="menuTabText"> ${pokemon.name} </span>
        `
        pokemonListContainer.append(pokemonButton)
    })

    document.querySelectorAll('.menuTab').forEach((button) => {
        button.addEventListener('click', renderizarDatosPokemon)
    })
}

const renderizarDatosPokemon = (e) => {
    const pokemonIdSeleccionado = e.target.closest('.menuTab').getAttribute('data-id')
    const pokemonSeleccionado = allPokemon.find((pokemon) => pokemon.id == pokemonIdSeleccionado)

    cardName.textContent = pokemonSeleccionado.name
    cardId.textContent = `#${pokemonSeleccionado.id}`
    cardType.textContent = pokemonSeleccionado.type
    cardDesc.textContent = pokemonSeleccionado.desc
    cardLink.setAttribute('href', pokemonSeleccionado.url)
    cardTop.style.backgroundImage = `url(${pokemonSeleccionado.img})`
    cardTop.style.backgroundColor = pokemonSeleccionado.typeColor
    cardCTA.style.backgroundColor = pokemonSeleccionado.typeColor
    cardCTA.setAttribute('data-id', pokemonSeleccionado.id)
}

const agregarPokemonAlEquipo = (e) => {
    const pokemonIdSeleccionado = e.target.getAttribute('data-id')
    const pokemonSeleccionado = allPokemon.find((pokemon) => pokemon.id == pokemonIdSeleccionado)
    if (equipoPokemon.length < 6) {
        equipoPokemon.push(pokemonSeleccionado)
        guardarEnStorage('equipoPokemon', equipoPokemon)
    } else {
        alert('El equipo tiene un maximo de 6 Pokemon')
    }
    renderizarEquipoPokemon()
}

const renderizarEquipoPokemon = () => {
    teamContainer.innerHTML = ''
    equipoPokemon.forEach((pokemon) => {
        const pokemonEnEquipo = document.createElement('div')
        pokemonEnEquipo.classList.add('teamPokemon')
        pokemonEnEquipo.setAttribute('data-id', pokemon.id)
        pokemonEnEquipo.innerHTML = `
            <img src="${pokemon.icon}" alt="${pokemon.name}"></img>
        `
        teamContainer.append(pokemonEnEquipo)
    })

    document.querySelectorAll('.teamPokemon').forEach((button) => {
        button.addEventListener('click', eliminarPokemonDeEquipo)
    })
}

const eliminarPokemonDeEquipo = (e) => {
    const pokemonIdSeleccionado = e.target.closest('.teamPokemon').getAttribute('data-id')
    equipoPokemon = equipoPokemon.filter((pokemon) => pokemon.id != pokemonIdSeleccionado)
    guardarEnStorage('equipoPokemon', equipoPokemon)
    renderizarEquipoPokemon()
}

const vaciarEquipo = () => {
    equipoPokemon = []
    guardarEnStorage('equipoPokemon', equipoPokemon)
    teamContainer.innerHTML = ''
}

const buscarPokemon = () => {
    const query = searchBar.value.toLowerCase()
    const arrayResultados = allPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(query))
    renderizarListaPokemon(arrayResultados)
}


// EventListeners
//---------------

cardCTA.addEventListener('click', agregarPokemonAlEquipo)
teamReset.addEventListener('click', vaciarEquipo)
searchButton.addEventListener('click', buscarPokemon)
searchBar.addEventListener('input', buscarPokemon)

// Ejecuciones
//------------

renderizarListaPokemon(allPokemon)

if (localStorage.getItem('equipoPokemon')) {
    equipoPokemon = JSON.parse(localStorage.getItem('equipoPokemon'))
    renderizarEquipoPokemon()
}