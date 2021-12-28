function MyScope(){
    const formu = document.querySelector("form")
    const resultado = document.getElementById("resultado")

    const pessoas = []

    function receiveEvent(evento){
        evento.preventDefault()

        const nome = document.getElementById("nome")
        const sobrenome = document.getElementById("sobrenome")
        const peso = document.getElementById("peso")
        const altura = document.getElementById("altura")
        
        pessoas.push(PersonFactory(nome.value, sobrenome.value, peso.value, altura.value))
        
        resultado.innerHTML += `<p> ${pessoas[pessoas.length - 1].nome} 
                                ${pessoas[pessoas.length - 1].sobrenome} 
                                ${pessoas[pessoas.length - 1].peso}
                                ${pessoas[pessoas.length - 1].altura}  
                                </p>`

        console.log(pessoas)
    }

   formu.addEventListener("submit", receiveEvent)
}

function PersonFactory(nome, sobrenome, peso, altura)
{
    return {nome, sobrenome, peso, altura}
}

MyScope()