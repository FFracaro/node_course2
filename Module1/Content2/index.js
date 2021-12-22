let nome = 'Maria'

console.log(nome, 'pulou a janela.')
console.log('Em 2000,', nome, 'comprou um carro.')

let car
console.log(car)

car = 'BMW'
console.log(car)

// Não utilizar var, dar prioridade ao let

const part = 'finger'
console.log(part)

// constantes não podem ser modificadas
//part = 'foot'

nome = part;
console.log(nome)

console.log(typeof nome)

let number = 5
console.log(typeof nome + number)
console.log(typeof (nome + number))

const nome1 = 'Aloha'
const sobrenome = 'Ahore'
const idade = 5
const peso = 113
const alturaEmMetros = 1.74;
let indiceMassaCorporal = peso / (alturaEmMetros * alturaEmMetros)
let anoNascimento = 2021 - idade;

console.log(nome1, sobrenome, 'tem', idade, 'anos, pesa', peso, 'tem', alturaEmMetros, 'de altura e seu IMC é de', indiceMassaCorporal, 'e seu ano de nascimento é', anoNascimento)

//template string

console.log(`${nome1} sobrenome tem idade anos, pesa peso tem alturaEmMetros de altura e seu IMC é de indiceMassaCorporal e seu ano de nascimento é anoNascimento')
