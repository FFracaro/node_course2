let numero = Number(prompt('Digite um número: '))

let num = document.getElementById('numero-titulo')
let text = document.getElementById('texto')

num.innerHTML = numero
text.innerHTML = `
    <p>Raíz quadrada: ${Math.sqrt(numero)}</p>
    <p>${numero} é inteiro: ${Number.isInteger(numero)}</p>
    <p>É NaN: ${Number.isNaN(numero)}</p>
    <p>Arredondado para baixo: ${Math.floor(numero)}</p>
    <p>Arredondado para cima: ${Math.ceil(numero)}</p>
    <p>Com duas casas decimais: ${numero.toFixed(2)}</p>
`