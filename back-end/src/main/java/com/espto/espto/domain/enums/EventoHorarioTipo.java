package com.espto.espto.domain.enums;

import com.espto.espto.common.EnumTranslate;
import lombok.Getter;

@Getter
public enum EventoHorarioTipo implements EnumTranslate {

    UMA_VEZ("Uma vez"),
    SEMANAL("Semanal"),
    MENSAL("Mensal");

    private final String translateKey;

    EventoHorarioTipo(String translateKey) {
        this.translateKey = translateKey;
    }
}
