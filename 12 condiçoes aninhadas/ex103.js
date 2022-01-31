var agora = new Date // Sempre é new Date com D 'maiusculo'
var diaSem = agora.getDay()

// é igual ao if e else , mas serve pra dados fixos , 
switch (diaSem) {
    case 0 : console.log('Domingo')
        break
    case 1: console.log('Segunda')
        break
    case 2: console.log('Terça')
        break
    case 3: console.log('Quarta')
        break // obrigatorio o uso do break pra impedir q seja todos os codigos sejam lidos 
}