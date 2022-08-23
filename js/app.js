// globales
let usuario
let contraseña

class burguer{
    constructor(nombre, imgSrc, ingredientes, precio){
        this.nombre = nombre
        this.imgSrc = imgSrc
        this.ingredientes = ingredientes
        this.precio = precio
    }
}
const burguer1 = new burguer("Clasica",'https://www.atriumpizzayburger.com/sites/default/files/images/productos/tradicional.jpg', "Pan brioche, 150g de carne Certified Angus Beef ®, Queso mozarella, Lechuga, Tomate", 17)
const burguer2 = new burguer("Gaucha", "https://www.atriumpizzayburger.com/sites/default/files/images/productos/gaucha.jpg","Pan brioche, 150g de carne Certified Angus Beef ®, Queso mozarella, Chorizo argentino, Chimichurri, Tomate, Cebolla grillé, Salsa de la casa", 21)
const burguer3 = new burguer("Americana", "https://www.atriumpizzayburger.com/sites/default/files/images/productos/_mg_1550_compress.jpg", "Pan brioche, 150g de carne Certified Angus Beef ®, Queso cheddar, Tocineta, Pepinillos, Lechuga, Tomate, Cebolla grillé, Salsa de la casa", 21)
const burguer4 = new burguer("Doble toque", "https://www.atriumpizzayburger.com/sites/default/files/images/productos/doble_troque.jpg", "Pan brioche, 300g de carne Certified Angus Beef ®, Doble queso americano, Doble tocineta, Cebolla crunch, Lechuga crespa, Tomate fresco, Salsa de la casa", 30)
const burguer5 = new burguer("Suprema", "https://www.atriumpizzayburger.com/sites/default/files/images/productos/la_fantastica.jpg", "Pan brioche, 150g de carne Certified Angus Beef ®, Queso cheddar, Tocineta, Huevo, Lechuga, Tomate, Cebolla grillé, Salsa de la casa", 8)


const burguers = [burguer1, burguer2, burguer3, burguer4, burguer5]

const cardContainerQuery = document.querySelector('#cardContainer')

burguers.forEach((bur) => {
    const cardProducto = document.createElement('div')
    cardProducto.innerHTML = `
        <h3 class="cardTitle"> Hamburguesa ${bur.nombre} </h3>
        <img src="${bur.imgSrc}" class="cardImg">
        <p class="cardDesc"> ${bur.ingredientes}</p>
        <span class="cardPrice"> $${bur.precio} Cop </span>
        <button class="buttonCTA"> Agregar al Carrito </button>
    `
    cardProducto.className = 'card'
    cardContainerQuery.append(cardProducto)
})



let opcion = Number(prompt("elige una opcion de la lista"));

while(opcion > 0 && opcion <=3 ){
    switch(opcion){
        case 1:
            alert("REGISTRO");
            usuario = prompt("ingrese su usuario")
            contraseña = prompt("ingrese contraseña")
            break;
        case 2:
            let producto
            var precioTotal = 0
            const nP = window.prompt("cuantos productos desea comprar");
            for(let i = 1; i <= nP ; i++){
                producto = prompt("escribe el nombre de tu producto numero "+ i).toLowerCase();
                burguers.forEach((Hnombre) => {
                    if (Hnombre.nombre.toLowerCase() === producto){
                        precioTotal += Hnombre.precio 
                    }
                })       
            }
            alert("El total de tu compra es "+ precioTotal + " Cop");
            break;
        default:
            alert("seleccione una opcion de la lista")
            break;
    }
    alert("Si quiere elegir otra opcion seleccionela ahora, de lo contrario escriba otro numero para salir")
    opcion = Number(prompt());
}