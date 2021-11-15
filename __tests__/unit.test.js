// unit.test.js

const { unregisterCustomQueryHandler } = require('puppeteer');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Matches valid phone numbers', () => {
    expect(functions.isPhoneNumber('(310)721-1119')).toBe(true);
    });

  
test('Matches valid phone numbers', () => {
      expect(functions.isPhoneNumber('(408)661-0940')).toBe(true);
    });

test('Matches valid phone numbers', () => {
        expect(functions.isPhoneNumber('3107211119')).toBe(false);
    });
test('Matches valid phone numbers', () => {
        expect(functions.isPhoneNumber('310+7211119')).toBe(false);
    });

test('matches valid emails',() =>{
    expect(functions.isEmail('dorsa@ucsd.edu')).toBe(true);
});
test('matches valid emails',() =>{
    expect(functions.isEmail('dorsa@gmail.com')).toBe(true);
});
test('matches valid emails',() =>{
    expect(functions.isEmail('dorsa.edu')).toBe(false);
});
test('matches valid emails',() =>{
    expect(functions.isEmail('dorsa@edu')).toBe(false);
});


test('password validation',() =>{
    expect(functions.isStrongPassword('dorsa_1986')).toBe(true);
});

test('password validation',() =>{
    expect(functions.isStrongPassword('dorsa_1986_love')).toBe(true);
});

test('password validation',() =>{
    expect(functions.isStrongPassword('dorsa_19860705_love')).toBe(false);
});

test('password validation',() =>{
    expect(functions.isStrongPassword('dorsa$1986_love')).toBe(false);
});

test('date validation',() =>{
    expect(functions.isDate('7/5/1986')).toBe(true);
});

test('date validation',() =>{
    expect(functions.isDate('07/05/1986')).toBe(true);
});

test('date validation',() =>{
    expect(functions.isDate('7/5/86')).toBe(false);
});

test('date validation',() =>{
    expect(functions.isDate('7//1986')).toBe(false);
});

test('Matches valid 3 or 6 character hex codes',() =>{
    expect(functions.isHexColor('#BBB')).toBe(true);
});

test('Matches valid 3 or 6 character hex codes',() =>{
    expect(functions.isHexColor('#FFF')).toBe(true);
});

test('Matches valid 3 or 6 character hex codes',() =>{
    expect(functions.isHexColor('/FFF')).toBe(false);
});

test('Matches valid 3 or 6 character hex codes',() =>{
    expect(functions.isHexColor('#F/F')).toBe(false);
});