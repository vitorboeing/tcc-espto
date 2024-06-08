import { EsporteTipo, EventScheduleSituation } from './evento';

export class EventCalendar {
    id: number;
    sportType: EsporteTipo;
    startSchedule: Date;
    endSchedule: Date;
    situation: EventScheduleSituation;
}
