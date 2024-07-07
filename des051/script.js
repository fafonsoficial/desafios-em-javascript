function verificar() {
    var nome = document.getElementById('nome')
    var nota = docuemnt.getElementById('média')

    var nome1 = (nome.value)
    var valor = (nota.value)
    
    var fano = document.querySelector('input#nasc')
    var res = document.querySelector('div#res')

    // var data = new Date()
    // var ano = data.getFullYear()

    if(valor > 10) {
        res.innerHTML = `Aluno Cadastrado`
    }

    
}