export default function templateWithLoader(rawCode: string, { page, typescript, loader, hasLoader, hasLoadLocaleFrom, }?: {
    page?: string | undefined;
    typescript?: boolean | undefined;
    loader?: string | undefined;
    hasLoader?: boolean | undefined;
    hasLoadLocaleFrom?: boolean | undefined;
}): string;
