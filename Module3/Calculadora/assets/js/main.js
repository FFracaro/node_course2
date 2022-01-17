function calculator(){
    return {

        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        btnDel: document.querySelector('.btn-del'),
        btnEqual: document.querySelector('.btn-equal'),

        ini(){
            this.clickBtn();
            this.enterOnPress();
        },

        enterOnPress(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.calculate();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        //Não usar eval
        calculate(){
            let conta = this.display.value;
            
            try {
                conta = eval(conta);

                if(!conta) return alert('Conta inválida.');

                this.display.value = String(conta);

            } catch (error) {
                return alert('Conta inválida.');
            }
        },

        clickBtn(){
            document.addEventListener('click', (e) => { // function precisa definir o bind, arrow function mantém o escopo do this
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }

                if(el.classList.contains('btn-equal')){
                    this.calculate();
                }
            });
        },

        btnParaDisplay(value){
            this.display.value += value;
        }

    };
}

const calc = calculator();
calc.ini();