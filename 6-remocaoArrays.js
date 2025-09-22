


let compra = prompt('você deseja adicionar uma comida na sua lista de compras? (sim/não)')
let remover = prompt('você deseja remover algum item da lista? (sim/não)')

let listaFrutas = []
let listaLaticinios = []
let listaCongelados = []
let listaDoces = []

         

if(compra.toLowerCase() === 'sim') {
    let continuar = "sim"
    

    while(continuar.toLocaleLowerCase() ===  'sim') {
        let comida = prompt('Qual comida você deseja adicionar?')
        let categoria = prompt('Qual a categoria dessa comida? (ex: frutas, laticínios, congelados ou doces')
        
        if(categoria.toLowerCase() === 'frutas') {
            listaFrutas.push(comida)
            } else if(categoria.toLowerCase() === 'laticínios') {
            listaLaticinios.push(comida)
            } else if(categoria.toLowerCase() === 'congelados') {
            listaCongelados.push(comida)
            } else if(categoria.toLowerCase() === 'doces') {
            listaDoces.push(comida)
            }
            continuar = prompt('deseja continuar adicionando itens na lista? (sim/não)')
    }
        
    }
    

    else {
        alert('ok, até a próxima!')

}


if (compra.toLowerCase() === 'não' && remover.toLowerCase() === 'sim') {
    let removerItem = prompt('Qual item você deseja remover?')

    if(listaFrutas.includes(removerItem)) { 
        let indice = listaFrutas.indexOf(removerItem)
        listaFrutas.splice(indice, 1)
    } else if(listaLaticinios.includes(removerItem)) {
        let indice = listaLaticinios.indexOf(removerItem)
        listaLaticinios.splice(indice, 1)               
    } else if(listaCongelados.includes(removerItem)) {
        let indice = listaCongelados.indexOf(removerItem)
        listaCongelados.splice(indice, 1)               
    } else if(listaDoces.includes(removerItem)) {
        let indice = listaDoces.indexOf(removerItem)
        listaDoces.splice(indice, 1)               
    } else {
        alert('Item não encontrado na lista')   
}
} else {
    alert('ok, até a próxima!')
}     

console.log(`
   ===================
    LISTA DE COMPRAS:
   ===================
Frutas: ${listaFrutas},
Laticínios: ${listaLaticinios},
Congelados: ${listaCongelados},
Doces: ${listaDoces}`)         

