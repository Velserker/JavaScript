// globales
let usuario
let contraseña

let opcion = Number(prompt("elige una opcion de la lista"));

while(opcion > 0 && opcion <=3 ){
    switch(opcion){
        case 1:
            alert("REGISTRO");
            usuario = prompt("ingrese su usuario")
            contraseña = prompt("ingrese contraseña")
            break;
        case 2:
            alert("Sueter 10$ - Pantalon 13$ - Camisa 15$ - Zapatos 20& - Medias 2$ - Cinturon 5&")
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
                    producto = 10;
                    contador = suma();
                }else if (producto == "pantalon"){
                    producto = 13;
                    contador = suma();
                }else if (producto == "camisa"){
                    producto = 15;
                    contador = suma();
                }else if (producto == "zapatos"){
                    producto = 20;
                    contador = suma();
                }else if (producto == "medias"){
                    producto = 2;
                    contador = suma();
                }else if (producto == "cinturon"){
                    producto = 5;
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