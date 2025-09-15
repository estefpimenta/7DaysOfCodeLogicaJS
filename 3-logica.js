
let area = prompt('Dentro da tecnologia, qual área você quer seguir: Frontend ou Backend?')

if(area == "Frontend") {
    prompt('Muito legal! Dentro do Frontend voce quer usar qual framework: Vue ou React?')
} else {
    prompt('Muito legal! Dentro do Backend voce quer usar qual linguagem: C# ou Java?')
}

let especializacao = prompt('Voce quer seguir se especializando na área ou tornar-se um Fullstack?')

if(especializacao == "especializando") {
    alert('Muito legal! Especialização vai te tornar um profissional muito requisitado!')
} else {
    alert('Muito legal! Fullstack é o futuro!')
}

let tecnologias = []
let novaTec = ' '        
while(novaTec != 'sair') {
    tecnologias.push(novaTec)
    novaTec = prompt('Tem mais alguma tecnologia que voce gostaria de aprender? Se quiser sair, digite "sair".')            
}
alert('Essas são as tecnologias que voce quer aprender: ' + tecnologias)