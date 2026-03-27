const passwordValidation = require('./script.js');

test('Password with less than 7 characters', () => {
    expect(passwordValidation("ICLPFNA")).toBe(1);
});

test('Password with uppercase and lowercase characters only', () => {
    expect(passwordValidation("XbwrbqSCHpIB")).toBe(3);
});

test('Password with uppercase, lowercase and numbers', () => {
    expect(passwordValidation("8knkJr1OH9wy")).toBe(4);
});

test('Password with uppercase, lowercase, numbers and special characters', () => {
    expect(passwordValidation("$v2M68?354F|")).toBe(5);
});

test('Password with repeated characters', () => {
    expect(passwordValidation("ICLAA")).toBe(1);
});

test('Password with repeated characters', () => {
    expect(passwordValidation("ICLAAAA")).toBe(1);
});