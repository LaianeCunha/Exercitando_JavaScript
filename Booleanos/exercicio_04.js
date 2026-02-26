/*Exercício 04: Sistema de Entrega
1 → "Entrega expressa"
2 → "Entrega padrão"
3 → "Retirada no local" */
let entrega = 1
switch(entrega){
    case 1:
        console.log("Entrega expressa")
        break
    case 2:
        console.log("Entrega padrão")
        break
    case 3:
        console.log("Retirada no local")
        break
    default:
        console.log("Opção inválida")
}