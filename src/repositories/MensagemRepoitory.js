export class MensagemRepository {
    constructor() {
        this.mensagem = []
    }

    getMensagens(contatoID) {
        return this.getMensagens.filter(mensagem => mensagem.contatoID)
    }


    adicionarMensagem(mensagem) {
        mensagens.push(mensagem)
    }
}