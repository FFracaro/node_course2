//alert('Mensagem')

//confirm('Lmao')

//prompt('yay')

/* BROWSER ONLY
const num1 = prompt('Entre com um número')
const num2 = prompt('Entre com outro número')

const confirmacao = confirm('Fazer soma?')

if(confirmacao)
    alert(Number(num1) + Number(num2))
*/

let nomeUser = prompt('Entre com o seu nome:')
document.body.innerHTML += `O seu nome é: <strong>${nomeUser}</strong><br/>`
document.body.innerHTML += `Seu nome tem: ${nomeUser.length} letras<br/>`
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeUser[1]}<br/>`
document.body.innerHTML += `O primeiro índice da letra k em seu nome é: ${nomeUser.indexOf('k')}<br/>`
document.body.innerHTML += `O último índice da letra i em seu nome é: ${nomeUser.lastIndexOf('i')}<br/>`
document.body.innerHTML += `As últimas três letras do seu nome são: ${nomeUser.slice(nomeUser.length-3, nomeUser.length)}<br/>`
document.body.innerHTML += `As palavras do seu nome são: ${nomeUser.split(' ')}<br/>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nomeUser.toUpperCase()}<br/>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nomeUser.toLowerCase()}<br/>`

console.log(nomeUser)

let A = 'A'
let B = 'B'
let C = 'C'
let aux = A

console.log(A, B, C)

/*
[A, B, C] = [B, C, A]

console.log(A, B, C)
*/


A = B
B = C
C = aux

console.log(A, B, C)


