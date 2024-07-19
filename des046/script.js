function consultar() {
    var numConvidado = document.getElementById('txtnum')
    var res = document.getElementById('res')

    var numValue = Number(numConvidado.value);

    if (numValue == 0) {
        alert('[ATENÇÃO] Indique o número de convidados no seu convite físico!')
        confirm('Daremos continuidade a nossa consulta.')
    } else if (numValue <= 10) {
        document.body.style.background = 'green'
        alert('Indica o nome de cada um deles')
        var nome = prompt('Indique o nome: ')
        res.innerHTML = `Número de convidados aceites! E o convidado principal chame-se ${nome}`
    } else {
        res.innerHTML = 'Número de convidados recusados!'
        document.body.style.background = 'red'
    }

}

/*
for (var numValue = 1; numValue <= 5; numValue++) {
            res.innerHTML =+ `O ${numValue} é o ${nome}`
        }
*/