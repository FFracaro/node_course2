const data = new Date()

console.log(data.toString())

const data1 = new Date(0)

console.log(data1.toString())

const tresHoras = 60 * 60 * 3 * 1000

const data2 = new Date(tresHoras)

console.log(data2.toString())

const umDia = 60 * 60 * 24 * 1000

const data3 = new Date(0 + tresHoras + umDia)

console.log(data3.toString())

const data4 = new Date(2019, 3, 20, 15, 14, 27) // a, m, d, h, M, s, m

console.log(data4.toString())

const data5 = new Date('2019-04-20 20:20:59') 

console.log(data5.toString())

console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('Ms', data.getMilliseconds())
console.log('dia semana', data.getDay()) // 0 - DOMINGO, 6 - SÁBADO


console.log(Date.now())