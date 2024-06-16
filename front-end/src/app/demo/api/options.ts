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
                    { label: EsporteTipo.VOLEI_CADEIRA_RODAS, value: EsporteTipo.VOLEI_CADEIRA_RODAS },
                    { label: EsporteTipo.BASQUETE_CADEIRA_RODAS, value: EsporteTipo.BASQUETE_CADEIRA_RODAS },
                    { label: EsporteTipo.NATACAO_ADAPTADA, value: EsporteTipo.NATACAO_ADAPTADA },
                    { label: EsporteTipo.ATLETISMO_ADAPTADO, value: EsporteTipo.ATLETISMO_ADAPTADO },
                    { label: EsporteTipo.TENIS_CADEIRA_RODAS, value: EsporteTipo.TENIS_CADEIRA_RODAS },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA_FISICA, value: EsporteTipo.OUTRO_DEFICIENCIA_FISICA },
                ]
            },
            {
                label: 'Deficiência Visual',
                value: 'dv',
                items: [
                    { label: EsporteTipo.GOALBALL, value: EsporteTipo.GOALBALL },
                    { label: EsporteTipo.FUTEBOL_CEGOS, value: EsporteTipo.FUTEBOL_CEGOS },
                    { label: EsporteTipo.JUDO, value: EsporteTipo.JUDO },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA_VISUAL, value: EsporteTipo.OUTRO_DEFICIENCIA_VISUAL },
                ]
            },
            {
                label: 'Deficiência Intelectual',
                value: 'di',
                items: [
                    { label: EsporteTipo.BASQUETE_PARALIMPICO, value: EsporteTipo.BASQUETE_PARALIMPICO },
                    { label: EsporteTipo.ATLETISMO_PARALIMPICO_INTELECTUAL, value: EsporteTipo.ATLETISMO_PARALIMPICO_INTELECTUAL },
                    { label: EsporteTipo.NATACAO_PARALIMPICA_INTELECTUAL, value: EsporteTipo.NATACAO_PARALIMPICA_INTELECTUAL },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA__INTELECTUAL, value: EsporteTipo.OUTRO_DEFICIENCIA__INTELECTUAL },
                ]
            },
            {
                label: 'Deficiência Auditiva',
                value: 'da',
                items: [
                    { label: EsporteTipo.FUTEBOL_SILENCIOSO, value: EsporteTipo.FUTEBOL_SILENCIOSO },
                    { label: EsporteTipo.VOLEI_SILENCIOSO, value: EsporteTipo.VOLEI_SILENCIOSO },
                    { label: EsporteTipo.BASQUETE_SILENCIOSO, value: EsporteTipo.BASQUETE_SILENCIOSO },
                    { label: EsporteTipo.OUTRO_DEFICIENCIA_AUDITIVA, value: EsporteTipo.OUTRO_DEFICIENCIA_AUDITIVA },
                ]
            }
        ];

}
