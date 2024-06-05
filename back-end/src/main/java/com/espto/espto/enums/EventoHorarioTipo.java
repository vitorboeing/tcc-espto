package com.espto.espto.enums;

import com.espto.espto.common.EnumTranslate;
import lombok.Getter;

@Getter
public enum EventoHorarioTipo implements EnumTranslate {

    NAO_SE_REPETE("Não se repete"),
    SEMANAL("Semanal"),
    MENSAL("Mensal");

    private final String translateKey;

    EventoHorarioTipo(String translateKey) {
        this.translateKey = translateKey;
    }
}
