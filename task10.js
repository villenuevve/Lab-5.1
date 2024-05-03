function checkBrackets(str) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    for (let char of str) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            if (!lastOpeningBracket) {
                return false;
            }
            const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            if (lastOpeningBracket !== matchingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


const test = "() => { console.log('Hello, World!'); }";
console.log(checkBrackets(test));