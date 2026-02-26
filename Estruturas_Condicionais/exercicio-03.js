/*Exercício 03: Menu de Bebidas
Use switch para exibir a bebida escolhida:
1 → "Água"
2 → "Refrigerante"
3 → "Suco" */

let bebida = 4
switch(bebida){
    case 1:{
        console.log("Água")
        break
    }
    case 2:{
        console.log("Refrigerante")
        break
    }
    case 3:{
        console.log("Suco")
        break
    }default:{
        console.log("Opção Invalida!")
    }
}