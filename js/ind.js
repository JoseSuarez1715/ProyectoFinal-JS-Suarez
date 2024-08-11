document.getElementById("logout").onclick = () => { desloguear() }

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    alert("ha cerrado la sesion correctamente")
}