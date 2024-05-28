package com.espto.espto.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Locale;

import static lombok.AccessLevel.PRIVATE;

@AllArgsConstructor(access = PRIVATE)
@Getter
public enum Language {
    PORTUGUESE(new Locale("pt", "BR")),
    ENGLISH(new Locale("en", "US")),
    SPANISH(new Locale("es", "ES"));

    private Locale locale;
}
