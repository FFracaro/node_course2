//quando os parametros tem o mesmo nome que 
//os campos do objeto, pode-se omitir
//a declaração do campo
function p(nome, sobrenome){
    return {nome, sobrenome}
}

function p2(nome, sobrenome){
    return {amora: nome, pessego: sobrenome}
}

function speak(start){
    function rest(resto){
        return start + ' ' + resto
    }
    return rest
}

const a = speak('aaaa');
console.log(a('ora ora'));

//Factory functions
//sem utilizar factory -> muita repetição
function dup(num){
    return num * 2;
}

function trip(num){
    return num * 3;
}

function quad(num){
    return num * 4;
}

console.log(dup(2));
console.log(trip(2));
console.log(quad(2));

//com factory
//função com fechamento/clojure
function makeMulti(multiplicator){
    return function multi(n){
        return n * multiplicator;
    }
}

const b = makeMulti(5);
console.log(b(5));
console.log(b(10));
console.log(b(20));


//IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function(a, b, c){
    console.log('executada automaticamente' + a, b, c)
})(1, 2, 3);

//Função dentro de objeto é chamado de método

function o(nome, sobrenome, peso, altura){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome;
        },
        fala(assunto){
            return `${this.nome} aaaa ${assunto} gggg ${this.peso}`;
        },
        peso: peso,
        altura: altura,
        get imc(){
            return (this.peso / (this.altura ** 2)).toFixed(2);
        },
        set nomeCompleto(valor){
            valor = valor.split(" ");
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        }
    };
}

const p5 = o('aaa', 'bbb', 10, 2);
console.log(p5);
console.log(p5.fala('rrrrr'));
console.log(p5.imc);
console.log(p5.nomeCompleto);
p5.nomeCompleto = 'AAAA CCCCC RFFFF';
console.log(p5.nomeCompleto);