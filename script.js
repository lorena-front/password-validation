const outputList = document.querySelector('.outputList');
const outputContent = document.querySelector('.outputContent');
const lengthItem = document.querySelector('#length span');
const digitItem = document.querySelector('#digit span');
const uppercaseItem = document.querySelector('#uppercase span');
const lowercaseItem = document.querySelector('#lowercase span');
const specialItem = document.querySelector('#special span');
const repeatItem = document.querySelector('#repeat span');
const spaceItem = document.querySelector('#space span');

function messagePassword(message) {
    outputContent.innerHTML = message;
};

function resetMessage() {
    lengthItem.textContent = '❌';
    uppercaseItem.textContent = '❌';
    digitItem.textContent = '❌';
    uppercaseItem.textContent = '❌';
    lowercaseItem.textContent = '❌';
    specialItem.textContent = '❌';
    repeatItem.textContent = '❌';
    spaceItem.textContent = '❌';
    messagePassword("Level: Zero");
};

function passwordValidation(password) {
    password.trim();

    if (password.length <= 0) {
        resetMessage();
        return;
    }

    let strongPoints = 0;

    if (password.length >= 8) {
        strongPoints += 1;
        lengthItem.textContent = '✅';
    } else {
        lengthItem.textContent = '❌';
    }
    
    if (/\d/.test(password)) {
        strongPoints += 1;
        digitItem.textContent = '✅';
    } else {
        digitItem.textContent = '❌';
    }
    
    if (/[A-Z]/.test(password)) {
        strongPoints += 1;
        uppercaseItem.textContent = '✅';
    }  else {
         uppercaseItem.textContent = '❌';
    }
    
    if (/[a-z]/.test(password)) {
        strongPoints += 1;
        lowercaseItem.textContent = '✅';
    }  else {
        lowercaseItem.textContent = '❌';
    }
    
    if (/[!@#$%^&*]/.test(password)) {
        strongPoints += 1;
        specialItem.textContent = '✅';
    } else {
        specialItem.textContent = '❌';
    }

    hasSpace = false;
    if (/\s/.test(password)) {
        strongPoints -= 1;
        hasSpace = true;
    }

    spaceItem.textContent = hasSpace ? '❌' : '✅';

    let hasRepeated = false;
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            strongPoints -= 1;
            hasRepeated = true;
            break;
        }
    }

    repeatItem.textContent = hasRepeated ? '❌' : '✅';

    if (strongPoints === 0) {
        messagePassword("Level: Zero");
        return;
    } else if (strongPoints === 5) {
        messagePassword("Level: Strong");
        return;
    } else if (strongPoints <= 2) {
        messagePassword("Level: Too Weak");
        return;
    } else if (strongPoints === 3) {
        messagePassword("Level: Medium");
        return;
    } else {
        messagePassword("Level: Nice");
    }

    // return strongPoints;
};

const passwordInput = document.getElementById('passwordInput');

passwordInput.addEventListener('input', () => {
    passwordValidation(passwordInput.value);
});

// module.exports = passwordValidation;