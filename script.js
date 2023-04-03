let lunchSelected = "";
let drinkSelected = "";
let dessertSelected = "";

function verifier() {

    if (lunchSelected !== "") {

        if (drinkSelected !== "") {

            if (dessertSelected !== "") {

                const closedOrder = document.querySelector ('button')

                closedOrder.classList.add ('button-closed');
                closedOrder.innerHTML = "Fechar pedido";

            }
        }


        
        
    }
}


function selectLunch(selector) {

lunchSelected = selector.innerHTML;

const preSelectedButton = document.querySelector('.lunch .selected');

if (preSelectedButton !== null) {
    preSelectedButton.classList.remove('selected');
}

const selectedButton = document.querySelector(selector)

selectedButton.classList.add('selected');

verifier();

}

function selectDrink(selector) {

drinkSelected = selector.innerHTML;

const preSelectedButton = document.querySelector('.drink .selected');
    
if (preSelectedButton !== null) {
preSelectedButton.classList.remove('selected');
}
    
const selectedButton = document.querySelector(selector)
    
selectedButton.classList.add('selected');

verifier();
    
}

function selectDessert(selector) {

dessertSelected = selector.innerHTML;

const preSelectedButton = document.querySelector('.dessert .selected');
    
if (preSelectedButton !== null) {
preSelectedButton.classList.remove('selected');
}
    
const selectedButton = document.querySelector(selector)
    
selectedButton.classList.add('selected');

verifier();
    
}

