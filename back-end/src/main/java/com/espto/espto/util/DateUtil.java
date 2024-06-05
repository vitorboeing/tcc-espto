package com.espto.espto.util;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import static java.util.Objects.isNull;
import static java.util.Objects.nonNull;

public final class DateUtil {
    public static final String DEFAULT_PATTERN_DATE_TIME = "dd/MM/yyyy HH:mm:ss";
    public static final DateTimeFormatter DATE_TIME_FORMATTER = DateTimeFormatter.ofPattern(DEFAULT_PATTERN_DATE_TIME);
    public static final String PATTERN_DATE_TIME_ISO_8601 = "yyyy-MM-dd'T'HH:mm:ss";
    public static final DateTimeFormatter DATE_TIME_FORMATTER_ISO_8601 = DateTimeFormatter.ofPattern(PATTERN_DATE_TIME_ISO_8601);
    public static final String DEFAULT_PATTERN_DATE_TIME_WITHOUT_SECONDS = "dd/MM/yyyy HH:mm";
    public static final DateTimeFormatter DEFAULT_PATTERN_DATE_TIME_WITHOUT_SECONDS_FORMATTER = DateTimeFormatter.ofPattern(DEFAULT_PATTERN_DATE_TIME_WITHOUT_SECONDS);
    public static final String DEFAULT_PATTERN_DATE = "dd/MM/yyyy";
    public static final String DATE_PATTERN_WITHOUT_SEPARATOR = "ddMMyy";
    public static final String DEFAULT_PATTERN_TIME = "HH:mm:ss";
    public static final String TIME_PATTERN_WITHOUT_SEPARATOR = "HHmmss";
    public static final DateTimeFormatter MONTH_YEAR_FORMATTER = DateTimeFormatter.ofPattern("MM/yyyy");
    public static final DateTimeFormatter MONTH_FORMATTER = DateTimeFormatter.ofPattern("MMMM");

    public static final DateTimeFormatter PATTERN_DATE = DateTimeFormatter.ofPattern("dd-MM-yyyy");

    public static final ZoneId ZONE_BRAZIL = ZoneId.of("-03:00");
    public static final ZoneId ZONE_VIRGINIA = ZoneId.of("+00:00");

    public static final String ISO_LOCAL_DATE = "yyyy-MM-dd";
    public static final DateTimeFormatter ISO_LOCAL_DATE_FORMATTER = DateTimeFormatter.ofPattern(ISO_LOCAL_DATE);

    public static LocalDateTime toLocalDateTime(final String date) {
        return toLocalDateTime(date, DATE_TIME_FORMATTER);
    }

    public static LocalDateTime toLocalDateTime(final String date, final DateTimeFormatter formatter) {
        return LocalDateTime.parse(date, formatter);
    }

    public static String format(final LocalDateTime dateTime) {
        return format(dateTime, DATE_TIME_FORMATTER);
    }

    public static String format(final LocalDateTime dateTime, final DateTimeFormatter pattern) {
        return format(dateTime, pattern, "");
    }

    public static String format(final LocalDateTime dateTime, final DateTimeFormatter pattern, final String defaultValue) {
        if (isNull(dateTime) || isNull(pattern)) {
            return defaultValue;
        }

        return dateTime.format(pattern);
    }

    public static String format(LocalDate date) {
        return format(date, DEFAULT_PATTERN_DATE);
    }

    public static String format(LocalTime time) {
        return format(time, DEFAULT_PATTERN_TIME);
    }

    public static String format(LocalDate date, String pattern) {
        if (nonNull(date)) {
            DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(pattern);
            return date.format(dateTimeFormatter);
        } else {
            return "";
        }
    }

    public static String format(LocalTime time, String pattern) {
        if (nonNull(time)) {
            DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern(pattern);
            return time.format(dateTimeFormatter);
        } else {
            return "";
        }
    }

    public static LocalDateTime now() {
        return now(ZONE_VIRGINIA);
    }

    public static LocalDateTime now(ZoneId zoneId) {
        return LocalDateTime.now(zoneId);
    }

    public static LocalDateTime nowBrazil() {
        return now(DateUtil.ZONE_BRAZIL);
    }

    public static LocalDate nowOnlyDate() {
        return nowOnlyDate(ZONE_VIRGINIA);
    }

    public static LocalDate nowOnlyDate(ZoneId zoneId) {
        return LocalDate.now(zoneId);
    }

    public static LocalDateTime getNowMinusHours(final long hours) {
        return now(DateUtil.ZONE_BRAZIL).minusHours(hours);
    }

    public static LocalDate nowBrazilOnlyDate() {
        return nowOnlyDate(DateUtil.ZONE_BRAZIL);
    }

    public static Date localDateTimeToDate(LocalDateTime target, ZoneId zoneId) {
        return Date.from(target.atZone(zoneId).toInstant());
    }

    public static Date localDateTimeToDate(LocalDateTime target) {
        return Date.from(target.atZone(ZoneId.systemDefault()).toInstant());
    }

    public static String getMesAnoAtual() {
        return getMesAno(DateUtil.now(DateUtil.ZONE_BRAZIL), "MMyyyy");
    }

    public static String getMesAno(LocalDate dateTime) {
        return getMesAno(dateTime, "MMyyyy");
    }

    public static String getMesAno(LocalDate dateTime, String pattern) {
        return DateUtil.format(dateTime, pattern);
    }

    public static String getMesAno(LocalDateTime dateTime) {
        return getMesAno(dateTime, "MMyyyy");
    }

    public static String getMesAno(LocalDateTime dateTime, String pattern) {
        return getMesAno(dateTime.toLocalDate(), pattern);
    }

    public static LocalDate createDateByDay(Integer day) {
        return nowOnlyDate().withDayOfMonth(day);
    }

    public static boolean isBetween(final LocalDateTime startDate, final LocalDateTime endDate, final LocalDateTime dateToVerify) {
        return (dateToVerify.isEqual(startDate) || dateToVerify.isAfter(startDate))
                && (dateToVerify.isEqual(endDate) || dateToVerify.isBefore(endDate));
    }

    public static ZoneId getZoneId(final String zone) {
        return nonNull(zone) ? ZoneId.of(zone) : getDefaultZoneId();
    }

    public static ZoneId getDefaultZoneId() {
        return ZoneId.systemDefault();
    }

    public static LocalDateTime getDateWithDayMonthValid(final LocalDateTime date, final Integer dayOfMonthTarget) {
        return date.withDayOfMonth(getDayOfMonthValid(date, dayOfMonthTarget));
    }

    public static int getDayOfMonthValid(final LocalDateTime date, final Integer dayOfMonthTarget) {
        try {
            return date.withDayOfMonth(dayOfMonthTarget).getDayOfMonth();
        } catch (Exception e) {
            return date.toLocalDate().lengthOfMonth();
        }
    }

    public static LocalDateTime getLastDayOfMonth(LocalDateTime date) {
        return date.withDayOfMonth(date.toLocalDate()
                        .lengthOfMonth())
                .withHour(23)
                .withMinute(59)
                .withSecond(59);
    }

    public static boolean isCurrentMonth(final LocalDateTime date) {
        return nonNull(date)
                && date.getMonthValue() == LocalDate.now().getMonthValue()
                && date.getYear() == LocalDate.now().getYear();
    }
}
