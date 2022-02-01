function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homemvelho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
       
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemm.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                img.setAttribute('src', 'imagens/velha2.png')
            }
        } 
         res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
            res.appendChild(img)
        
    }

}