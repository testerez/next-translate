export declare const clearCommentsRgx: RegExp;
export declare const defaultLoader = "(l, n) => import(`@next-translate-root/locales/${l}/${n}`).then(m => m.default)";
export declare function getDefaultAppJs(hasLoadLocaleFrom: boolean): string;
export declare function overwriteLoadLocales(exist: boolean): string;
export declare function hasExportName(data: string, name: string): boolean;
export declare function isPageToIgnore(page: string): boolean;
export declare function hasHOC(rawData: string): boolean;
