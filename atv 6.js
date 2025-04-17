// Para este exercício, o melhor laço de repetição foi o FOR, já que tem fim e começo estabelecidos e é fácil incrementar o IF-ELSE.

// com for
console.log("Exercicio com FOR.")

for (let i = 30; i >= 1; i--) {
    if(i % 4 == 0) {
        console.log("Número:[",i,"]");
    } else {
        console.log("Número:", i);
    }
}
console.log("Fim.")

// com while
console.log("Exercicio com WHILE.");

let x = 30;
while (x >= 1) {
    if(x % 4 == 0) {
        console.log("Número:[",x,"]");
        x--;
    } else {
        console.log("Número:", x);
        x--;
    }
} console.log("Fim.")

// com do-while
console.log("Exercicio com DO-WHILE.")

let y = 30
do {
    if(y % 4 == 0) {
        console.log("Número:[",y,"]");
        y--;
    } else {
        console.log("Número:", y);
        y--;
    }
} while (y >= 1);
console.log("Fim.")