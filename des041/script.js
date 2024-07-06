function calcular() {
    var n1 = document.getElementById('valor1')
    var n2 = document.getElementById('valor2')
    var res = document.getElementById('res')

    var soma1 = Number(n1.value)
    var soma2 = Number(n2.value)

    var somatal = (soma1 + soma2)/2
    
    res.innerHTML = `<p>Obteve como resultado final ${somatal} valores.</p>`
}