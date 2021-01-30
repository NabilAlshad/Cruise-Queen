function productChangeHandler(product, isIncrease) {

    const inputValue = getInputValue(product);
    let newValue = inputValue;
    if (isIncrease == true) {
        newValue = inputValue + 1;
    }
    if (isIncrease == false && inputValue > 0) {
        newValue = inputValue - 1;
    }
    document.getElementById(product + '-count').value = newValue
    let subTotalAmount = 0
    if (product == 'Firstclass') {
        subTotalAmount = newValue * 150;
    }
    if (product == 'economy') {
        subTotalAmount = newValue * 100;
    }

    calculateTotal();

}

function calculateTotal() {
    const firstclassCount = getInputValue('Firstclass');
    const economyCount = getInputValue('economy');
    const subtotalAmount = firstclassCount * 150 + economyCount * 100;
    document.getElementById('Subtotal-amount').innerText = '$' + subtotalAmount;
    const tax = Math.round(subtotalAmount * .10);
    document.getElementById('vat-amount').innerText = tax;
    const totalAmount = subtotalAmount + tax;
    document.getElementById('total-amount').innerText = totalAmount;


}


function getInputValue(product) {
    const inputCount = document.getElementById(product + '-count');
    const inputValue = parseInt(inputCount.value);
    return inputValue;
}

function alertNotice(product) {
    const firstClassInput = getInputValue('Firstclass');
    const economyInput = getInputValue('economy');
    const totalAmount = document.getElementById('total-amount').innerText;
    alert('you have booked  ' + firstClassInput + ' First Class seats and  ' +
        economyInput + ' economy class seats \n' + 'Your total Amount is ' + totalAmount + '\n' +
        'Have fun with our  CRUISE QUEEN '

    );

}