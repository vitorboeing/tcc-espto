package com.espto.espto.enums;

import lombok.Getter;

@Getter
public enum DayWeek {
    SEGUNDA(1),
    TERCA(2),
    QUARTA(3),
    QUINTA(4),
    SEXTA(5),
    SABADO(6),
    DOMINGO(7);

    private final Integer codeDay;

    DayWeek(Integer codeDay) {
        this.codeDay = codeDay;
    }
}
