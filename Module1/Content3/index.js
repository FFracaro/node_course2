nome = 'Aloha' // variável global
var nome = 'Ahore'
var nome = 'Aaaa' // var permite redeclarar variáveis -> comportamento não desejado

console.log(nome)

// strings
const nome1 = 'Aloha'
const nome2 = "Aloha"
const nome3 = `Aloha`

// números
const num1 = 10
const num2 = 10.52

let nomeAluno // undefined usando let

const sobrenome = null // undefined != null -> null é considerado um object no typeof

//bools
const aprovado = true // or false

console.log(typeof aprovado)


// Dados passados por referência
// Modificar b, modifica a
let a = [1, 2]
const b = a

console.log(a, b)

b.push(3)

console.log(a, b)

// Modificar a não modifica b

a = 2

console.log(a, b)

b. push(5)

console.log(a, b)

const nu1 = 10
const nu2 = 2.5
const nu3 = 8.564654564

console.log(nu1.toString() + nu2)

console.log(nu1.toString(2))

console.log(nu3.toFixed(4))

console.log(Number.isInteger(nu3))

const c = 0.7
const d = 0.1

console.log(c + d)

let arr = 9.4489
console.log(Math.floor(arr))
console.log(Math.ceil(arr))
console.log(Math.round(arr))

console.log(Math.max(1, 50, 2, 80, 3, 100, 2))

console.log(Math.random()) // 0 - 1