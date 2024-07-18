function convidar() {
    let nome = document.getElementById('txtnam')
    let res = document.getElementById('res')
    let presenca = document.getElementById('txtpre')

    let convidado = String(nome.value)
    let confirm = String(presenca.value)

    if (confirm == 0){
        alert(`[ATENÇÃO] ${convidado}, por favor confirme a sua presença usando S ou N`)
    }

    res.innerHTML = `O nome convidado é o ${convidado} e ela consirmou com ${confirm}`
}