// dois números e retorna o maior

function getBiggerNum(a, b)
{
    return (a > b) ? a : b;
}

// alternative
const bigger = (a, b) => (a > b) ? a : b;

console.log(getBiggerNum(5, 2))
console.log(getBiggerNum(2, 5))
console.log(getBiggerNum('c', 'b'))

// entrada: largura e altura
// retorna se está no modo paisagem ou não

const paisagem = (lar, alt) => (lar >= alt);

console.log(paisagem(500, 600));
console.log(paisagem(600, 600));
console.log(paisagem(600, 500));

// fizz buzz
// divisivel por 3 = fizz
// divisivel por 5 = buzz
// por 3 e 4 = fizz buzz

const resulFB = (value) => {
    
    if(isNaN(value))
        return console.log(value);

    value++;

    if(value <= 100)
    {
        (value % 3 === 0) && (value % 5 === 0) ? console.log('FizzBuzz') : (value % 3 === 0) ? 
        console.log('Fizz') : (value % 5 === 0) ? console.log('Buzz') : console.log(value);

        resulFB(value);
    }
}

resulFB('a')

resulFB(-1)



