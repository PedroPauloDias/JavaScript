function tabuada() {
    var numero = document.querySelector('input#txtnum')
    var tab = document.getElementById('seltab')

    if (numero.value.length == 0) {
        window.alert('Por favor digite um numero')
    } else {
        var n = Number(numero.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c ++) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n * c}`
            item.value = ` tab ${c}` 
            tab.appendChild(item)
        }
    }
    
}