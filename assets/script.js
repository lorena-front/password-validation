const outputList = document.querySelector('.outputList');
const lengthItem = document.querySelector('#length');
const digitItem = document.querySelector('#digit');
const uppercaseItem = document.querySelector('#uppercase');
const lowercaseItem = document.querySelector('#lowercase');
const specialItem = document.querySelector('#special');
const repeatItem = document.querySelector('#repeat');
const spaceItem = document.querySelector('#space');
const strengthFill = document.getElementById('strength-fill');

function setIcon(element, icon, color) {
    element.textContent = icon;
    element.style.color = color;
};

function resetMessage() {
    setIcon(lengthItem, 'close', 'red');
    setIcon(digitItem, 'close', 'red');
    setIcon(uppercaseItem, 'close', 'red');
    setIcon(lowercaseItem, 'close', 'red');
    setIcon(specialItem, 'close', 'red');
    setIcon(repeatItem, 'check', 'green');
    setIcon(spaceItem, 'check', 'green');
    strengthFill.style.width = '0%';
};

function passwordValidation(password) {
    // password = password.trim();

    if (password.length <= 0) {
        resetMessage();
        return;
    }

    let strongPoints = 0;

    if (password.length >= 8) {
        strongPoints += 1;
        setIcon(lengthItem, 'check', 'green');
    } else {
        setIcon(lengthItem, 'close', 'red');
    }
    
    if (/\d/.test(password)) {
        strongPoints += 1;
        setIcon(digitItem, 'check', 'green');
    } else {
        setIcon(digitItem, 'close', 'red');
    }
    
    if (/[A-Z]/.test(password)) {
        strongPoints += 1;
        setIcon(uppercaseItem, 'check', 'green');
    }  else {
         setIcon(uppercaseItem, 'close', 'red');
    }
    
    if (/[a-z]/.test(password)) {
        strongPoints += 1;
        setIcon(lowercaseItem, 'check', 'green');
    }  else {
        setIcon(lowercaseItem, 'close', 'red');
    }
    
    if (/[!@#$%^&*]/.test(password)) {
        strongPoints += 1;
        setIcon(specialItem, 'check', 'green');
    } else {
        setIcon(specialItem, 'close', 'red');
    }

    let hasSpace = false;
    if (/\s/.test(password)) {
        strongPoints -= 1;
        hasSpace = true;
    }

    if (hasSpace) {
        setIcon(spaceItem, 'close', 'red');
    } else {
        setIcon(spaceItem, 'check', 'green');
    }

    let hasRepeated = false;
    for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1] && password[i] !== ' ') {
        strongPoints -= 1;
        hasRepeated = true;
        break;
    }
}

    if (hasRepeated) {
        setIcon(repeatItem, 'close', 'red');
    } else {
        setIcon(repeatItem, 'check', 'green');
    }

    if (strongPoints === 0) {
        strengthFill.style.width = '0%';
        strengthFill.style.backgroundColor = 'red';
    } else if (strongPoints <= 2) {
        strengthFill.style.width = '40%';
        strengthFill.style.backgroundColor = 'red';
    } else if (strongPoints === 3) {
        strengthFill.style.width = '60%';
        strengthFill.style.backgroundColor = 'orange';
    } else if (strongPoints === 4) {
        strengthFill.style.width = '80%';
        strengthFill.style.backgroundColor = 'yellowgreen';
    } else {
        strengthFill.style.width = '100%';
        strengthFill.style.backgroundColor = 'green';
    }

    // return strongPoints;
};

const passwordInput = document.getElementById('passwordInput');

passwordInput.addEventListener('input', () => {
    passwordValidation(passwordInput.value);
});

// module.exports = passwordValidation;