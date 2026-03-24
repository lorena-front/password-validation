const outputList = document.querySelector('.outputList');
const outputContent = document.querySelector('.outputContent');

function messageLi(message) {
    const newLi = document.createElement('li');
    newLi.textContent = message;
    outputList.append(newLi);
};

function messagePassword(message) {
    outputContent.innerHTML = message;
};

function passwordValidation() {
    const passwordInput = document.getElementById('passwordInput');
    const inputPassword = passwordInput.value;
    const password = inputPassword.trim();

    if (password.length <= 0) {
        outputList.innerHTML = '';
        messagePassword("Please, write something!");
        return;
    }

    let strongPoints = 0;

    outputList.innerHTML = '';

    if (password.length >= 8) {
        strongPoints += 1;
        messageLi("There's at least 8 characters ✅");
    } else {
        messageLi("Needs at least 8 characters ❌");
    }
    
    if (/\d/.test(password)) {
        strongPoints += 1;
        messageLi("Digits ✅");
    } else {
        messageLi("Needs at least a digit ❌")
    }
    
    if (/[A-Z]/.test(password)) {
        strongPoints += 1;
        messageLi("Uppercase ✅");
    }  else {
        messageLi("Needs at least an uppercase character ❌");
    }
    
    if (/[a-z]/.test(password)) {
        strongPoints += 1;
        messageLi("Lowercase ✅");
    }  else {
        messageLi("Needs at least a lowercase character ❌");
    }
    
    if (/[!@#$%^&*]/.test(password)) {
        strongPoints += 1;
        messageLi("Special Characters ✅");
    } else {
        messageLi("Needs at least a special character ❌");
    }

    let hasRepeated = false;
    for (let i = 0; i < password.length - 1; i++) {
        if (password[i] === password[i + 1]) {
            strongPoints -= 1;
            hasRepeated = true;
            break;
        }
    }

    if (hasRepeated) {
        messageLi("Repeated characters ❌");
    } else {
        messageLi("Without repeated characters ✅");
    }

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

// module.exports = passwordValidation;