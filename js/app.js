// globales
let usuario
let contraseña

class ropa{
    constructor(nombre, marca, precio){
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
    }
}
let ropa1 = new ropa("Sueter", "Nike", 15)
let ropa2 = new ropa("Pantalon", "Adidas", 20)
let ropa3 = new ropa("Camisa", "Falabella", 25)
let ropa4 = new ropa("Zapatos", "Reebok", 35)
let ropa5 = new ropa("Medias", "Adidas", 8)
let ropa6 = new ropa("Cinturon", "Rockefeller", 5)

let ropas = [ropa1, ropa2, ropa3, ropa4, ropa5, ropa6]

let opcion = Number(prompt("elige una opcion de la lista"));

while(opcion > 0 && opcion <=3 ){
    switch(opcion){
        case 1:
            alert("REGISTRO");
            usuario = prompt("ingrese su usuario")
            contraseña = prompt("ingrese contraseña")
            break;
        case 2:
            
            for(let i of ropas){
                console.log(i.nombre, i.marca, i.precio)
            }
            break;
        case 3:
            let producto, contador=0;
            function suma(){
                return contador + producto
            }
            let nP = prompt("cuantos productos desea comprar");
            for(let i = 1; i <= nP ; i++){
                producto = prompt("escribe el nombre de tu producto numero "+ i).toLowerCase();
                if (producto == "sueter"){
                    producto = ropa1.precio
                    contador = suma();
                }else if (producto == "pantalon"){
                    producto = ropa2.precio
                    contador = suma();
                }else if (producto == "camisa"){
                    producto = ropa3.precio
                    contador = suma();
                }else if (producto == "zapatos"){
                    producto = ropa4.precio
                    contador = suma();
                }else if (producto == "medias"){
                    producto = ropa5.precio
                    contador = suma();
                }else if (producto == "cinturon"){
                    producto = ropa6.precio
                    contador = suma();
                }else{
                    alert("Escribe el nombre de un producto de la lista");
                }         
            }
            alert("El total de tu compra es "+ contador + "&")
            break;
        default:
            alert("seleccione una opcion de la lista")
            break;
    }
    alert("Si quiere elegir otra opcion seleccionela ahora, de lo contrario escriba otro numero para salir")
    opcion = Number(prompt());
}