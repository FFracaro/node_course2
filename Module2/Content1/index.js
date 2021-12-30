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