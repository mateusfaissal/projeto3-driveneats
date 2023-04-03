let lunchSelected = "";
let drinkSelected = "";
let dessertSelected = "";
let lunchName = "";
let lunchPrice = "";
let drinkName = "";
let drinkPrice = "";
let dessertName = "";
let dessertPrice = "";

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

const selectedButton = document.querySelector(selector);

selectedButton.classList.add('selected');

lunchName = selectedButton.querySelector('h1').textContent;
lunchPrice = selectedButton.querySelector('h3').textContent;





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

drinkName = selectedButton.querySelector('h1').textContent;
drinkPrice = selectedButton.querySelector('h3').textContent;

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

dessertName = selectedButton.querySelector('h1').textContent;
dessertPrice = Number(selectedButton.querySelector('h3').textContent);



verifier();
    
}

function wppMessage () {

    const message = `Olá, gostaria de fazer o pedido: 
    - Prato: ${lunchName}
    - Bebida: ${drinkName}
    - Sobremesa: ${dessertName}

    Total: ${Number(lunchPrice) + Number(drinkPrice) + Number (dessertPrice)}`; 

    
    window.open(`https://wa.me/5533988109523?text=${encodeURIComponent(message)}`);   

}

