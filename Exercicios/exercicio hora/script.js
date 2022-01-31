function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
   //  var hora = data.getHours()
   var hora = 19
    msg.innerHTML = `Agora são ${hora} horas .! <br>` 
    if (hora >= 00 && hora < 12) {
        msg.innerHTML += '<p><strong>Bom Dia</strong></p'
        img.rsc = 'imagens/manha.jpg'
        document.body.style.background= '#A29008'
        
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML += '<p><strong>Boa Tarde</strong></p>'
        img.src = 'imagens/tarde1.png'
        document.body.style.background = '#F3A766'
    } else {
        msg.innerHTML += '<p><strong>Boa Noite</strong></p'
        img.src = 'imagens/noite.png'
        document.body.style.background = "#485564"
    }
}

