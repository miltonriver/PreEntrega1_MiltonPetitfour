/* class Producto {  
    constructor(nombre, precio, tacc) {   
        this.nombre = nombre;
        this.precio = precio;
        this.tacc = tacc;
        }
        agregarIva() {
            return this.precio * 1.21;
        }
        
        calcularDescuento() {
            if (this.tacc == "si") {
                return this.precio * 0.9;
            } else {
                return this.precio;
            }
        }
    }
    function crearProducto() {
        let nombre = prompt("Ingrese nombre");
        let precio = Number(prompt("Ingrese precio"));
        let tacc = prompt("Es producto sin tacc");
        let producto = new Producto(nombre, precio, tacc);
        return producto;
    } */
    
    /* let i = 1;
    while (i < 4) {
        let producto = crearProducto();
        console.log(producto);
        i++;}

        let precio = prompt("definir precio");
        if (precio < 20){
            alert ("el precio es menor que 20")
        } else if (precio < 50){
            alert ("el precio es menor que 50")
        }else if (precio < 80){
            alert("el precio es menor que 80")
        } else {
            alert("el precio es mayor que 100")
        }; */