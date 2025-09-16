
let area = prompt("Dentro da tecnologia, qual área você quer seguir 'Front-end' ou 'Back-end?': Digite o nome da área: ")

if(area === "Front-end") {
    prompt('Muito legal! Dentro do Front-end voce quer usar qual framework: Vue ou React?')
} else if(area === "Back-end") {
    prompt('Muito legal! Dentro do Back-end voce quer usar qual linguagem: C# ou Java?')
} else {
    alert('Área inválida. Por favor, escolha entre "Front-end" ou "Back-end".')
}


let especializacao = prompt(' Digite 1 se você quer seguir se especializando na área escolhida ou 2 para tornar-se um Fullstack: ')

if(especializacao == 1) {
    alert('Muito legal! Especialização vai te tornar um profissional muito requisitado!')
} else if (especializacao == 2) {
    alert('Muito legal! Fullstack é o futuro!')
} else {
    alert('Opção inválida. Por favor, digite 1 ou 2.')
}

let tecnologias = []
let novaTec = ' '        
while(novaTec != 'sair') {
    tecnologias.push(novaTec)
    novaTec = prompt('Tem mais alguma tecnologia que voce gostaria de aprender? Se quiser sair, digite "sair".')            
}
alert('Essas são as tecnologias que voce quer aprender: ' + tecnologias)