
// descarga el historial desde el localstorage y da el total tambien
function mostratHistorico() {
    let suma = 0;
    let historico = JSON.parse(localStorage.getItem("historial"))
    for (const iterator of historico) {
        document.getElementById("diezUltimos").innerHTML += `<table class="table"><tr> <td> <h6>${iterator[0]}</h6></td> 
    <td><h6>${iterator[1]}</h6></td><td><h6>${iterator[3]}</h6></td><td><h6>${iterator[4]}</h6></td> </tr></table>`;
        iterator[2] == "victoria" ? suma = suma + parseInt(iterator[1]) : suma = suma - iterator[1]
    }
    document.getElementById("diezUltimos").innerHTML += `<table class="table"><tr> <td> <h6>Total de $ las ultimas jugadas:</h6></td> 
    <td> <h6>$${suma}</h6></td> </tr></table>`
}

// borra el historial
document.getElementById("reinicioHistorial").onclick = () => { borrarHIstorial() }

function borrarHIstorial() {
 const array = []
 localStorage.setItem("historial", JSON.stringify(array))
 location.reload();
}


mostratHistorico();

// para desloguearse
document.getElementById("logout").onclick = () => { desloguear() }

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    Swal.fire("ha cerrado la sesion correctamente");
}

