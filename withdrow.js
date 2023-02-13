document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountFieldString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountFieldString);
    //console.log(newWithDrawAmount);
    //step-3: 
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log(previousWithdrawTotal);



    // step-6 : 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    withdrawField.value = '';

    if (newWithDrawAmount > previousBalanceTotal) {
        alert('bap er bank a taka nai bujla bapu');
        return
    }
    //step-4 : 

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withDrawTotalElement.innerText = currentWithdrawTotal;
    // step-7 :
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    //console.log(previousBalanceTotal);
    //last clear the input field

})