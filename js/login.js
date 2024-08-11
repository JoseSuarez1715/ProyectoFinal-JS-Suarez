class jugador {
    constructor(nombre, apellido, user, dinero) {
        this.nombre = nombre
        this.apellido = apellido
        this.user = user
        this.dinero = dinero
    }
}

let botonLogin = document.getElementById("loguear")
botonLogin.onclick = () => { ingresarDatos() }

document.getElementById("logout").onclick = () => { desloguear() }

function ingresarDatos() {
    let nombre = document.getElementById("nombreLogin")
    let apellido = document.getElementById("apellidoLogin")
    let user = document.getElementById("userLogin")
    let monto = document.getElementById("dineroLogin")
    const jugadorUno = new jugador(nombre.value, apellido.value, user.value, monto.value)
    guardarLogin(jugadorUno);
    redirigir(jugadorUno)
}



const arrayHistorial = []

function guardarLogin(jugadorUno) {
    localStorage.setItem("cuentaUno", JSON.stringify(jugadorUno))
    localStorage.setItem("historial", JSON.stringify(arrayHistorial))
}

function redirigir(jugadorUno) {
    
      alert("Ya puede ingresar a los juegos " + jugadorUno.nombre +", suerte!")
}

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
      Swal.fire("ha cerrado la sesion correctamente");
}

