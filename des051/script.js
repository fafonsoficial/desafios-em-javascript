function verificar() {

    var res = document.getElementById('res')

    var identidade_a = document.getElementById('primnome')
    var identidade_b = document.getElementById('sobrenome')

    var nomeValue1 = identidade_a.value
    var nomeValue2 = identidade_b.value

    var dataElement = document.getElementById('datanascimento')
    var dataValue = dataElement.value
    var data = new Date()
    var ano = data.getFullYear()
    var anoElement = ano - Number(dataValue)

    var médiaElement = document.getElementById('média')
    var médiaValue = médiaElement.value

    if (médiaValue >= 7.5) {
        console.log('<p>APROVADO</p>')
    } else {
       console.log('<p>REPROVADO</p>')
    }

    res.innerHTML = `${nomeValue1} ${nomeValue2}, de ${anoElement} anos de idade teve como média ${médiaValue}`

}

//médiaValue < 7.5