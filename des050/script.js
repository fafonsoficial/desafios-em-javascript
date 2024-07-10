var agora = new Date()
var diaSem = agora.getDate()
diaSem = 9
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 6:
        console.log('Sexta-feira')
        break
    case 7:
        console.log('Sabado-feira')
        break
    default:
        console.log(' [ERRO], Dia de semana invalido!')
        break
}