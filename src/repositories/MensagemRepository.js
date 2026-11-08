export class MensagemRepository {
    constructor() {
        this.mensagens = [
            { id: 1, contatoId: 1, texto: "Oi! Tudo bem?", recebida: true },
            { id: 3, contatoId: 2, texto: "E aí! Já fez a atividade de mobile?", recebida: true },
            { id: 4, contatoId: 3, texto: "Olá! Vamos estudar hoje?", recebida: true },
            { id: 5, contatoId: 4, texto: "Boa tarde! Me avisa quando puder falar.", recebida: true },
            { id: 6, contatoId: 5, texto: "Fala mano! Tranquilo?", recebida: true },
        ];
    }

    getMensagens(contatoId) {
        return this.mensagens.filter(mensagem => String(mensagem.contatoId) === String(contatoId));
    }

    adicionarMensagem(mensagem) {
        this.mensagens.push(mensagem);
    }
}
