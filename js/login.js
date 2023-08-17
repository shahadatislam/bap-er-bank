document.getElementById('btn-submit').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    console.log(email);
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(password);

    if (email === 'monsubajansum@gmail.com' && password === 'jansum') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Toke tejjo putro korlam');
    }
})

