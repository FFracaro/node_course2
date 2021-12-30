function scope()
{
    const h1 = document.querySelector('.container h1')

    const date = new Date()

    h1.innerHTML = `${getDayPT(date.getDay())}, ${date.getDate()} de ${getMonthPT(date.getMonth())} de 
                    ${date.getFullYear()} - ${getZeroPadding(date.getHours())}:${getZeroPadding(date.getMinutes())}`

}

function getDayPT(day) // alternativa, utilizar um array
{
    return {
        0 : 'Domingo',
        1 : 'Segunda-feira',
        2 : 'Terça-feira',
        3 : 'Quarta-feira',
        4 : 'Quinta-feira',
        5 : 'Sexta-feira',
        6 : 'Sábado'
    }[day]
}

function getMonthPT(month) // alternativa, utilizar um array
{
    return {
        0 : 'Janeiro',
        1 : 'Fevereiro',
        2 : 'Março',
        3 : 'Abril',
        4 : 'Maio',
        5 : 'Junho',
        6 : 'Julho',
        7 : 'Agosto',
        8 : 'Setembro',
        9 : 'Outubro',
        10: 'Novembro',
        11: 'Dezembro' 
    }[month]
}

function getZeroPadding(num)
{
    return num < 10 ? '0' + num : num
}

scope()

/*
const h1 = document.querySelector('.container h1')
const data = new Date()
const options = {
    dataStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = data.toLocaleDateString('pt-BR', options)
*/