function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifica os dados e tente novamente!')
    } else {
        confirm('Dados Introduzidos Validos')
    }
}