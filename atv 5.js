// Para este exercício, o WHILE pode ser a melhor opção, já que ao fazer o código não sabemos qual será o valor final que o usuário irá digitar, então não é bem definido como normalmente desejado no FOR.

// com for
console.log("Exercicio com FOR.")

j = parseInt(prompt("Digite um número inteiro: "))
for (let i = 1; i <= j; i++) {
    console.log("Número:", i);
}
console.log("Fim.")

// com while
console.log("Exercicio com WHILE.");

let x = 1;
while (x <= j) {
    console.log("Número: ", x);
    x++;
} console.log("Fim.")

// com do-while
console.log("Exercicio com DO-WHILE.")

let y = 1
do {
    console.log("Número: ", y);
    y++
} while (y <= j);
console.log("Fim.")