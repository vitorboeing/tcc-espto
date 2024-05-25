import * as moment from 'moment';

export default class DateUtil {
  static readonly DATE_PATTERN = 'DD/MM/YYYY';
  static readonly DATE_TIME_PATTERN = 'DD/MM/YYYY HH:mm:ss';
  static readonly DATE_TIME_PATTERN_WITHOUT_SECONDS = 'DD/MM/YYYY HH:mm';
  static readonly DATE_PATTERN_WITHOUT_SEPARATOR = 'DDMMYYYY';
  static readonly YEAR_PATTERN = 'YYYY';
  static readonly MONTH_PATTERN = 'MM';

  private constructor() {
  }

  static dateToString(value: Date): string {
    if (value) {
      return moment(value)
        .format('YYYY-MM-DD HH:mm:ss');
    }
    return null;
  }

  static format(value: Date, pattern: string): string {
    if (value) {
      return moment(value)
        .format(pattern);
    }
    return null;
  }

  static formatDate(value: Date): string {
    return this.format(value, DateUtil.DATE_PATTERN);
  }

  static formatStringAsDate(value: string) {
    return this.formatString(value, DateUtil.DATE_PATTERN);
  }

  static formatStringAsDateAndTime(value: string) {
    return this.formatString(value, 'DD/MM/YYYY HH:mm:ss');
  }

  static formatString(value: string, pattern: string): string {
    const date = this.asDate(value);
    return this.format(date, pattern);
  }

  static formatDateAndTimeWithoutUtc(value: Date): string {
    return this.formatDateAndTime(this.getDateWithoutUtc(value));
  }

  static formatDateAndTime(value: Date): string {
    if (value) {
      return this.format(value, 'DD/MM/YYYY HH:mm');
    }

    return '';
  }

  static getOnlyDate(target: Date): Date {
    return moment(target)
      .startOf('day')
      .toDate();
  }

  static isSameDate(firstDate: Date, secondDate: Date) {
    return moment(firstDate)
      .startOf('day')
      .isSame(moment(secondDate)
        .startOf('day'));
  }

  static isSameDateAndTime(firstDate: Date, secondDate: Date) {
    return moment(firstDate)
      .isSame(moment(secondDate));
  }

  private static subtractHelper(date: Date, target: number, unit: any): Date {
    return moment(date)
      .subtract(target, unit)
      .toDate();
  }

  private static plusHelper(date: Date, target: number, unit: any): Date {
    return moment(date)
      .add(target, unit)
      .toDate();
  }

  private static lastDayHelper(date: Date, unit: any): Date {
    return moment(date)
      .endOf(unit)
      .toDate();
  }

  private static startDayHelper(date: Date, unit: any): Date {
    return moment(date)
      .startOf(unit)
      .toDate();
  }

  static minusMonth(date: Date, target: number) {
    return this.subtractHelper(date, target, 'month');
  }

  static minusYear(date: Date, target: number) {
    return this.subtractHelper(date, target, 'year');
  }

  static minusDay(date: Date, target: number) {
    return this.subtractHelper(date, target, 'day');
  }

  static minusHour(date: Date, target: number) {
    return this.subtractHelper(date, target, 'hour');
  }

  static minusMinute(date: Date, target: number) {
    return this.subtractHelper(date, target, 'minute');
  }

  static minusSecond(date: Date, target: number) {
    return this.subtractHelper(date, target, 'second');
  }

  static plusMonth(date: Date, target: number) {
    return this.plusHelper(date, target, 'month');
  }

  static plusYear(date: Date, target: number) {
    return this.plusHelper(date, target, 'year');
  }

  static plusDay(date: Date, target: number) {
    return this.plusHelper(date, target, 'day');
  }

  static plusHour(date: Date, target: number) {
    return this.plusHelper(date, target, 'hour');
  }

  static plusMinute(date: Date, target: number) {
    return this.plusHelper(date, target, 'minute');
  }

  static plusSecond(date: Date, target: number) {
    return this.plusHelper(date, target, 'second');
  }

  static firstDayOfCurrentMonth() {
    return this.firstDayOfMonth(this.now());
  }

  static firstDayOfNextMonth() {
    return this.plusMonth(this.firstDayOfCurrentMonth(), 1);
  }

  static lastDayOfCurrentMonth() {
    return this.lastDayOfMonth(this.now());
  }

  static lastDayOfYear(date: Date) {
    return this.lastDayHelper(date, 'year');
  }

  static lastDayOfMonth(date: Date) {
    return this.lastDayHelper(this.lastDayHelper(date, 'month'), 'day');
  }

  static lastDayOfDay(date: Date): Date {
    return this.lastDayHelper(date, 'day');
  }

  static firstDayOfYear(date: Date) {
    return this.startDayHelper(date, 'year');
  }

  static firstDayOfMonth(date: Date) {
    return this.startDayHelper(this.startDayHelper(date, 'month'), 'day');
  }

  static endOfDay(date: Date) {
    const newDate = new Date(date);
    return new Date(newDate.setHours(23, 59, 59));
  }

  static secondsToHms(seconds: number): string {
    const secondsNumber = Number(seconds);
    const h = Math.floor(secondsNumber / 3600);
    const m = Math.floor((secondsNumber % 3600) / 60);
    const s = Math.floor(secondsNumber % 3600 % 60);

    const hourDisplay = h < 10 ? `0${h}` : `${h}`;
    const minuteDisplay = m < 10 ? `0${m}` : `${m}`;
    const secondDisplay = s < 10 ? `0${s}` : `${s}`;
    return `${hourDisplay}:${minuteDisplay}:${secondDisplay}`;
  }

  static nowWithoutSeconds() {
    const date = this.now();
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
  }

  static nowOnlyDate(): Date {
    return this.getOnlyDate(this.now());
  }

  static now(): Date {
    return new Date();
  }

  static asDate(date: string): Date {
    return new Date(date);
  }

  static isDate(date: string): boolean {
    if (!date) {
      return false;
    }

    const isNumber = Number(date);
    if (isNumber || isNumber === 0) {
      return false;
    }

    const validFormats = [
      'YYYY-MM-DDTHH:mm:ss.SSSSSS',
      'YYYY-MM-DDTHH:mm:ss',
      moment.HTML5_FMT.DATETIME_LOCAL_MS,
      moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
    ];
    return moment(date, validFormats, true)
      .isValid();
  }

  static getDateWithoutUtc(date: Date): Date {
    if (!date) {
      return date;
    }

    const getUTC = date.getTime();
    const offset = date.getTimezoneOffset() * 60000;
    return new Date(getUTC - offset);
  }

  static getDiffBetweenDatesInDays(firstDate: Date, secondDate: Date): number {
    if (!firstDate || !secondDate) {
      return null;
    }

    return moment(firstDate)
      .diff(moment(secondDate), 'days');
  }

  static formatYearMonth(value: Date): string {
    return this.format(value, 'MM/YYYY');
  }
}
