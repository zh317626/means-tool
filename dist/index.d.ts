declare const _default: {
    regular: {
        phone(phone: string): Boolean;
        identityCard(card: string): Boolean;
    };
    files: {
        getImageInfo(imgUrl: String): Promise<unknown>;
        base64toFile(base: String, filename?: any): File;
    };
    means: {
        urlToObjet(url: string): Object;
        ascii(obj?: Object): any;
        trim(str: string, type?: string | number): string;
        randomColor(): string;
        max(arr: any[], key?: string | undefined): string | number | void;
        min(arr?: any[], key?: string | undefined): string | number | void;
    };
};
export default _default;
