/**
 * > maior
 * < menor
 * >= maior igual
 * <= menor igual
 * == igual -> checa valor
 * === igualdade estrita -> checa valor e tipo
 * != diferença -> checa valor
 * !== diferença estrita -> checa valor e tipo
 */

console.log(10 == 10) // true

console.log(10 == '10') // true -> correção de tipos, pode dar problemas

console.log(10 === '10') //false

/**
 * &&  -> todos true = true, uma ou mais false = false
 * || -> todas false = false, uma ou mais true = true
 * ! 
 */

console.log('string1' && 0 && 'string2') // 0 é false e o retorno

console.log('string1' && true && 'string2') // tudo é verdadeiro, retorna o último valor

console.log('string1' && 0 && false) 

/**
 * FALSY values
 * 
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

/**
 * FOR IN E FOR ON
 */

const aa = [10, 20, 30, 40, 50];

for(let chave in aa)
{
    console.log(aa[chave])
}

for(let valor of aa)
{
    console.log(valor)
}

aa.forEach((value, key) => {
    console.log(value, key)
})


// ERRROS
try{
    console.log(variavelNaoDeclarada)
}catch(err){
    console.log('Variável não declarada.');
}

function sum(a, b){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new ReferenceError('x e y precisam ser números.');
    }
}

try{
    sum(5, '10');
}catch(err){
    //console.log(err);
    console.log('Erro para o usuário.')
}

try {
    console.log('open file');
    console.log('write file');
    //console.log('close file');
} catch (error) {
    console.log('tratando erro');
} finally { // sempre é executado
    console.log('close file')
}

function returnHour(data)
{
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.');
    }

    if(!data)
    {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const hour = returnHour(11)
    console.log(hour);
} catch (error) {
    console.log('Erro');
} finally {
    console.log('Adeus.');
}

//returnHour(new Date());


// TIMERS

function showHour(){
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {hour12: false});
}

const timer = setInterval(() => console.log(showHour()), 1000);

setTimeout(() => clearInterval(timer), 3000);

setTimeout(() => console.log('AAAAAA'), 5000);