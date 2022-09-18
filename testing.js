
export function captitalize(string) {
    let splitString = string.split("");
    splitString[0] = splitString[0].toUpperCase();
    return splitString.join("");
};

export function reverseString(string) {
    return string.split("").reverse().join("");
};

export const calculator = {
    add(a,b) {return a + b},
    subtract(a,b) {return a - b},
    divide(a,b) {return a / b},
    multiply(a,b) {return a * b},
};

function calcShift(char, offset) {
    let charCode = char.charCodeAt()
    // lowercase range: 97 - 122
    // uppercase range: 65 - 90
    if (charCode >= 97 && charCode <= 122) {
        charCode += offset;
        while (charCode > 122) {
            charCode -= 26;
        }
        return String.fromCharCode(charCode);
    } else if (charCode >= 65 && charCode <= 90) {
        charCode += offset;
        while (charCode > 90) {
            charCode -= 26;
        }
        return String.fromCharCode(charCode);
    } else {
        return char;
    }
};

export function caesarCipher(string, offset){
    let splitString = string.split("");
    let shiftedString = splitString.map(
        (char) => calcShift(char, offset)
    );
    return shiftedString.join("");
};

export function analyzeArray(arr){
    return {
        average: arr.reduce((x, y) => x + y) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length, 
    };
};
