function factory(nome, sobrenome, idade)
{
    return {
        nome, 
        sobrenome, 
        idade, 
        speak(){
            console.log('aaaaa')
        }};
}

let pessoa1 = factory('a', 'b', 55)
let pessoa2 = factory('c', 'd', 10)

console.log(pessoa1)
console.log(pessoa1.nome)
pessoa1.speak()
