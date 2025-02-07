const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan angka pertama: ', (num1) => {
    rl.question('Masukkan operator (+ atau -): ', (operator) => {
        rl.question('Masukkan angka kedua: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            function calculator(num1, num2, operator) {
                switch (operator) {
                    case '+':
                        return num1 + num2;
                    case '-':
                        return num1 - num2;
                    default:
                        return 'Operator tidak valid';
                }
            }

            console.log(`Hasil: ${calculator(num1, num2, operator)}`);
            rl.close();
        });
    });
});

//commit pertama