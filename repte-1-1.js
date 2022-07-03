function isStrongNumber(num) {
    if (num >= 0) {
        let digits = num.toString().split('');
        let splitDigits = digits.map(number => Number(number))
        let factorialResult = factorial(splitDigits);

        if (factorialResult === num) {
            return "STRONG!!!"
        } else {
            return "Not Strong !!"
        }
    }

}


function factorial(realDigits) {
    let result = 0;
    for (let i = 0; i < realDigits.length; i++) {
        let num = realDigits[i];
        let total = 1;
        for (let j = 1; j <= num; j++) {
            total = total * j;
        }

        result += total;

    }
    return result;
}
