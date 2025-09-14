
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'



// “igual a” (==). Ele compara apenas os valores dos dois lados da equação
if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

// “idêntico a” (===). Ele não só compara os valores dos dois lados da equação, como também verifica se eles são do mesmo tipo
if (numeroTrinta === stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes')
} else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor')
}

// E assim como os operadores “==” e “===”, usamos a mesma lógica para os seus inversos “!=” e “!==”
if (numeroDez != stringDez) {
    console.log(true)
} else {
    console.log(false)
}

if (numeroDez !== stringDez) {
    console.log(true)
} else {
    console.log(false)
}

