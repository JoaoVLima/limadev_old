export type Evento = {
    "id": string,
    "artist": string,
    "titulo": string,
    "descricao": string,
    "data": string,
    "tipo": string,
    "link_imagem": string,
    "link_spotify": string,
    "link_soundcloud": string,
    "link_bandcamp": string,
    "link_youtube": string,
    "link_applemusic": string,
    "link_deezer": string,
    "link_tidal": string

}

export default class Eventos {
    public eventos: Evento[];

    constructor(eventos: Evento[]) {
        this.eventos = eventos;
    }

}

