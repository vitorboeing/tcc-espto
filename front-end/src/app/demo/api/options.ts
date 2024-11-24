import { EnumUtil } from "../util/EnumUtil";

export enum EsporteTipo {
    VOLEI_CADEIRA_RODAS = 'Vôlei com Cadeira Rodas',
    BASQUETE_CADEIRA_RODAS = 'Basquete com Cadeira Rodas',
    NATACAO_ADAPTADA = "Natação Adaptada",
    ATLETISMO_ADAPTADO="Atletismo Adaptado",
    TENIS_CADEIRA_RODAS="Tênis em Cadeira de Rodas",
    OUTRO_DEFICIENCIA_FISICA = "Outro Esporte (Deficiência Física)",

    GOALBALL="Goalball",
    FUTEBOL_CEGOS="Futebol para Cegos",
    JUDO = "Judô Paralímpico",
    OUTRO_DEFICIENCIA_VISUAL = "Outro Esporte (Deficiência Visual)",

    BASQUETE_PARALIMPICO = "Basquete Paralímpico",
    ATLETISMO_PARALIMPICO_INTELECTUAL = "Atletismo Paralímpico",
    NATACAO_PARALIMPICA_INTELECTUAL = "Natação Paralímpica",
    OUTRO_DEFICIENCIA__INTELECTUAL = "Outro Esporte (Deficiência Intelectual)",

    FUTEBOL_SILENCIOSO="Futebol Silencioso",
    VOLEI_SILENCIOSO="Vôlei Silencioso",
    BASQUETE_SILENCIOSO="Basquete Silencioso",
    OUTRO_DEFICIENCIA_AUDITIVA = "Outro Esporte (Deficiência Auditiva)",
}


export class Options {

    static SPORT_TYPES = [
            {
                label: 'Deficiência Física',
                value: 'df',
                items: [
                    { label: EsporteTipo.VOLEI_CADEIRA_RODAS, value: 'VOLEI_CADEIRA_RODAS' },
                    { label: EsporteTipo.BASQUETE_CADEIRA_RODAS, value: 'BASQUETE_CADEIRA_RODAS' },
                    { label: EsporteTipo.NATACAO_ADAPTADA, value: 'NATACAO_ADAPTADA' },
                    { label: EsporteTipo.ATLETISMO_ADAPTADO, value: 'ATLETISMO_ADAPTADO' },
                    { label: EsporteTipo.TENIS_CADEIRA_RODAS, value: 'TENIS_CADEIRA_RODAS' },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA_FISICA, value: 'OUTRO_DEFICIENCIA_FISICA' },
                ]
            },
            {
                label: 'Deficiência Visual',
                value: 'dv',
                items: [
                    { label: EsporteTipo.GOALBALL, value: 'GOALBALL' },
                    { label: EsporteTipo.FUTEBOL_CEGOS, value:'FUTEBOL_CEGOS' },
                    { label: EsporteTipo.JUDO, value: 'JUDO' },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA_VISUAL, value: 'OUTRO_DEFICIENCIA_VISUAL' },
                ]
            },
            {
                label: 'Deficiência Intelectual',
                value: 'di',
                items: [
                    { label: EsporteTipo.BASQUETE_PARALIMPICO, value: 'BASQUETE_PARALIMPICO' },
                    { label: EsporteTipo.ATLETISMO_PARALIMPICO_INTELECTUAL, value: 'ATLETISMO_PARALIMPICO_INTELECTUAL' },
                    { label: EsporteTipo.NATACAO_PARALIMPICA_INTELECTUAL, value:'NATACAO_PARALIMPICA_INTELECTUAL' },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA__INTELECTUAL, value: 'OUTRO_DEFICIENCIA__INTELECTUAL' },
                ]
            },
            {
                label: 'Deficiência Auditiva',
                value: 'da',
                items: [
                    { label: EsporteTipo.FUTEBOL_SILENCIOSO, value: 'FUTEBOL_SILENCIOSO' },
                    { label: EsporteTipo.VOLEI_SILENCIOSO, value: 'VOLEI_SILENCIOSO' },
                    { label: EsporteTipo.BASQUETE_SILENCIOSO, value: 'BASQUETE_SILENCIOSO' },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA_AUDITIVA, value: 'OUTRO_DEFICIENCIA_AUDITIVA' },
                ]
            }
        ];

}
