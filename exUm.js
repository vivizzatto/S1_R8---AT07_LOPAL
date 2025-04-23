primNum = parseInt(prompt("Digite o primeiro valor da contagem: "));
ultNum = parseInt(prompt("Digite o último valor da contagem: "));

if(primNum < ultNum) {
    for (let i = primNum; i <= ultNum; i++) {
        if(i % 2 == 0) {
            console.log("Número:", i);
        }
    }
    console.log("Fim.");    

} else {
    for (let i = ultNum; i <= primNum; i++) {
        if(i % 2 == 0) {
            console.log("Número:", i); 
        }
    }

    console.log("Fim.") 
}