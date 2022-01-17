// Calculadora com função construtora
function Calculator( display, btnClear, btnDel, btnEqual ){

        this.display = display;
        this.btnClear = btnClear;
        this.btnDel = btnDel;
        this.btnEqual = btnEqual;

        this.ini = () => {
            clickBtn();
            enterOnPress();
        };

        const enterOnPress = () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    calculate();
                }
            });
        };

        const clearDisplay = () => {
            this.display.value = '';
        };

        const deleteOne = () => {
            this.display.value = this.display.value.slice(0, -1);
        };

        //Não usar eval
        const calculate = () => {
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta) return alert('Conta inválida.');

                this.display.value = String(conta);
            } catch (error) {
                return alert('Conta inválida.');
            }
        };

        const clickBtn = () => {
            document.addEventListener('click', (e) => { // function precisa definir o bind, arrow function mantém o escopo do this
                const el = e.target;

                if(el.classList.contains('btn-num')) btnParaDisplay(el.innerText);

                if(el.classList.contains('btn-clear')) clearDisplay();

                if(el.classList.contains('btn-del')) deleteOne();

                if(el.classList.contains('btn-equal')) calculate();
            });
        };

        const btnParaDisplay = (value) => {
            this.display.value += value;
            this.display.focus();
        };
}

const calc = new Calculator(document.querySelector('.display'), document.querySelector('.btn-clear'), 
                            document.querySelector('.btn-del'), document.querySelector('.btn-equal'));

calc.ini();