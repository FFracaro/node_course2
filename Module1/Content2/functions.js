function fun(word){
    console.log(word)
}

fun('Aloha')

function fun2(word){
    return word + ' Ahore'
}

let re = fun2('Aloha')

console.log(re)

function sum(a, b){
    return a + b
}

console.log(sum(5, 10))

function sum_default(x = 5, y = 10)
{
    return x - y
}
console.log(sum_default())
console.log(sum_default(7, 5))

let raiz = function (n) {
    return Math.sqrt(n)
};

console.log(raiz(10))

let rest = n => n % 2

console.log(rest(5))