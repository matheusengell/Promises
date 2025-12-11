/*========================================= QUESTÃO 1 ==================================================*/
function donwloadFile(){
    return new Promise((resolve, reject) => {
        const concluido = Math.random() > 0.5

        setTimeout(() =>{
            if(concluido){
                resolve("Download concluído!")
            }else{
                reject("Erro no download")
            }
        }, 3000);
    })
}

donwloadFile().then((resultado) => {
    console.log(resultado)

}).catch((erro) =>{
 console.error(erro)
}).finally(() =>{
    console.log("Processo finalizado")
})


/*========================================= QUESTÃO 2 ==================================================*/








/*========================================= QUESTÃO 3 ==================================================*/

