package com.espto.espto.enums;

import com.espto.espto.common.EnumTranslate;
import lombok.Getter;

@Getter
public enum EsporteTipo implements EnumTranslate {

    VOLEI_CADEIRA_RODAS("Vôlei com cadeira de rodas"),
    BASQUETE_CADEIRA_RODAS("Basquete com cadeira de rodas");

    private final String translateKey;

    EsporteTipo(String translateKey) {
        this.translateKey = translateKey;
    }

}
