function gerar() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 12) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

}