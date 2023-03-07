export interface FAQ {
    readonly question: { [lang: string]: string };
    readonly answer: { [lang: string]: string[] };
}
export interface FAQDocument {
    readonly defaultLang: string;
    readonly faqs: FAQ[];
}
