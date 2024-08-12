// para cerrar sesion
document.getElementById("logout").onclick = () => { desloguear() }

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    Swal.fire("ha cerrado la sesion correctamente");
}