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
let apuestaBj = document.getElementById("btnradio1")
let apuestaBj2 = document.getElementById("btnradio2")

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
        alert("debe loguearse primero")
    }
}

// funcion que compara las condiciones de victoria y derrota del line pass.
// si no se cumple ninguna, el resultado de la tirada es el punto (valor con el que pierde la apuesta en las proximas tiradas)
function dadosMesa() {
   let resultado = dosDados();
    console.log(apuestaBj.checked)
    if (apuestaBj.checked) {
        if (resultado == 7 || resultado == 11) {
            console.log("ganaste")
            document.getElementById("comoFue").innerHTML = `<div class="alert alert-success" role="alert">
                                                            victoria!
                                                            </div>`;
            reinicio();
        }
        else {
            if (resultado == 2 || resultado == 3 || resultado == 12) {
                console.log("perdiste")
                document.getElementById("comoFue").innerHTML = `<div class="alert alert-danger" role="alert">
                                                            Derrota!
                                                            </div>`;                                                           
                reinicio();
            }
            else {                
                tiradas(resultado)
            }
        }
    }
    if (apuestaBj2.checked) {
        if (resultado == 2 || resultado == 3) {
            console.log("ganaste")
            document.getElementById("comoFue").innerHTML = `<div class="alert alert-success" role="alert">
                                                            victoria!
                                                            </div>`
            reinicio();
        }
        else {
            if (resultado == 7 || resultado == 11) {
                console.log("perdiste")
                document.getElementById("comoFue").innerHTML = `<div class="alert alert-danger" role="alert">
                                                            Derrota!
                                                            </div>`
            reinicio();                                                
            } else {
                resultado == 12 ? reinicio():tiradas(resultado);               
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

// funcion que hace aparecer el punto y cambia el boton a "volver a tirar". en espera del nuevo boton "volver a tirar"
function tiradas(punto) {
    document.getElementById("apuestaPunto").innerHTML = `<p><b>Punto = ${punto}</b></p>`
    document.getElementById("leyendaPunto").innerHTML = `<p> Repetir tiradas hasta que obtengas 7 para ganar, ${punto} para perder.</p>`
    document.getElementById("leyendaLinepass").innerHTML = `<br><br><br>`
    document.getElementById("panel").innerHTML = `<button type="button" class="btn btn-primary" id="tirarDadoDos">volver a tirar</button>`
    let botonVolverTirar = document.getElementById("tirarDadoDos");
    botonVolverTirar.onclick = () => { tiradasPunto(punto) };
}

// funcion que compara una nueva tirada con 7 (victoria) o el "punto"(derrota). si no se cumplen, vuelve a establecer la tirada.
function tiradasPunto(puntoObjetivo) {
    let resultadoNuevo = dosDados();
    if (resultadoNuevo == 7) {
        victoria();
    } else {
        resultadoNuevo == puntoObjetivo ? derrota () : tiradas(puntoObjetivo);                    
    }
}

function victoria () {
    document.getElementById("comoFue").innerHTML = `<div class="alert alert-success col-6" role="alert">
                                                            victoria!
                                                            </div>`
        reinicio();
}

function derrota () {
    document.getElementById("comoFue").innerHTML = `<div class="alert alert-danger col-6" role="alert">
                                                            derrota!
                                                            </div>`
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


document.getElementById("logout").onclick = () => { desloguear() }

function desloguear (){
    localStorage.removeItem("cuentaUno");
    localStorage.removeItem("historial");
    alert("ha cerrado la sesion correctamente")
}