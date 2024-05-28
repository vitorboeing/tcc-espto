import { Usuario } from './usuario';

export class Evento {
    nome: String;
    descricao?: String;
    esporteTipo: EsporteTipo;
    quantidade: number;
    quantidadeParticipantes: number;
    urlImagem: string;

    horario?: EventoHorario;

    participantes?: EventoParticipantes[];
}

export class EventoParticipantes {
    usuario: Usuario;
}

export enum EsporteTipo {
   VOLEI_CADEIRA_RODAS =  'VOLEI_CADEIRA_RODAS',
    BASQUETE_CADEIRA_RODAS = 'BASQUETE_CADEIRA_RODAS'
}

export enum EventoHorarioTipo {
    UMA_VEZ = 'Uma vez',
    SEMANAL = 'Semanal',
    MENSAL = 'Mensal',
}

export enum DiaSemana {
    SEGUNDA = 'Segunda',
    TERCA = 'Terça',
    QUARTA = 'Quarta',
    QUINTA = 'Quinta',
    SEXTA = 'Sexta',
    SABADO = 'Sábado',
    DOMINGO = 'Domingo'
}

export class EventoHorario {
    tipo: EventoHorarioTipo;
    horarioComeco: Date;
    horarioFim: Date;
}
