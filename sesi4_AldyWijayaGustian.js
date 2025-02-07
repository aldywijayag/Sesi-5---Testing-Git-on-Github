function kalkulator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return `Penjumlahan: ${num1} + ${num2} = ${num1 + num2}`;
        case '-':
            return `Pengurangan: ${num1} - ${num2} = ${num1 - num2}`;
        default:
            return `Operator ${operator}: Operator tidak valid`;
    }
}

console.log(kalkulator(15, 5, '+'));
console.log(kalkulator(25, 10, '-'));
console.log(kalkulator(10, 5, '*'));

// Test