import { MensagemRepository } from "../repositories/MensagemRepository.js";

export class MensagemService {
    constructor(repository = new MensagemRepository()) {
        this.repository = repository;
    }

    getMensagens(contatoId) {
        return this.repository.getMensagens(contatoId);
    }

    enviarMensagem(contatoId, texto) {
        if (!texto || !texto.trim()) {
            return null;
        }

        const novaMensagem = {
            id: Date.now(),
            contatoId: contatoId,
            texto: texto.trim(),
            recebida: false,
        };

        this.repository.adicionarMensagem(novaMensagem);
        return novaMensagem;
    }
}

// Instância única para compartilhamento de dados em memória entre telas
export const mensagemService = new MensagemService();
