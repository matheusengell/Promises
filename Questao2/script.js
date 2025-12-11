function login() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(user === "theu" && senha ==="theu123!"){
                resolve("Login bem-sucedido!")
            }else{
                reject("Credenciais inválidas.")
            }
            })
    })
}

login().then((resultado) =>{
    console.log(resultado)

.catch((erro) =>{
    console.error(erro)
})
.finally(() =>{
    console.log("Processo de login finalizado.")
})
})