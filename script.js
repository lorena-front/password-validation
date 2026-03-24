function passwordValidation(password) {
    const passwordInput = document.getElementById('passwordInput');
    const outputContent = document.querySelector('.outputContent');

    password = passwordInput.value;

    let strongPoints = 0;

    if (password.length >= 8) {
        strongPoints += 1;
    } 
    
    if (/\d/.test(password)) {
        strongPoints += 1;
    } 
    
    if (/[A-Z]/.test(password)) {
        strongPoints += 1;
    } 
    
    if (/[a-z]/.test(password)) {
        strongPoints += 1;
    } 
    
    if (/[!@#$%^&*]/.test(password)) {
        strongPoints += 1;
    }

    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i + 1]) {
            strongPoints -= 1;
            break;
        };
    }

    if (password.length < 8) {
        strongPoints = 0;
        outputContent.innerHTML = "Your password needs to be at least 8 characters."
    }

    if (password.length === 0) {
        outputContent.innerHTML = "Please, write something!";
    } else {
        if (strongPoints === 5) {
            outputContent.innerHTML = "Strong";
        }

        if (strongPoints >= 1 && strongPoints <= 2) {
            outputContent.innerHTML = "Too Weak";
        }

        if (strongPoints === 3) {
            outputContent.innerHTML = "Medium";
        }

        if (strongPoints === 4) {
            outputContent.innerHTML = "Nice";
        }
    }

    return strongPoints;
};

module.exports = passwordValidation;