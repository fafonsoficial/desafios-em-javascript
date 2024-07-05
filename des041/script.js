function calcular() {
    var n1 = document.getElementById('valor1')
    var n2 = document.getElementById('valor2')
    var res = document.getElementById('res')

    var soma = (n1 + n2)/2
    var soma1 = Number(soma.value)
    
    res.innerHTML = `<p> Obteve como nota final ${soma1} valores. </p>`
    if(soma1 >= 7.5) {
       console.log(`APROVADO`)
    } else if( soma1 < 7 ) {
        console.log(`REPROVADO`)
    } 
}