
Swal.fire({
    title: 'Bienvenido!',
    text: 'Página de contacto, por favor ingrese sus datos en el formulario para acceder al sitio',
    imageUrl: '../img/redondos_logo.png',
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: 'Logo Redondos',
  }) //Modal de bienvenida utilizando librería SweetAlert

let usuario = "milton";
let password = "12345";
/* let usuariosNuevos = [ 
    {
        usuario: "usuario1",
        password: "clave1",
        email: "correo1@hotmail.com"
    },
    {
        usuario: "usuario2",
        password: "clave2",
        email: "correo2@gmail.com"
    },
]; */ //array inicial con usuarios creados y que servía para que el programa funcionara sin usar promesas

fetch ("../usuario.json")
    .then(response => response.json())
    .then(datos => {
        //console.log(datos); //Prueba inicial de Fetch mediante consola
        const usuariosNuevos = datos;
        console.log(usuariosNuevos);

        localStorage.setItem('usuariosNuevos', JSON.stringify(usuariosNuevos)); //Convertir el array a formato JSON para poder guardarlo en el local storage

        let usuariosNuevosGuardados = JSON.parse(localStorage.getItem('usuariosNuevos')); //Extraígo el valor del array usuariosNuevos y lo guardo en otra variable para poder utilizarla

        function ingresarUsuario() {
            return document.getElementById("entrada_usuario").value;
        }

        function ingresarPassword() {
            return document.getElementById("entrada_password").value;
        }

        document.getElementById("boton_enviar").addEventListener("click", function(event) {
        event.preventDefault(); // Es para evitar el envío del formulario

        let nuevoUsuario = ingresarUsuario();
        let nuevoPassword = ingresarPassword();

        let resultadoAutenticacion = autenticar(nuevoUsuario, nuevoPassword);
    
        let modal = document.getElementById("modal");
        let modalMensaje = document.getElementById("modal_mensaje");
        let botonCerrar = document.getElementById("boton_cerrar");

        if (resultadoAutenticacion === "correctos") {
            //alert("Los datos ingresados son correctos");
            /* let mensajeNuevo = document.getElementById("mensajeJs");
            mensajeNuevo.innerHTML = "<h2>Al fin funcionó!!</h2>"; */
            //estas líneas fueron creadas de forma primaria para probar que mi código JS funcionaba sobre el DOM
            modalMensaje.textContent = "Los datos ingresados son correctos, bienvenido " + usuario;

            } else if (resultadoAutenticacion === "nuevo") {
                let usuarioNuevo = usuariosNuevosGuardados.find(user => user.usuario.toLowerCase() === nuevoUsuario.toLowerCase());
                modalMensaje.textContent = "¡Bienvenido, usuario nuevo! Hemos enviado un correo de confirmación a la siguiente dirección de email: " + usuarioNuevo.email;
        
                 /* alert("¡Bienvenido, usuario nuevo! Hemos enviado un correo de confirmación a la siguiente dirección de email: " + usuarioNuevo.email); */
            } else {
                modalMensaje.textContent = "El usuario ingresado o la contraseña son incorrectos";
        
                /* alert("El usuario ingresado o la contraseña son incorrectos"); */
        }
        modal.style.display = "block";

        botonCerrar.addEventListener("click", function() {
            modal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    })


        function autenticar(usuarioInput, passwordInput) {
            if (usuario === usuarioInput && password === passwordInput) {
                return "correctos";
            }

            let usuarioNuevo = usuariosNuevosGuardados.find(user =>
                user.usuario.toLowerCase() === usuarioInput.toLowerCase() &&
                user.password === passwordInput);//guardar elementos y traerlos del local storage

            if (usuarioNuevo) {
                return "nuevo";
            }

            return "incorrectos";
        }
                })
        













