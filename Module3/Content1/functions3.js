//Funções construtoras
//Sempre com letra maiuscula
// usa new
function Person(firstName, lastName){

    const id = '456';
    const privateMethod = () => {

    };

    this.firstName = firstName;
    this.lastName = lastName;

    this.something = () => {
        console.log(this.firstName + ' ' + this.lastName);
    };
}

const p1 = new Person('Aaaa', 'rrrr');
p1.something();


//FUNÇÕES RECURSIVAS
function recurs(max){
    if(max <= 10){
        console.log(max);
        recurs(++max); //max++ calls the function with max not with max + 1
    }
        
}

recurs(0)


//FUNÇÕES GERADORES -> lazy evaluation

function* gerasamba(){
    yield 'valor';
    yield 'aaaa';
    yield 'okkaka';
}

const a1 = gerasamba();
console.log(a1.next().value);


const a2 = gerasamba();
console.log(a2.next());
console.log(a2.next());

const a3 = gerasamba();
console.log(a3.next());
console.log(a3.next().value);
console.log(a3.next());

console.log(a1.next().value);
console.log(a1.next().value);
console.log(a1.next().value); // acabou valores

function* gera(){
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}

const g = gera();

console.log(g.next().value)

console.log(g.next().value)

console.log(g.next().value)

console.log(g.next().value)


function* gerar1(){
    yield '1';
    yield '2';
    yield '3';
}

function* gerar2(){
    yield* gerar1();
    yield '4';
    yield '5';
}

const t = gerar2();
console.log(t.next().value)
console.log(t.next().value)
console.log(t.next().value)
console.log(t.next().value)
console.log(t.next().value)


function* gerar3(){
    yield () => {
        console.log('wwwww');
    }

    yield () => {
        console.log('aaaaa');
    }
}

const f = gerar3();
f.next().value()
f.next().value()