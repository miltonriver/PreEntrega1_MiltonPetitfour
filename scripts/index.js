let usuario = "milton";
let password = "12345";

function ingresarUsuario(){
    let otroUsuario  = prompt("ingrese su nombre de usuario");
    return otroUsuario;
}

function ingresarPassword(){
    let otroPassword = prompt("ingrese su contraseña");
    return otroPassword;
}

let i = 1;
while (i < 5){
    if (usuario == ingresarUsuario() ){
        if (password == ingresarPassword()){
            alert("los datos ingresados son correctos");
            break;
        } else {
            alert("el usuario ingresado o la contraseña son incorrectos");
        }
    } else  {
        if (password !== ingresarPassword()){
        alert("el usuario ingresado o la contraseña son incorrectos");
        } else {
            alert("el usuario ingresado o la contraseña son incorrectos");
        }
    }
    i++;
}





