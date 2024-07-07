function verificar() {
    var pessoa = document.getElementById('nome')
    var ano = document.getElementById('nasci')
    var res = document.getElementById('res')
    var média = document.getElementById('média')
    var médiatotal = (média.value)
    var nome = (pessoa.value)

    if (médiatotal == 0) {
        alert('[ERRO], Verifique o valor da média que inseriu!')
    } else if (médiatotal > 7.5) {
        res.innerHTML = `${nome}, a sua candidatudo será processada!`
    } else {
        res.innerHTML = `${nome},a sua candidatura não poderá ser processada por ter uma média inferior a 7.5`
    }
}