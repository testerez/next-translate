export default function templateWithHoc(code: string, { skipInitialProps, typescript, pageName, hasLoadLocaleFrom, }?: {
    skipInitialProps?: boolean | undefined;
    typescript?: boolean | undefined;
    pageName?: string | undefined;
    hasLoadLocaleFrom?: boolean | undefined;
}): string;
