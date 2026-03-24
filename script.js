function passwordValidation(password) {
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

    return strongPoints;
};

module.exports = passwordValidation;