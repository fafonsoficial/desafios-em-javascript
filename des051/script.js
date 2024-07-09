function verificar() {

    var identidade_a = document.getElementById('primnome')
    var identidade_b = document.getElementById('sobrenome')

    var nomeValue1 = identidade_a.value
    var nomeValue2 = identidade_b.value

    var dataElement = document.getElementById('datanascimento')
    var dataValue = dataElement.value
    var data = new Date(dataValue)
    var ano = data.getFullYear()

    var médiaElement = document.getElementById('média')
    var médiaValue = médiaElement.value

    var res = document.getElementById('res')

    if (médiaValue == 0 || médiaValue > 7 && médiaValue < 7.5) {
        alert('[ERRO] Verifique os dados e tente novamente!')
        confirm('Vamos continuar com a sua candidatura?')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(dataValue)
        var gênero = ''
        if (sex[0].Checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                res.innerHTML += ('Prociga com a candiatura')
            } else {
                res.innerHTML += ('Não Pode Dar Continuidade da Sua Candidatura')
            }
        
        } else if(sex[1].Checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                res.innerHTML += ('Prociga com a candiatura')
            } else {
                res.innerHTML += ('Não Pode Dar Continuidade da Sua Candidatura')
            }
        }

    }
    res.innerHTML = 'Nome ' + nomeValue1 + ' ' + nomeValue2 + ', data de matricula ' + dataValue + ' valor da média ' + médiaValue + ' e estás com ' + idade + ' de idade.'


}

