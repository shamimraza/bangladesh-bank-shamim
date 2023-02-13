// click hendelar
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //console.log(depositAmount);
    // step -3: get the current  deposit total 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //console.log(depositTotal);
    // step -4: add numbers to set the total value 
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5: get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear the clear field
    depositField.value = '';
})