import { City } from './location';
import { User } from './user';
import { Usuario } from './usuario';

export class Event {
    id: number;
    nome: String;
    description?: String;
    sportType: EsporteTipo;
    amountParticipants: number;
    amountActiveParticipants: number;
    configHorario?: EventoConfigHorario;
    location: EventLocation;
    userCreator?: User;
    participants?: EventParticipant[];
    schedules?: EventSchedule[];
    creatorIsParticipant: boolean;
}

export class EventLocation {
    id?: number;
    evento?: Event;
    city?: City;
    address?: String;
    local?: string;
}

export class EventParticipant {
    usuario: Usuario;
}

export class EventSchedule {
    horarioComeco: Date;
    horarioFim: Date;
    situation: EventScheduleSituation
    confirmedParticipants: number
    userFrequencies: EventScheduleUserFrequency[];
    currentUserFrequency: EventScheduleUserFrequency;
}

export class EventScheduleUserFrequency {
    user: User;
    frequency: boolean;
}

export enum EventScheduleSituation {
    CONFIRMED = "Confirmado",
    CANCELED = "Cancelado"
}

export enum EsporteTipo {
    VOLEI_CADEIRA_RODAS = 'Vôlei com Cadeira Rodas',
    BASQUETE_CADEIRA_RODAS = 'Basquete com Cadeira Rodas',
}

export enum EventoHorarioTipo {
    NAO_SE_REPETE = 'Não se repete',
    SEMANAL = 'Semanal',
}

export enum DiaSemana {
    SEGUNDA = 'Segunda',
    TERCA = 'Terça',
    QUARTA = 'Quarta',
    QUINTA = 'Quinta',
    SEXTA = 'Sexta',
    SABADO = 'Sábado',
    DOMINGO = 'Domingo',
}

export class EventoConfigHorario {
    tipo: EventoHorarioTipo;
    horarioSemanal?: HorarioSemanal
    uniqueSchedule?: UniqueSchedule
}

export class UniqueSchedule {
    startSchedule: Date;
    endSchedule: Date;
}

export class HorarioSemanal {
    startHour: Date;
    endHour: Date;
    daysWeek: WeeklyScheduleDayWeek[];
    weeks: WeeklyScheduleWeek[];
}

export class WeeklyScheduleDayWeek {
    dayWeek: DayWeek;
}

export class WeeklyScheduleWeek {
    week: Week;
}

export enum DayWeek {
    DOMINGO = "Domingo",
    SEGUNDA = "Segunda",
    TERCA = "Terça",
    QUARTA = "Quarta",
    QUINTA = "Quinta",
    SEXTA = "Sexta",
    SABADO = "Sábado"
}

export enum Week {
    FIRST_WEEK = "Primeira Semana",
    SECOUND_WEEK = "Segunda Semana",
    THIRD_WEEK = "Terceira Semana",
    FOURTH_WEEK = "Quarta Semana"
}
