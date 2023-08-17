
document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDeposit = depositField.value;
    depositField.value = '';
    if (isNaN(newDeposit)) {
        alert('Please provide a valid number')
        return;
    }
    const previousDepositValue = document.getElementById('deposit-value');
    const previousDeposit = previousDepositValue.innerText;
    const totalDepositAmount = parseInt(previousDeposit) + parseInt(newDeposit);
    previousDepositValue.innerText = totalDepositAmount;

    const previousBalanceValue = document.getElementById('main-balance')
    const previousBalance = previousBalanceValue.innerText;
    const totalBalance = parseInt(previousBalance) + totalDepositAmount;
    previousBalanceValue.innerText = totalBalance;

})