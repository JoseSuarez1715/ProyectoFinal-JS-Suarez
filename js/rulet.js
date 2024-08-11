class ruleta {
    constructor(valor, color) {
        this.valor = valor
        this.color = color

    }
}

const cero = new ruleta(0, "verde")
const uno = new ruleta(1, "rojo")
const dos = new ruleta(2, "negro")
const tres = new ruleta(3, "rojo")
const cuatro = new ruleta(4, "negro")
const cinco = new ruleta(5, "rojo")
const seis = new ruleta(6, "negro")
const siete = new ruleta(7, "rojo")
const ocho = new ruleta(8, "negro")
const nueve = new ruleta(9, "rojo")
const diez = new ruleta(10, "negro")
const once = new ruleta(11, "negro")
const doce = new ruleta(12, "rojo")
const trece = new ruleta(13, "negro")
const catorce = new ruleta(14, "rojo")
const quince = new ruleta(15, "negro")
const dieciseis = new ruleta(16, "rojo")
const diecisiete = new ruleta(17, "negro")
const dieciocho = new ruleta(18, "rojo")
const diecinueve = new ruleta(19, "rojo")
const veinte = new ruleta(20, "negro")
const veintiuno = new ruleta(21, "rojo")
const veintidos = new ruleta(22, "negro")
const veintitres = new ruleta(23, "rojo")
const veinticuatro = new ruleta(24, "negro")
const veinticinco = new ruleta(25, "rojo")
const veintiseis = new ruleta(26, "negro")
const veintisiete = new ruleta(27, "rojo")
const veintiocho = new ruleta(28, "negro")
const veintinueve = new ruleta(29, "negro")
const treinta = new ruleta(30, "rojo")
const treintayuno = new ruleta(31, "negro")
const treintaydos = new ruleta(32, "rojo")
const treintaytres = new ruleta(33, "negro")
const treintaycuatro = new ruleta(34, "rojo")
const treintaycinco = new ruleta(35, "negro")
const treintayseis = new ruleta(36, "rojo")

const arrayRuleta = [cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince, dieciseis, diecisiete, dieciocho, diecinueve, veinte, veintiuno, veintidos, veintitres, veinticuatro, veinticinco, veintiseis, veintisiete, veintiocho, veintinueve, treinta, treintayuno, treintaydos, treintaytres, treintaycuatro, treintaycinco, treintayseis]

let botonJugarRuleta = document.getElementById("jugarRuleta")
botonJugarRuleta.onclick = () => { empezarRuleta() }

let apuestaCero = document.getElementById("vbtn-radio0")
let apuestaUno = document.getElementById("vbtn-radio1")
let apuestaDos = document.getElementById("vbtn-radio2")
let apuestaTres = document.getElementById("vbtn-radio3")
let apuestaCuatro = document.getElementById("vbtn-radio4")
let apuestaCinco = document.getElementById("vbtn-radio5")
let apuestaSeis = document.getElementById("vbtn-radio6")
let apuestaSiete = document.getElementById("vbtn-radio7")
let apuestaOcho = document.getElementById("vbtn-radio8")
let apuestaNueve = document.getElementById("vbtn-radio9")
let apuestaDiez = document.getElementById("vbtn-radio10")
let apuestaOnce = document.getElementById("vbtn-radio11")
let apuestaDoce = document.getElementById("vbtn-radio12")
let apuestaTrece = document.getElementById("vbtn-radio13")
let apuestaCatorce = document.getElementById("vbtn-radio14")
let apuestaQuince = document.getElementById("vbtn-radio15")
let apuestaDieciseis = document.getElementById("vbtn-radio16")
let apuestaDiecisiete = document.getElementById("vbtn-radio17")
let apuestaDieciocho = document.getElementById("vbtn-radio18")
let apuestaDiecinueve = document.getElementById("vbtn-radio19")
let apuestaVeinte = document.getElementById("vbtn-radio20")
let apuestaVeintiuno = document.getElementById("vbtn-radio21")
let apuestaVeintidos = document.getElementById("vbtn-radio22")
let apuestaVeintitres = document.getElementById("vbtn-radio23")
let apuestaVeinticuatro = document.getElementById("vbtn-radio24")
let apuestaVeinticinco = document.getElementById("vbtn-radio25")
let apuestaVeintiseis = document.getElementById("vbtn-radio26")
let apuestaVeintisiete = document.getElementById("vbtn-radio27")
let apuestaVeintiocho = document.getElementById("vbtn-radio28")
let apuestaVeintinueve = document.getElementById("vbtn-radio29")
let apuestaTreinta = document.getElementById("vbtn-radio30")
let apuestaTreintayuno = document.getElementById("vbtn-radio31")
let apuestaTreintaydos = document.getElementById("vbtn-radio32")
let apuestatreintaytres = document.getElementById("vbtn-radio33")
let apuestaTreintaycuatro = document.getElementById("vbtn-radio34")
let apuestaTreintaycinco = document.getElementById("vbtn-radio35")
let apuestaTreintayseis = document.getElementById("vbtn-radio36")
let apuestaPar = document.getElementById("vbtn-radio37")
let apuestaImpar = document.getElementById("vbtn-radio38")
let apuestaRojo = document.getElementById("vbtn-radio39")
let apuestaNegro = document.getElementById("vbtn-radio40")

// al cargar la pagina se conprueba si está logueado
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

// esta funcion chequea la eleccion del jugador
function empezarRuleta() {
    let resultadoRuleta = randomRuleta()
    let apuest = 40;
    apuestaCero.checked ? apuest = 0 : vari = 0;
    apuestaUno.checked ? apuest = 1 : vari = 0;
    apuestaDos.checked ? apuest = 2 : vari = 0;
    apuestaTres.checked ? apuest = 3 : vari = 0;
    apuestaCuatro.checked ? apuest = 4 : vari = 0;
    apuestaCinco.checked ? apuest = 5 : vari = 0;
    apuestaSeis.checked ? apuest = 6 : vari = 0;
    apuestaSiete.checked ? apuest = 7 : vari = 0;
    apuestaOcho.checked ? apuest = 8 : vari = 0;
    apuestaNueve.checked ? apuest = 9 : vari = 0;
    apuestaDiez.checked ? apuest = 10 : vari = 0;
    apuestaOnce.checked ? apuest = 11 : vari = 0;
    apuestaDoce.checked ? apuest = 12 : vari = 0;
    apuestaTrece.checked ? apuest = 13 : vari = 0;
    apuestaCatorce.checked ? apuest = 14 : vari = 0;
    apuestaQuince.checked ? apuest = 15 : vari = 0;
    apuestaDieciseis.checked ? apuest = 16 : vari = 0;
    apuestaDiecisiete.checked ? apuest = 17 : vari = 0;
    apuestaDieciocho.checked ? apuest = 18 : vari = 0;
    apuestaDiecinueve.checked ? apuest = 19 : vari = 0;
    apuestaVeinte.checked ? apuest = 20 : vari = 0;
    apuestaVeintiuno.checked ? apuest = 21 : vari = 0;
    apuestaVeintidos.checked ? apuest = 22 : vari = 0;
    apuestaVeintitres.checked ? apuest = 23 : vari = 0;
    apuestaVeinticuatro.checked ? apuest = 24 : vari = 0;
    apuestaVeinticinco.checked ? apuest = 25 : vari = 0;
    apuestaVeintiseis.checked ? apuest = 26 : vari = 0;
    apuestaVeintisiete.checked ? apuest = 27 : vari = 0;
    apuestaVeintiocho.checked ? apuest = 28 : vari = 0;
    apuestaVeintinueve.checked ? apuest = 29 : vari = 0;
    apuestaTreinta.checked ? apuest = 30 : vari = 0;
    apuestaTreintayuno.checked ? apuest = 31 : vari = 0;
    apuestaTreintaydos.checked ? apuest = 32 : vari = 0;
    apuestatreintaytres.checked ? apuest = 33 : vari = 0;
    apuestaTreintaycuatro.checked ? apuest = 34 : vari = 0;
    apuestaTreintaycinco.checked ? apuest = 35 : vari = 0;
    apuestaTreintayseis.checked ? apuest = 36 : vari = 0;
    if (apuest != 40) {
        numeros(apuest, arrayRuleta[resultadoRuleta]);
    } else {
        apuestaPar.checked ? par("par", arrayRuleta[resultadoRuleta]) : vari = 0;
        apuestaImpar.checked ? par("impar", arrayRuleta[resultadoRuleta]) : vari = 0;
        apuestaRojo.checked ? color("rojo", arrayRuleta[resultadoRuleta]) : vari = 0;
        apuestaNegro.checked ? color("negro", arrayRuleta[resultadoRuleta]) : vari = 0;
    }
}

// las siguientes 3 funciones son los tipos de apuestas: al numero, a la paridad o al color.
function numeros(eleccion, resultadoo) {
    let dinero = document.getElementById("apuestaRuleta").value;
    let ganancia = document.getElementById("apuestaRuleta").value * 35
    eleccion == resultadoo.valor ? victoria(resultadoo,ganancia) : derrota(resultadoo,dinero);
}

function color(colorElegido, colorResultado) {
    let dinero = document.getElementById("apuestaRuleta").value;
    colorElegido == colorResultado.color ? victoria(colorResultado,dinero) : derrota(colorResultado,dinero);
}

function par(paridadElegida, numero) {
    let dinero = document.getElementById("apuestaRuleta").value;
    console.log(numero)
    let comprobarParidad = numero.valor % 2
    let estado = "";
    comprobarParidad == 0 ? estado = "par" : estado = "impar"
    paridadElegida == estado ? victoria(numero,dinero) : derrota(numero,dinero);
}

function randomRuleta() {
    let rul = Math.floor(Math.random() * 37);
    if (rul == 37) {
        rul = 36;
    }
    return rul
}

// las siguientes 2 funciones son los mensajes de victoria y derrota, ademas llaman a las funciones para ganar y perder la plata apostada.
function victoria(numero,ganancia) {
    console.log("vistoria");
    document.getElementById("resultadorRuleta").innerHTML = `<div class="alert alert-success col-sm-6" role="alert">Salio el ${numero.valor} ${numero.color}, 
                                                            Gano $${ganancia}!!
                                                            </div>`;
    ganarPlata(ganancia)                                                     
    reinicio();
}

function derrota(numero,deuda) {
    console.log("derrota");
    document.getElementById("resultadorRuleta").innerHTML = `<div class="alert alert-danger col-sm-6" role="alert">Salio el ${numero.valor} ${numero.color}, 
                                                            Perdió $${deuda}!!
                                                            </div>`;
    pierdePlata(deuda)
    reinicio();
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
    historico.push(["ruleta victoria",plata,"victoria",dt.toLocaleString(),dt.toLocaleString(DateTime.TIME_SIMPLE)])
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
    historico.push(["ruleta derrota",plata,"derrota",dt.toLocaleString(),dt.toLocaleString(DateTime.TIME_SIMPLE)])
    localStorage.setItem("historial", JSON.stringify(historico))
}

function reinicio() {
    document.getElementById("panelRuleta").innerHTML = `<button type="button" class="btn btn-primary" id="reiniciarRuleta">volver a jugar?</button>`
    let botonReinicioCraps = document.getElementById("reiniciarRuleta")
    botonReinicioCraps.onclick = () => { location.reload() }
}


// para desloguearse
document.getElementById("logout").onclick = () => { desloguear() }

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    Swal.fire("ha cerrado la sesion correctamente");
}

