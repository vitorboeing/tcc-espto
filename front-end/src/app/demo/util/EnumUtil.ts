export class EnumUtil {

    public static getKeys(enumeration: any, ...enumerationsValues: any): Array<any> {
      return enumerationsValues.map(enumerationValue => this.getKey(enumeration, enumerationValue));
    }

    public static getKey(enumeration: any, enumerationValue: any): any {
      return Object.keys(enumeration)
        .find(key => enumeration[key] === enumerationValue);
    }

    // public static getKeyByTranslation(enumeration: any, translation: string, translateService: TranslateService): any {
    //   return Object.keys(enumeration)
    //     .find(key => this.getTranslationByKey(enumeration, key, translateService) === translation);
    // }

    // static getTranslationByKeyMultipleEnumerations(enumerationList: any[], keyEnum: any, translateService: TranslateService): string {
    //   if (!enumerationList) {
    //     return null;
    //   }

    //   return enumerationList.filter(enumeration => !!this.getValue(enumeration, keyEnum))
    //     .map(enumeration => this.getTranslationByKey(enumeration, keyEnum, translateService))
    //     .find(() => true);
    // }

    // public static getTranslationByKey(enumeration: any, keyEnum: any, translateService: TranslateService): string {
    //   const value = this.getValue(enumeration, keyEnum);

    //   try {
    //     return translateService.instant(value);
    //   } catch (exception) {
    //     return value;
    //   }
    // }

    // public static getValues(enumeration: any): Array<any> {
    //   return Object.keys(enumeration)
    //     .map(key => this.getValue(enumeration, key));
    // }
}
