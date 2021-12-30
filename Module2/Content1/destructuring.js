var a = 1;
var b = 3;
var c = 0;

[a, b, c] = [b, c, a];
console.log(a); // 3
console.log(b, c); // 1

let x = 'A';
let y = 'B';
let z = 'C';

const numbers = [1, 2, 3];
[x, y, z] = numbers;

console.log(x, y, z)

const aaa = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, ...rest] = aaa;

console.log(first, second);
console.log(rest);

const [, , third, , , , seventh, ...rest2] = aaa;

console.log(third, seventh);
console.log(rest2);

const bbb = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(bbb[0][1])

const [,[,,six]] = bbb
console.log(six)

const [list1, list2, list3] = bbb
console.log(list2)

const person = {
    nome: 'Aloha',
    sobrenome: 'Ahore',
    age: 30,
    address: {
        rua: 'aaaa',
        number: 123
    }
};

const {nome} = person;
console.log(nome)

const{nome: a1, age: b1, address: c1} = person;
console.log(a1, b1, c1)

const{ address: {number} } = person
console.log(number)