function simularPedido(produto, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (produto && tempo >= 0) {
                resolve(`Pedido do produto "${produto}" concluído em ${tempo}ms`);
            } else {
                reject('Erro: Produto inválido ou tempo negativo');
            }
        }, tempo);
    });

}

simularPedido("Smartphone", 2000).then((mensagem) => {
    console.log(mensagem);
}).catch((erro) => {
    console.error(erro);
}
).finally(() => {
    console.log("Processo de pedido finalizado.");
});