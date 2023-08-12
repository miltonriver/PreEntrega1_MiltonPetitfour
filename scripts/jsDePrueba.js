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

    class UsuarioRegistrado {
        constructor(nombre, password, edad, sexo){
            this.nombre = nombre;
            this.password = password;
            this.edad = edad;
            this.sexo = sexo;
        }

    }
    function crearUsuario() {
        let nombre = prompt ("Ingrese nombre de usuario");
        let password = prompt ("Ingrese su contraseña");
        let edad = prompt ("Ingrese su edad");
        let sexo = prompt ("Ingrese su sexo");
        let usuarioRegistrado = new UsuarioRegistrado(nombre, password, edad, sexo);
        return usuarioRegistrado;
    }
    crearUsuario();



let boton = document.getElementById("btnPrincipal");
    boton.addEventListener("click", respuestaClick);
    function respuestaClick() {
  console.log("Respuesta evento");
}


let boton = document.getElementById("btnMain")
    boton.onclick = () => {console.log("Click")}
    boton.onmousemove = () => {console.log("Move")}



let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
    function saludar() {
    console.log("Hola");
}
input1.addEventListener("keyup", saludar);
input2.onkeydown = () => {
  console.log("keyDown");
};

/* Evento change */
let input1 = document.getElementById("nombre");
let input2 = document.getElementById("edad");
input1.onchange = () => {
    console.log("valor1");
};
input2.onchange = () => {
    console.log("valor2");
};


/* Evento input1 */
let input1 = document.getElementById("nombre");
input1.addEventListener("input", () => {
    console.log(input1.value);
});


/* evento submit */
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}


/* miFormulario */
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelamos el comportamiento del evento
    e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
    let formulario = e.target;
  //Obtengo el valor del primero hijo <input type="text">
    console.log(formulario.children[0].value);
  //Obtengo el valor del segundo hijo <input type="number">
    console.log(formulario.children[1].value);
}


/* Como agregar tareas */
let tareas = [];
let input = document.getElementById("tarea");
let btn = document.getElementById("btn");
let lista = document.getElementById("list");

function agregarTarea() {
    const tarea = input.value;
    tareas.push(tarea);
    input.value = "";
    mostrarTareas();
}

function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
}

function mostrarTareas() {
    lista.innerHTML = "";
    tareas.forEach((tarea, index) => {
    lista.innerHTML += `
            <li>
                <span>${tarea}</span>
                <button class="delete" onclick="eliminarTarea(${index})">Eliminar</button>
            </li>
        `;
    });
}

btn.addEventListener("click", agregarTarea);



/* Local Storage */
// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento
// valor = valor/contenido del elemento
localStorage.setItem("bienvenida", "¡Hola Coder!");
localStorage.setItem("esValido", true);
localStorage.setItem("unNumero", 20);
let mensaje = localStorage.getItem("bienvenida");
let bandera = localStorage.getItem("esValido");
let numero = localStorage.getItem("unNumero");

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero); // ‘20’

/* Session Storage */
sessionStorage.setItem("seleccionados", [1, 2, 3]);
sessionStorage.setItem("esValido", false);
sessionStorage.setItem("email", "info@email.com");

const seleccionados = sessionStorage.getItem("seleccionados");
const esValido = sessionStorage.getItem("esValido");
const email = sessionStorage.getItem("email");

console.log(seleccionados);
console.log(esValido);
console.log(email);

console.log(lista, typeof lista);   //object;
console.log(bandera, typeof bandera); //boolean;
console.log(email, typeof email);   //string;

/* Recorrer el storage con un bucle For */
const claves = [];

for (let i = 0; i < localStorage.length; i++) {
  let clave = localStorage.key(i);
  console.log("Clave: " + clave);
  console.log("Valor: " + localStorage.getItem(clave));
  claves.push(clave);
}

console.log(claves);

// localStorage.removeItem("bienvenida"); (solo remuevo el Item deseado)
localStorage.clear();//limpio todo el alamcenamiento del Local Storage


/* Formato JSON */
const producto1 = { id: 2, producto: "Arroz" };
const enJSON = JSON.stringify(producto1);

console.log(enJSON); // {"id":2,"producto":"Arroz"}
console.log(typeof producto1); // object
console.log(typeof enJSON); // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}

/* Transformar un string JSON en un objeto JS */
const enJSON = '{"id":2,"producto":"Arroz"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON); // string
console.log(typeof producto1); // object
console.log(producto1.producto); // Arroz

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id); // 2
console.log(producto1)

/* Actividad para ejercitar JSON */
// let nombre = document.getElementById("nombre");
// let apellido = document.getElementById("apellido");
// let edad = document.getElementById("edad");

class Usuario {
    constructor(nombre, apellido, edad) {
      (this.nombre = nombre), (this.apellido = apellido), (this.edad = edad);
    }
  }
  
  let form = document.getElementById("register");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let usuario = new Usuario(nombre, apellido, edad);
    localStorage.setItem("usuario", JSON.stringify(usuario));
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
  });

  /* Segunda parte */
  class Producto {
    constructor(nombre, precio) {
      (this.nombre = nombre), (this.precio = precio);
    }
  }
  
  const producto1 = new Producto("Coca", 100);
  const producto2 = new Producto("Pepsi", 99);
  const producto3 = new Producto("Sprite", 103);
  
  const productos = [producto1, producto2, producto3];
  
  localStorage.setItem("productos", JSON.stringify(productos));


  function agregarTarea() {
    const tarea = input.value;
    tareas.push(tarea);
    input.value = "";
    mostrarTareas();
  }
  
  function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
  }
  
  function mostrarTareas() {
    /* if (tareas.length === 0) {
      lista.innerHTML = "<li>No hay tareas</li>";
      return;
    } */
    !tareas.length ? (lista.innerHTML = "<li>No hay tareas</li>") :
    lista.innerHTML = "";
    tareas.forEach((tarea, index) => {
      lista.innerHTML += `
        <li>
          <span>${tarea}</span>
          <button class="delete" onclick="eliminarTarea(${index})">Eliminar</button>
        </li>
      `;
    });
  }
  
  document.addEventListener("DOMContentLoaded", mostrarTareas);
  btn.addEventListener("click", agregarTarea);