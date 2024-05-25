package com.espto.espto.common;

import com.espto.espto.translates.Translate;

public interface EnumTranslate {

    String getTranslateKey();

    default String getTranslate() {
        return Translate.getTranslate(getTranslateKey());
    }

}
