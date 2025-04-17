// Para este exercício, o WHILE pode ser a melhor opção da mesma forma que no EX. 5, já que estamos pedindo o valor das variaveis para o usuário.

// Com for apenas
console.log("Exercicio com FOR.")

prim = parseInt(prompt("Digite o primeiro valor da contagem: "));
ult = parseInt(prompt("Digite o último valor da contagem: "));
inc = parseInt(prompt("Digite o valor que vai ser o incremento: "));

if(prim < ult) {
    for (let i = prim; i <= ult; i+=inc) {
        console.log("Número:", i);
    }
    console.log("Fim.")    
} else {
    for (let i = prim; i >= ult; i-=inc) {
        console.log("Número:", i);
    }
    console.log("Fim.") 
}
