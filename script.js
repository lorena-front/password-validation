const outputList = document.querySelector('.outputList');

function messageLi(message) {
    const newLi = document.createElement('li');
    newLi.textContent = message;
    outputList.append(newLi);
};

function passwordValidation() {
    const passwordInput = document.getElementById('passwordInput');
    const outputContent = document.querySelector('.outputContent');
    
    password = passwordInput.value;

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
        messageLi("Needs at least a uppercase character ❌");
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
    for (let i = 0; i < password.length; i++) {
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

    if (password.length <= 0) {
        outputContent.innerHTML = "Please, write something!";
    } else {
        if (strongPoints === 5) {
            outputContent.innerHTML = "Level: Strong";
        }

        if (strongPoints >= 1 && strongPoints <= 2) {
            outputContent.innerHTML = "Level: Too Weak";
        }

        if (strongPoints === 3) {
            outputContent.innerHTML = "Level: Medium";
        }

        if (strongPoints === 4) {
            outputContent.innerHTML = "Level: Nice";
        }
    }

    return strongPoints;
};

module.exports = passwordValidation;