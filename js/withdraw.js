document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = withdrawField.value;
    withdrawField.value = '';

    if (isNaN(withdraw)) {
        alert('Please provide a valid number')
        return;
    }

    const previousWithdrawValue = document.getElementById('withdraw-value');
    const previousWithdraw = previousWithdrawValue.innerText;



    const previousBalanceValue = document.getElementById('main-balance')
    const previousBalance = previousBalanceValue.innerText;

    if (withdraw > previousBalance) {
        alert("Your withdraw balance is bigger than your current balance");
        return;
    }

    const totalWithdrawAmount = parseInt(previousWithdraw) + parseInt(withdraw);
    previousWithdrawValue.innerText = totalWithdrawAmount;

    const totalBalance = parseInt(previousBalance) - totalWithdrawAmount;
    previousBalanceValue.innerText = totalBalance;



})