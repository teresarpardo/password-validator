import { isValidPassword, isString, is8Long, containsLowercase, containsUppercase, containsNumber} from './App'

describe ('Password Validator', () => {

    describe('A valid password  must be a string, at least 8 characters long with at leat a lowercase letter, an uppercase letter and a number', () => {
        const validPassword = 'Manzana123';

        it('is a valid password', () =>{
            expect(isValidPassword(validPassword)).toBeTruthy();
        });
    });

    describe ('A password that is not a string',() => {
        const password = 12345678;
        it('is not a string' , () => {
            expect(isString(password)).toBeFalsy()
        });
    });
    describe ('A password that is less than 8 characters', () => {
        const password = 'manzana'; 
        it('is too short', () =>{
            expect(is8Long(password)).toBeFalsy()
        });
    });
    describe ('A password that doesn´t have a lowercase letter', () => {
        const password = 'MANZANA';
        it('do not have a lowercase letter', () => {
            expect(containsLowercase(password)).toBeFalsy()
        });
    });
    describe ('A password that doesn´t have an uppercase letter', () => {
        const password = 'manzana';
        it('do not have an uppercase letter', () => {
            expect(containsUppercase(password)).toBeFalsy()
        });
    });
    describe ('A password that doesn´t have a number', () => {
        const password = 'manzana';
        it('do not have anumber', () => {
            expect(containsNumber(password)).toBeFalsy()
        });
    });

})
 