import { MensagemRepository } from "../repositories/MensagemRepoitory";

export class MensagemService {

    constructor() {
        this.repository = new MensagemRepository();
    }

    getMensagens(contatoID) {
        return this.repository.getMensagens(contatoID);
    }

    enviarMensagem(contatoID, texto) {
        if (!texto.trim()) {
            return;
        }

        const mensagem = {
            id: Date.now(),
            contatoID: contatoID,
            texto:texto,
            recebida: recebida
        }


        this.repository.adicionarMensagem(mensagem)
    }
}