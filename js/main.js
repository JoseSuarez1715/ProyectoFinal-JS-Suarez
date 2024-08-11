class dado {
    constructor(valor, cara) {
        this.valor = valor
        this.cara = cara
    }
}

const dadoUno = new dado(1, "uno")
const dadoDos = new dado(2, "dos")
const dadoTres = new dado(3, "tres")
const dadoCuatro = new dado(4, "cuatro")
const dadoCinco = new dado(5, "cinco")
const dadoSeis = new dado(6, "seis")

const arrayDado = [dadoUno, dadoDos, dadoTres, dadoCuatro, dadoCinco, dadoSeis]


// seleccion de line pass
let apuestaCrapuno = document.getElementById("btnradio1")
let apuestaCrapdos = document.getElementById("btnradio2")

// boton para empezar a jugar luego de seleccionar line pass
let botonDado = document.getElementById("tirarDado")
botonDado.onclick = () => { dadosMesa() }


document.addEventListener("DOMContentLoaded", () => {
    leerDos()
});

function leerDos() {
    if (localStorage.length > 0) {
        var valoor = JSON.parse(localStorage.getItem("cuentaUno"))
        // document.getElementById("userr").innerHTML = `Usuario: ${valoor.user}`
        document.getElementById("wapp").innerHTML = `<p>Dinero: $${valoor.dinero}</p>`
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Debe loguearse para comenzar a jugar!",
            footer: '<a href="./login.html">INICIAR SESION AQUI</a>'
          });
    }
}

// funcion que compara las condiciones de victoria y derrota del line pass.
// si no se cumple ninguna, el resultado de la tirada es el punto (valor con el que pierde la apuesta en las proximas tiradas)
function dadosMesa() {
    let resultado = dosDados();
    let apuestaCrap = document.getElementById("apuestaCrap").value
    if (apuestaCrapuno.checked) {
        if (resultado == 7 || resultado == 11) {
            victoria(apuestaCrap);
            reinicio();
        }
        else {
            if (resultado == 2 || resultado == 3 || resultado == 12) {
                derrota(apuestaCrap)
                reinicio();
            }
            else {
                tiradas(resultado, "pass", apuestaCrap)
            }
        }
    }
    if (apuestaCrapdos.checked) {
        if (resultado == 2 || resultado == 3) {
            victoria(apuestaCrap)
            reinicio();
        }
        else {
            if (resultado == 7 || resultado == 11) {
                derrota(apuestaCrap)
                reinicio();
            } else {
                resultado == 12 ? reinicio() : tiradas(resultado, "noPass",apuestaCrap);
            }
        }
    }
}

// funcion que coloca las imagenes de dado y el resultado de la suma
function dosDados() {
    let ladoDadoUno = dadoAleatorio();
    let ladoDadoDos = dadoAleatorio();
    let cuentaDado = arrayDado[ladoDadoUno].valor + arrayDado[ladoDadoDos].valor
    document.getElementById("cuentaDado").innerHTML = `<p><b>Resultado ${cuentaDado}</b></p>`
    document.getElementById("dadoUno").innerHTML = `<img src="../resources/cara-${arrayDado[ladoDadoUno].cara}.jpg" alt="">`
    document.getElementById("dadoDos").innerHTML = `<img src="../resources/cara-${arrayDado[ladoDadoDos].cara}.jpg" alt="">`
    return cuentaDado;
}

// funcion que hace aparecer el "punto" y cambia el boton a "volver a tirar". en espera del nuevo boton "volver a tirar"
// si se eligio "line pass" (pase == pass), se gana con el "punto" y se pierde con 7. Si se eligió "dont pass line" es al reves.
function tiradas(punto, pase, apuestaCrap) {
    document.getElementById("apuestaPunto").innerHTML = `<p><b>Punto = ${punto}</b></p>`
    if (pase == "pass") {
        document.getElementById("leyendaPunto").innerHTML = `<p> Repetir tiradas hasta que obtengas ${punto} para ganar, 7 para perder.</p>`
    } else {
        document.getElementById("leyendaPunto").innerHTML = `<p> Repetir tiradas hasta que obtengas 7 para ganar, ${punto} para perder.</p>`
    }
    document.getElementById("leyendaLinepass").innerHTML = `<br><br><br>`
    document.getElementById("panel").innerHTML = `<button type="button" class="btn btn-primary" id="tirarDadoDos">volver a tirar</button>`
    let botonVolverTirar = document.getElementById("tirarDadoDos");
    botonVolverTirar.onclick = () => { tiradasPunto(punto, pase,apuestaCrap) };
}

// funcion que compara una nueva tirada con 7 (derrota para line pass, victoria para dont line pass),
//  o el "punto" (victoria para line pass, derrota para dont line pass). 
function tiradasPunto(puntoObjetivo, pase,apuestaCrap) {
    let resultadoNuevo = dosDados();
    if (resultadoNuevo == 7) {
        pase == "pass" ? derrota(apuestaCrap) : victoria(apuestaCrap);
    } else {
        if (resultadoNuevo == puntoObjetivo) {
            pase == "pass" ? victoria(apuestaCrap) : derrota(apuestaCrap);

        } else {
            tiradas(puntoObjetivo, pase,apuestaCrap)
        }
    }
}

function victoria(ganancia) {
    document.getElementById("comoFue").innerHTML = `<div class="alert alert-success col-6" role="alert">
                                                            victoria! Ganó $${ganancia}
                                                            </div>`;
    ganarPlata(ganancia)
    reinicio();
}

function derrota(deuda) {
    document.getElementById("comoFue").innerHTML = `<div class="alert alert-danger col-6" role="alert">
                                                            derrota! Perdió $${deuda}
                                                            </div>`;
    pierdePlata(deuda)
    reinicio();
}

// obtiene un numero aleatorio que luego se usara para elegir el elemento del array "dado"
function dadoAleatorio() {
    var resultadoDado = Math.floor(Math.random() * 6)
    if (resultadoDado == 6) {
        resultadoDado = 5;
    }
    return resultadoDado;
}

// luego de una victoria o derrota, reinicia la pagina si queres vovler a jugar
function reinicio() {
    document.getElementById("panel").innerHTML = `<button type="button" class="btn btn-primary" id="reiniciarCraps">volver a jugar?</button>`
    let botonReinicioCraps = document.getElementById("reiniciarCraps")
    botonReinicioCraps.onclick = () => { location.reload() }
}

// obtiene la propiedad dinero del localstorage, la modifica, guarda un historial... y si el historial llega a 10 borra el mas viejo.
function ganarPlata(plata) {
    let valoor = JSON.parse(localStorage.getItem("cuentaUno"))
    valoor.dinero = parseInt(valoor.dinero) + parseInt(plata)
    document.getElementById("wapp").innerHTML = `<p>Dinero: $${valoor.dinero}</p>`
    localStorage.setItem("cuentaUno", JSON.stringify(valoor))
    let historico = JSON.parse(localStorage.getItem("historial"))
    if (historico.length > 9) {
        historico.shift()
    }
    const DateTime = luxon.DateTime;
    const dt = DateTime.now();
    historico.push(["craps victoria", plata,"victoria",dt.toLocaleString(),dt.toLocaleString(DateTime.TIME_SIMPLE)])
    localStorage.setItem("historial", JSON.stringify(historico))
}

// obtiene la propiedad dinero del localstorage, la modifica, guarda un historial... y si el historial llega a 10 borra el mas viejo.
function pierdePlata(plata) {
    let valoor = JSON.parse(localStorage.getItem("cuentaUno"))
    valoor.dinero = valoor.dinero - plata
    document.getElementById("wapp").innerHTML = `<p>Dinero: $${valoor.dinero}</p>`
    localStorage.setItem("cuentaUno", JSON.stringify(valoor))
    let historico = JSON.parse(localStorage.getItem("historial"))
    if (historico.length > 9) {
        historico.shift()
    }
    const DateTime = luxon.DateTime;
    const dt = DateTime.now();
    historico.push(["craps derrota", plata,"derrota",dt.toLocaleString(),dt.toLocaleString(DateTime.TIME_SIMPLE)])
    localStorage.setItem("historial", JSON.stringify(historico))
}

document.getElementById("logout").onclick = () => { desloguear() }

function desloguear() {
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    Swal.fire("ha cerrado la sesion correctamente");
}