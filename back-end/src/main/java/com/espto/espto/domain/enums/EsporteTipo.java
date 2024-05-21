package com.espto.espto.domain.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@AllArgsConstructor
public enum EsporteTipo {

    VOLEI_CADEIRA_RODAS("Vôlei com cadeira de rodas"),
    BASQUETE_CADEIRA_RODAS("Basquete com cadeira de rodas");

    EsporteTipo(String descricao) {
    }
}
