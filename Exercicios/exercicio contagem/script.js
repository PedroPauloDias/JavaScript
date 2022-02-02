function contar() {

var inicio = document.getElementById('txtini')
var fim = document.getElementById('txtfim')
var passo = document.getElementById('txtpas')
var res = document.getElementById('res')

 
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Por favor digite um numero para começar")
    } else {
        res.innerHTML = 'contando : <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido ! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
           
        } else {
            // CONTAGEM REGRESSIVA
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{27A1} `
            }
        }
            res.innerHTML += `\u{1F600}`
    }
   
}