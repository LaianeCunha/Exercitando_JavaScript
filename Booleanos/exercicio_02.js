/* Exercício 02: Acesso Administrativo
Verifique se o usuário é admin (isAdmin) e está ativo (estaAtivo).
Se ambos forem true → "Acesso total"
Caso contrário → "Acesso restrito" */

let isAdmin = false
let estaAtivo = true
if(isAdmin && estaAtivo == true){
    console.log("Acesso total")
}else{
    console.log("Acesso restrito")
}
