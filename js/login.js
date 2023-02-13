// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step- 2: get the email address inside the email input field- all time use korta hobe = .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password 

    const passField = document.getElementById('user-password')
    const password = passField.value;
    // danger ata mane / kono prokar ata use kora jabe na
    // step-4: valid/ invalid check
    if (email === 'shamimraza411@gmail.com' && password === '01971700269') {
        window.location.href = 'bank.html';
    }
    else {
        alert('invalid user');
    }


})