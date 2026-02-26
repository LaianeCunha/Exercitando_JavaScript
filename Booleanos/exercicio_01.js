/* Exercício 01: Controle de Umidade
Se a umidade for menor que 30 → "Ar muito seco!"
Entre 30 e 60 → "Umidade ideal"
Acima de 60 → "Ar muito úmido!" */

let umidade = 61
if(umidade < 30){
    console.log("Ar muito seco!")
}else if(umidade < 60){
    console.log("Umidade ideal")
}else{
    console.log("Ar muito úmido!")
}