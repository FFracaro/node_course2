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

console.log(`${nome1} ${sobrenome} tem ${idade} anos, pesa ${peso} tem ${alturaEmMetros} de altura e seu IMC é de ${indiceMassaCorporal} e seu ano de nascimento é ${anoNascimento}`)

// scape
let umaString = "Um \"texto\""

console.log(umaString)

let stringEx = "texto de exemplo"
console.log(stringEx[2])

console.log(stringEx.charAt(3))

console.log(stringEx.concat(" aloha", " ahore"))
console.log(stringEx + " aloha" + " 50")

console.log(stringEx.indexOf("de"))
console.log(stringEx.indexOf("de", 7))
console.log(stringEx.lastIndexOf("t", 3))

console.log(stringEx.match(/[a-z]/g))
console.log(stringEx.search(/x/))

console.log(stringEx.replace('de', 'fogo'))
console.log(stringEx.replace(/e/g, 'I'))

console.log(stringEx.length)

console.log(stringEx.slice(0, 5))

console.log(stringEx.split('t'))
console.log(stringEx.split('t', 2))

console.log(stringEx.toUpperCase())
console.log(stringEx.toLowerCase())