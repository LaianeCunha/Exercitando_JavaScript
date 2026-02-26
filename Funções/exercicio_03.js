/* Exercício 03: Contando Letras de um Nome
Crie uma função que receba um nome e retorne a quantidade de letras. */
function contandoLetras(nome){
    let contador = 0
    for(let i = 0; i< nome.length; i++){
        contador ++
    }
    return contador
}
console.log(contandoLetras("Jose"))

