import { Usuario } from "./usuario"

export class Evento {
    nome: String;
    descricao?: String;
    esporteTipo: EsporteTipo;
    quantidade:  number
    quantidadePraticantes: number
    urlImagem: string;
    participantes?: EventoParticipantes[]
}

export class EventoParticipantes {
    usuario : Usuario
}

export enum EsporteTipo {
    VOLEI_CADEIRA_RODAS = "Vôlei com cadeira de rodas",
    BASQUETE_CADEIRA_RODAS = "Basquete com cadeira de rodas"
}

export enum EsporteHorarioTipo {
    UMA_VEZ = 'Uma vez',
    DIARIO = 'Diário',
    SEMANAL = 'Semanal',
    MENSAL = 'Mensal',
    ANUAL = 'Anual',
}


