// Para este exercício, o laço de repetição FOR foi o melhor.

// com for
console.log("Exercicio com FOR.")

for (let i = 50; i >= 0; i-=5) {
    console.log("Número:", i);
}
console.log("Fim.")

// com while
console.log("Exercicio com WHILE.");

let x = 50;
while (x >= 0) {
    console.log("Número: ", x);
    x-=5;
} console.log("Fim.")

// com do-while
console.log("Exercicio com DO-WHILE.")

let y = 50
do {
    console.log("Número: ", y);
    y-=5;
} while (y >= 0);
console.log("Fim.")