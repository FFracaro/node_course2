function scope(){
    const form = document.querySelector("form")

    form.addEventListener("submit", (e) => {

        e.preventDefault()

        const weight = e.target.querySelector("#peso")
        const height = e.target.querySelector("#altura")

        let n_weight = Number(weight.value)
        let n_height = Number(height.value)

        if(!n_weight){
            setResult('Peso inválido.', false)
            return
        }

        if(!n_height){
            setResult('Altura inválida.', false)
            return
        }

        let imc = calcIMC(n_weight, n_height)

        if(imc !== 0)
            setResult(messageToShowIMC(imc), true)
    })
}

function calcIMC(_weight, _height){

    if(!verifyWeightValue(_weight)){
        setResult('Peso não está entre 30 e 500 kg.', false)
        return 0
    }

    if(!verifyHeightValue(_height)){
        setResult('Altura não está entre 1 e 3 m.', false)
        return 0
    }

    return _weight / _height ** 2          
}

function createParag(){
    const p = document.createElement('p')
    return p
}

function setResult(msg, isValid)
{
    const result = document.getElementById("resultado")

    result.innerHTML = '';

    const p = createParag()

    if(isValid)
    {
        p.classList.add('paragrafo-resultado');
    }
    else
    {
        p.classList.add('err');
    }

    p.innerHTML = msg

    result.appendChild(p)
}

function messageToShowIMC(imc)
{
    let msg = `O seu imc é ${imc} e você está`

    switch(true)
    {
        case (imc < 18.5):
            return msg + ` abaixo do peso.`
        case (imc < 25):
            return msg + ` com peso normal.`
        case (imc < 30):
            return msg + ` com sobrepeso.`
        case (imc < 35):
            return msg + ` com obesidade 1.`
        case (imc < 40):
            return msg + ` com obesidade 2.`
        case (imc  >= 40):
            return msg + ` com obesidade 3.`
    }
}

function verifyWeightValue(w){ return (w > 30 && w < 500) }

function verifyHeightValue(h){ return (h > 1 && h < 3) }

scope()