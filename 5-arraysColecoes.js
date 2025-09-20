


let compra = prompt('você deseja adicionar uma comida na sua lista de compras? (sim/não)')

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

console.log(`
   ===================
    LISTA DE COMPRAS:
   ===================
Frutas: ${listaFrutas},
Laticínios: ${listaLaticinios},
Congelados: ${listaCongelados},
Doces: ${listaDoces}`)         

