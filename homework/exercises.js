function capitalize(str) {
    let newStr = str.toLowerCase();
    return newStr.charAt(0).toUpperCase() + newStr.slice(1);
  }
  

function reverseStr(str) {
    return str.split('').reverse().join('');
}

let calculator = {
    add(a,b) {
        return a + b;
    },
    substract(a,b) {
        return a - b;
    },
    divide(a,b) {
        return a / b;
    },
    multiply(a,b) {
        return a * b;
    }

}


function caesarCipher(text, shift) {
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      if (/[a-zA-Z]/.test(char)) {
        let isUpperCase = char === char.toUpperCase();
        let charCode = char.charCodeAt(0);
  
        // Apply the shift
        let shiftedCharCode = (charCode - (isUpperCase ? 65 : 97) + shift) % 26 + (isUpperCase ? 65 : 97);
  
        // Convert the ASCII code back to a character and append to the result
        result += String.fromCharCode(shiftedCharCode);
      } else {
        // If the character is not a letter, leave it unchanged
        result += char;
      }
    }
  
    return result;
  }
  
  

function analyzeArray(array) {
    const minMax = array.reduce((acc, current) => {
        acc.min = Math.min(acc.min, current);
        acc.max = Math.max(acc.max, current);
        acc.average = acc.max / 2;
      
        return acc;
      }, { min: Infinity, max: -Infinity });
      
    let object = {
        average: minMax.average,
        min: minMax.min,
        max: minMax.max,
        length: array.length
    };
    return object;
}

module.exports =  {
    capitalize,
    reverseStr,
    calculator,
    caesarCipher,
    analyzeArray
};