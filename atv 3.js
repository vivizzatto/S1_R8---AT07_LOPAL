// Para este exercício, o laço de repetição FOR foi o melhor.

// com for
console.log("Exercicio com FOR.")

for (let i = 0; i <= 30; i+=3) {
    console.log("Número:", i);
}
console.log("Fim.")

// com while
console.log("Exercicio com WHILE.");

let x = 0;
while (x <= 30) {
    console.log("Número: ", x);
    x+=3;
} console.log("Fim.")

// com do-while
console.log("Exercicio com DO-WHILE.")

let y = 0
do {
    console.log("Número: ", y);
    y+=3;
} while (y <= 30);
console.log("Fim.")