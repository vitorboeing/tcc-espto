package com.espto.espto.translates;

import com.espto.espto.enums.Language;
import lombok.extern.slf4j.Slf4j;

import java.util.List;
import java.util.Locale;

import static com.espto.espto.enums.Language.PORTUGUESE;
import static java.util.Arrays.stream;
import static java.util.Objects.isNull;
import static java.util.stream.Collectors.toList;

@Slf4j
public class Translate {

    private static final String BASE_NAME_MESSAGES = "i18n/messages";
    private static final String DELIMITER = ",";

    public static String getTranslateMultiple(final String keys) {
        final String[] keysDelimited = keys.split(DELIMITER);
        final List<String> keysList = stream(keysDelimited)
                .map(Translate::getTranslateMultipleWords)
                .collect(toList());

        return String.join(DELIMITER, keysList);
    }

    private static String getTranslateMultipleWords(final String word) {
        final String[] wordsDelimited = word.split(" ");
        final List<String> keysList = stream(wordsDelimited)
                .map(Translate::getTranslate)
                .collect(toList());

        return String.join(" ", keysList);
    }

    public static String getTranslate(final Object key) {
        return getTranslate(key, PORTUGUESE);
    }

    public static String getTranslate(final Object key, final Language language) {
//        final Locale locale = getLocale(language);
//        final ResourceBundle resourceBundle = getBundle(BASE_NAME_MESSAGES, locale);
//        final String keyAsString = asString(key);
//
//        try {
//            return resourceBundle.getString(keyAsString.trim());
//        } catch (MissingResourceException e) {
//            return keyAsString;
//        } catch (Exception e) {
//            log.error(e.getMessage(), e);
//            return keyAsString;
//        }
        return null;
    }

    private static Locale getLocale(final Language language) {
        if (isNull(language)) {
            return PORTUGUESE.getLocale();
        }

        return language.getLocale();
    }
}
