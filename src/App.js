export const isValidPassword = (password) => {
return  isString(password) && 
        is8Long(password)  && 
        containsLowercase(password) &&
        containsUppercase(password) &&
        containsNumber(password) 
}

// It must be a string
export const isString = (password) => {
    return typeof(password) == 'string';
};
// It must be at least 8 characters long.
export const is8Long = (password) => {
    return password.length >= 8;
};

// It must contain at least one letter (a-z)
export const containsLowercase = (password) => {
    return password.match("[a-z]+") != null;
}

// It must contain at least one uppercase letter (A-Z)
export const containsUppercase = (password) => {
    return password.match("[A-Z]+") != null;
}

// It must contain at least one number (0-9)
export const containsNumber= (password) => {
    return password.match("\\d+") != null
}
 