class mazo {
    constructor(valor, imagen) {
        this.valor = valor
        this.imagen = imagen
    }
}
 
const unoD = new mazo(11,"1d")
const dosD = new mazo(2,"2d")
const tresD = new mazo(3,"3d")
const cuatroD = new mazo(4,"4d")
const cincoD = new mazo(5,"5d")
const seisD = new mazo(6,"6d")
const sieteD = new mazo(7,"7d")
const ochoD = new mazo(8,"8d")
const nueveD = new mazo(9,"9d")
const diezD = new mazo(10,"10d")
const jD = new mazo(10,"jd")
const qD = new mazo(10,"qd")
const kD = new mazo(10,"kd")

const unoC = new mazo(11,"1c")
const dosC = new mazo(2,"2c")
const tresC = new mazo(3,"3c")
const cuatroC = new mazo(4,"4c")
const cincoC = new mazo(5,"5c")
const seisC = new mazo(6,"6c")
const sieteC = new mazo(7,"7c")
const ochoC = new mazo(8,"8c")
const nueveC = new mazo(9,"9c")
const diezC = new mazo(10,"10c")
const jC = new mazo(10,"jc")
const qC = new mazo(10,"qc")
const kC = new mazo(10,"kc")

const unoP = new mazo(11,"1p")
const dosP = new mazo(2,"2p")
const tresP = new mazo(3,"3p")
const cuatroP = new mazo(4,"4p")
const cincoP = new mazo(5,"5p")
const seisP = new mazo(6,"6p")
const sieteP = new mazo(7,"7p")
const ochoP = new mazo(8,"8p")
const nueveP = new mazo(9,"9p")
const diezP = new mazo(10,"10p")
const jP = new mazo(10,"jp")
const qP = new mazo(10,"qp")
const kP = new mazo(10,"kp")

const unoT = new mazo(11,"1t")
const dosT = new mazo(2,"2t")
const tresT = new mazo(3,"3t")
const cuatroT = new mazo(4,"4t")
const cincoT = new mazo(5,"5t")
const seisT = new mazo(6,"6t")
const sieteT = new mazo(7,"7t")
const ochoT = new mazo(8,"8t")
const nueveT = new mazo(9,"9t")
const diezT = new mazo(10,"10t")
const jT = new mazo(10,"jt")
const qT = new mazo(10,"qt")
const kT = new mazo(10,"kt")



const arrayMazoCompleto = [unoC, unoD, unoP, unoT, dosC, dosD, dosP, dosT, tresC, tresD, tresP, tresT, cuatroC, cuatroD, cuatroP, cuatroT, cincoC, cincoD, cincoP, cincoT, seisC, seisD, seisP, seisT, sieteC, sieteD, sieteP, sieteT, ochoC, ochoD, ochoP, ochoT, nueveC, nueveD, nueveP, nueveT, diezC, diezD, diezP, diezT, jC, jD, jP, jT, qC, qD, qP, qT, kC, kD, kP, kT];

const arrayMazoDos = arrayMazoCompleto

// al cargar la pagina se conprueba si está logueado
document.addEventListener("DOMContentLoaded", () => {
    leerDos()
});

function leerDos() {
    if (localStorage.length > 0) {
        var valoor = JSON.parse(localStorage.getItem("cuentaUno"))
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

valorCarta = 0;
valorCrupier = 0;

const manoJugador = []

// botones de pedir y plantarse
let apuestaBj = document.getElementById("apuestaBlackjack")
let botonPlantarse = document.getElementById("plantarse")
let botonOtra = document.getElementById("pedirOtra")
botonOtra.onclick = () => { cartaJugador() }
botonPlantarse.onclick = () => { juegaCrupier() }

// cuando pedis carta va acumulando hasta que pasa de 21
function cartaJugador() {   
        const carta = aleatorioBlackjack()
        console.log(carta);
        document.getElementById("cartaJugador").innerHTML += `<img src="../resources/${carta.imagen}.jpg" alt="" >`;  
        valorCarta += carta.valor
        document.getElementById("cuentaJugador").innerHTML = `<h2>cuenta del jugador: ${valorCarta}</h2>`
        arrayMazoCompleto.splice(azar, 1)
        console.log(arrayMazoCompleto.length);
        manoJugador.push(carta.valor)
        console.log(manoJugador);
        if (valorCarta > 21)
            {
                // si se pasa de 21 pero hay un as en la mano del jugador, pasa de valer 11 a 1.
                // caso contrario es derrota directamente
                if (manoJugador.includes(11)) {
                    valorCarta = valorCarta - 10;
                    let lugar = manoJugador.indexOf(11)
                    document.getElementById("cuentaJugador").innerHTML = `<h2>cuenta del jugador: ${valorCarta}</h2>`;
                    console.log(lugar)
                    manoJugador.splice(lugar,1)
                    console.log(manoJugador)
                } else {
                    derrota(apuestaBj.value);
                }                              
            }  
}

// obtiene una carta al azar
function aleatorioBlackjack() {
    azar = Math.floor(Math.random() * arrayMazoCompleto.length);
    if (azar == arrayMazoCompleto.length) {
        azar = arrayMazoCompleto.length - 1;
    }
    return arrayMazoCompleto[azar]
}

// crupier saca cartas al azar hasta que supera la jugador o se pasa de 21
function juegaCrupier() {
        if (valorCarta == 0) {
        alert("Debe pedir carta primero")
    }
    else {
        while (valorCrupier < valorCarta) {
            const cartaCrupier = aleatorioBlackjack()
            console.log(cartaCrupier);
            document.getElementById("cartaCrupier").innerHTML += `<img src="../resources/${cartaCrupier.imagen}.jpg" alt="" >`
            valorCrupier += cartaCrupier.valor;
            document.getElementById("cuentaCrupier").innerHTML = `<h2>cuenta del crupier: ${valorCrupier}</h2>`
            arrayMazoCompleto.splice(azar, 1)
            console.log(arrayMazoCompleto.length);
        }    
        if (valorCrupier > 21) {
            victoria (apuestaBj.value)
            
        } else {
            derrota(apuestaBj.value);
        }       
    }

}

// las funciones victoria y derrota dan el mensaje, invocan ganar o perder plata y borran los anteriores botones para crear el "vovler a jugar"
function derrota (plata) {
    document.getElementById("victoriaDerrota").innerHTML = `<div class="alert alert-danger" role="alert">DERROTA. Perdió $${plata}</div>`
    pierdePlata(parseInt(plata))
    document.getElementById("panelBj").innerHTML = `<button type="button" class="btn btn-primary" id="volverJugar">Volver a jugar?</button>`;
    document.getElementById("volverJugar").onclick = () => {location.reload()}
}

function victoria (plata) {
    document.getElementById("victoriaDerrota").innerHTML = `<div class="alert alert-success" role="alert">VICTORIA. Gano $${plata}</div>`
    ganarPlata(parseInt(plata))
    document.getElementById("panelBj").innerHTML = `<button type="button" class="btn btn-primary" id="volverJugar">Volver a jugar?</button>`;
    document.getElementById("volverJugar").onclick = () => {location.reload()}
}

// obtiene la propiedad dinero del localstorage, la modifica, guarda un historial... y si el historial llega a 10 borra el mas viejo.
function ganarPlata(plata) {
    let valoor = JSON.parse(localStorage.getItem("cuentaUno"))
    valoor.dinero = parseInt(valoor.dinero) + plata
    document.getElementById("wapp").innerHTML = `Dinero: ${valoor.dinero}`
    localStorage.setItem("cuentaUno", JSON.stringify(valoor))
    let historico = JSON.parse(localStorage.getItem("historial"))
    if (historico.length > 9) {
        historico.shift()
    }
    const DateTime = luxon.DateTime;
    const dt = DateTime.now();
    historico.push(["blackjack victoria",plata,"victoria",dt.toLocaleString(),dt.toLocaleString(DateTime.TIME_SIMPLE)])
    localStorage.setItem("historial", JSON.stringify(historico))
}
// obtiene la propiedad dinero del localstorage, la modifica, guarda un historial... y si el historial llega a 10 borra el mas viejo.
function pierdePlata(plata) {
    let valoor = JSON.parse(localStorage.getItem("cuentaUno"))
    valoor.dinero = valoor.dinero - plata
    document.getElementById("wapp").innerHTML = `Dinero: ${valoor.dinero}`
    localStorage.setItem("cuentaUno", JSON.stringify(valoor))
    let historico = JSON.parse(localStorage.getItem("historial"))    
    if (historico.length > 9) {
        historico.shift()
    }
    const DateTime = luxon.DateTime;
    const dt = DateTime.now();
    historico.push(["blackjack derrota",plata,"derrota",dt.toLocaleString(),dt.toLocaleString(DateTime.TIME_SIMPLE)])
    localStorage.setItem("historial", JSON.stringify(historico))
}

// para desloguearse
document.getElementById("logout").onclick = () => { desloguear() }

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    Swal.fire("ha cerrado la sesion correctamente");
}