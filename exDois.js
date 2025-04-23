let numeroInteiro = Math.floor(Math.random() * 10) + 1; //math.floor é a função para ser um número inteiro..
alert("Tente adivinhar o número gerado aleatóriamente!")

let tentativaAtual = 1;
let maximoTentativas = 3;

    do{
        let tentativa = parseInt(prompt("Digite um número inteiro de 1 a 10: "));
        if(tentativa == numeroInteiro){
            alert(`Parabéns, Você acertou :) O número era ${numeroInteiro}!`);
            acertou = true;
            break;
        } else if(tentativa != numeroInteiro && tentativaAtual <3) {
            if(tentativa > numeroInteiro){
                alert("O número secreto é menor!");
                tentativaAtual++
            } else{
                alert("O número secreto é maior!");
                tentativaAtual++
            }
        } else {
            alert(`Errado :( Suas tentativas acabaram! O número secreto era ${numeroInteiro}!!!`)
            break;
        }
    } while(tentativaAtual <= maximoTentativas);



