function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

<<<<<<< HEAD
    if (fano.value.length == 0 || Number(fano.value) > ano) {
=======
    if (fano.value.length == 0 || fano.value > ano) {
>>>>>>> 833b7f255516b05ed4145a816012ea9d880e7d6b
        alert('[ERRO] Verifica os dados e tente novamente!')
        confirm('Introduza os dados novamente!')
    } else {
<<<<<<< HEAD
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        if (fsex[0].Checked) {
=======
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
>>>>>>> 833b7f255516b05ed4145a816012ea9d880e7d6b
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}