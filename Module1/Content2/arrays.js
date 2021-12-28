//const alunos = ['a', 'b', 'c', 1, 5.85, funcao()] // aceita qualquer coisa

const nome = 'Arroba'

console.log(nome[1])

const alunos = ['a', 'b', 'c']

console.log(alunos)
console.log(alunos[1])

alunos[0] = 'H'

console.log(alunos)

alunos[3] = 'a'

console.log(alunos)

console.log(alunos.length)

alunos.push('J')

console.log(alunos)

alunos.unshift('T')

console.log(alunos)

let removed = alunos.pop()

console.log(removed)
console.log(alunos)

console.log(alunos[50]) // undefined

console.log(typeof alunos) // object
console.log(alunos instanceof Array)