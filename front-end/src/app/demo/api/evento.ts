import { City } from './location';
import { User } from './user';
import { Usuario } from './usuario';

export class Evento {
    nome: String;
    descricao?: String;
    esporteTipo: EsporteTipo;
    quantidade: number;
    quantidadeParticipantes: number;
    localizacao: string;
    urlImagem: string;
    horario?: EventoHorario;
    location: EventLocation;
    userCreator?: User;
    participantes?: EventoParticipantes[];
}

export class EventLocation {
    evento?: Evento;
    id?: number;
    city?: City;
    address?: String;
    local?: string;
}

export class EventoParticipantes {
    usuario: Usuario;
}

export enum EsporteTipo {
   VOLEI_CADEIRA_RODAS =  'Vôlei Cadeira Rodas',
    BASQUETE_CADEIRA_RODAS = 'Basquete Cadeira Rodas'
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
