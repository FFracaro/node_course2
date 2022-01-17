//declaração de funções
//ocorre Function hoisting - js vai elevar a função
// neste caso ela pode ser chamada antes de sua declaração
speak();

function speak(){
    console.log('Aloha');
};

speak();

//First class object (Objetos de primeira classe)
//função pode ser tratada como um objeto
const nome = function(){ // -> function <nome> () também pode ser utilizado
    console.log('Ahore');
};

nome();

function FirstClass(a){
    a();
};

FirstClass(nome);

// Arrow functions
const arrow = () => {
    console.log('aaaaaa');
};

arrow();

//Dentro de um objeto
const obj = {
    falar : function() {
        console.log('HELLOOOW');
    }
};

obj.falar();

const obj2 = {
    talk(){
        console.log('ITS ME');
    }
};

obj2.talk();

//Parametros
function f(){
    console.log(arguments);
}

f('valor', 1, 2, 3, 4, 5);

// função definida como function possui uma 
//variavel que sustenta todos os argumentos
//chamada arguments
function g(){
    let total = 0;

    for(let arg of arguments){
        //console.log(arg);
        total+= arg;
    }
    console.log(total);
}

g(1, 2, 3, 4, 5);

//Neste caso não importa se a função recebe ou não argumentos
function j(a, b, c){
    let total = 0;
    console.log(a, b, c);
    for(let arg of arguments){
        //console.log(arg);
        total+= arg;
    }
    console.log(total);
}

j(1, 2, 3, 4, 5);

//Valores não iniciados recebem undefined
function u(a, b, c, d, e, f, g){
    let total = 0;
    console.log(a, b, c, d, e, f, g);
    for(let arg of arguments){
        //console.log(arg);
        total+= arg;
    }
    console.log(total);
}

u(1, 2, 3, 4, 5);

//funções com valores padrões
//caso um dos argumentos não sejam recebidos
//ele recebe o valor default
function i(a = 1, b = 5){
    console.log(a + b);
}

i(1);
i(5, 5);

//destructuring em funções
function s({a, b, c}){
    console.log(a, b, c);
}

s({a: 'aaaa', b: 'bbbb', c: 'ccccc'});
//ou
const objeto = {a: 'aaadasdaa', b: 'bbaadasbb', c: 'cccasdasdcc'};
s(objeto);

//destructuring de arrays em funções
function e( [v, b, n] ){
    console.log(v, b, n);
}

e(['ALA', 'MO', 'ALO']);

//rest operator
function w(operador, acumulador, ...numeros){
    console.log(operador, acumulador, numeros);
    for(let numero of numeros){
        if(operador === "+") acumulador += numero;
        if(operador === "-") acumulador -= numero;
        if(operador === "/") acumulador /= numero;
        if(operador === "*") acumulador *= numero;
    }
    console.log(acumulador);
}

w('+', 0, 10, 20, 30, 40);

//similar ao rest
function t(operador, acumulador, numeros){
    console.log(operador, acumulador, numeros);
}

t('+', 0, [10, 20, 30, 40]);

//Arrow functions não tem arguments
//porém o rest operator pode ser usado como substituto
//permitindo uma função receber n paramentos
const y = (...args) => {
    console.log(args);
};

y('+', 0, [10, 20, 30, 40]);


