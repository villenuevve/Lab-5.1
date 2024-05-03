function checkBrackets(str) {
    const stack = [];
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of str) {
        if (bracketsMap[char]) {
            const lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== bracketsMap[char]) {
                return false;
            }
        } else if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

const test = "() => { console.log('Hello, World!'); }";
console.log(checkBrackets(test));
