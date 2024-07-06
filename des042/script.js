function Carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `Neste exato momento são ${hora}:${min}:${seg}`
    if(hora >= 0 && hora < 12) {
        img.src = 'foto-manha.png'
    } else if(hora >= 12 && hora < 18) {

        img.src = 'foto-meiodia.png'
    } else {
        img.src = 'foto-noite.png'
    }
}
