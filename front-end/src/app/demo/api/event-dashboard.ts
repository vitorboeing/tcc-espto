import { EsporteTipo } from './evento';

export class EventDashboard {
    id: number;
    idUser: number;
    sportType: EsporteTipo;
    amountParticipants: number;
    amountActiveParticipants: number;
    local: string;
    nextSchedule: string;
}
