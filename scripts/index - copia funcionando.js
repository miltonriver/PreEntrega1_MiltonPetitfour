let usuario = "milton";
let password = "12345";
let usuariosNuevos = [
    {
      usuario: "usuario1",
      password: "clave1",
      edad: 25,
      sexo: "M"
    },
    {
      usuario: "usuario2",
      password: "clave2",
      edad: 30,
      sexo: "F"
    },
    {
        usuario: "usuario3",
        password: "clave3",
        edad: 40,
        sexo: "F"
      },
  ];

function ingresarUsuario(){
    let otroUsuario  = prompt("Ingrese su nombre de usuario");
    return otroUsuario;
}

function ingresarPassword(){
    let otroPassword = prompt("Ingrese su contraseña");
    return otroPassword;
}

let intentos = 1;
const maxIntentos = 5;
while (intentos <= maxIntentos){
    let nuevoUsuario = ingresarUsuario();
    let nuevoPassword = ingresarPassword();

    if (usuario === nuevoUsuario ){
        if (password === nuevoPassword){
            alert("Los datos ingresados son correctos");
            break;
        } else {
            alert("El usuario ingresado o la contraseña son incorrectos");
        }
    } else  {
       let usuarioNuevo = usuariosNuevos.find(user => user.usuario === nuevoUsuario && user.password === nuevoPassword);
        if (usuarioNuevo) {
            alert("¡Bienvenido, usuario nuevo! Edad: " + usuarioNuevo.edad + ", Sexo: " + usuarioNuevo.sexo);
            break;
        } else {
            alert("El usuario ingresado o la contraseña son incorrectos. Intento: " + intentos);    
        }   
    }

    if (intentos === maxIntentos){
        alert("Se ha excedido el número máximo de intentos permitidos, espere unos minutos y vuelva a intentarlo")
    } 

    intentos++;
    }










