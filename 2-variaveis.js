
let nome = prompt('Qual o seu nome?')
let idade = prompt('Qual a sua idade?')
let linguagem = prompt('Qual a sua linguagem de programação você está estudando?')

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)

let resposta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 para SIM ou 2 para NÃO`)


if (resposta == 1) {
    console.log('Muito bom! Continue estudando e você terá muito sucesso.')
}   else if (resposta == 2) {
    console.log('Ahh que pena... Já tentou aprender outras linguagens?')
}