var anoNascimento = 2009
var anoAtual = 2024
var calculadora = anoAtual - anoNascimento

if (calculadora <= 30) {
    console.log('Menor de Idade, e estas com ' + calculadora + ' de idade')
} else {
    console.log('Maior de Idade, e estas com ' + calculadora + ' de idade')
}