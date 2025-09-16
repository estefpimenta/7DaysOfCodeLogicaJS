
let numeroSorteado = Math.floor(Math.random() *10) + 1

let chute = parseInt(prompt('Tente adivinhar o número que estou pensando, entre 1 e 10. Você tem 3 tentativas: '))
let tentativas = 1

while(tentativas < 3) {
    if(chute < numeroSorteado) {
        chute = parseInt(prompt('O número é maior! Tente novamente: '))
    } else if(chute > numeroSorteado) {
        chute = parseInt(prompt('O número é menor! Tente novamente: '))
    } else if  (chute === numeroSorteado) {
        alert('Parabéns! Você acertou o número!')
        break
    }
    tentativas++                  
}

if(tentativas === 3 && chute !== numeroSorteado) {
    alert('Suas tentativas acabaram! O número era ' + numeroSorteado)
}
