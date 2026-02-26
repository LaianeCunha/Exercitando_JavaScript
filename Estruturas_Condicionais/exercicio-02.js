/* Exercício 02: Classificação de Velocidade
Receba um valor de velocidade.
Até 60 km/h: "Velocidade permitida"
Entre 61 e 80: "Atenção"
Acima de 80: "Multado" */

let velocidade = 70
if(velocidade <= 60){
    console.log("Velocidade permitida")
}else if(velocidade > 80){
    console.log("Multado")
}else{
    console.log("Atenção")
}