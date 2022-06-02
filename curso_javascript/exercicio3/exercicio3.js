let acesa = false

function tecla() {
    if (acesa) {
        bulboOff()
        acesa = false
    } else {
        bulboOn()
        acesa = true
    }
}

function bulboOff() {

    document.getElementById('bulbo_luz').src = "img/apagada.png"
}

function bulboOn() {

    document.getElementById('bulbo_luz').src = "img/ligada.png"
}