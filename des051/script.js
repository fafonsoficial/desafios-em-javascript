function verificar() {
    var pessoa = document.getElementById('nome')
    var ano = document.getElementById('nasci')
    var res = document.getElementById('res')
    var média = document.getElementById('média')
    var médiatotal = (média.value)
    var nome = (pessoa.value)

    if (médiatotal >= 7.5) {
        alert('[ERRO], Insera os seus dados novamente')
    } else {
        res.innerHTML = `${nome}, a sua candidatudo será processada!`
        res.innerHTML = `${nome},a sua candidatura não poderá ser processada por ter uma média inferior a 7.5`
    }
}