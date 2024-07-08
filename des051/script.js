function verificar() {
    var pessoa = document.getElementById('nome')
    var res = document.getElementById('res')
    var média = document.getElementById('média')

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasci')

    var médiatotal = (média.value)
    var nome = (pessoa.value)

    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO], Verfique os dados e tente novamente')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 15) {
                res.innerHTML = 'Idade Aceite'
            } else {
                res.innerHTML = 'Idade Recusada'
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 15) {
                res.innerHTML = 'Idade Aceite'
            } else {
                res.innerHTML = 'Idade Recusada'
            }
        } else if (médiatotal == 0 && médiatotal > 7.5) {
            res.innerHTML = `${nome}, a sua candidatudo será processada!`
        } else {
            res.innerHTML = `${nome},a sua candidatura não poderá ser processada por ter uma média inferior a 7.5`
        }
    }
}  