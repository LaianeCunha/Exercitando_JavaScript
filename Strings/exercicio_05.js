/*Exercício 05: Validando Email Simples
Verifique se o email contém "@" e ".". */
let email = "estudo@teste.com"
if(email.endsWith("@teste.com")){
    console.log("O e-mail contém @ e .(ponto final)")
}else{
    console.log("O e-mail NÃO contém os caracteres @ e .(ponto final)")
}